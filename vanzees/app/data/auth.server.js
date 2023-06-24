import { prisma } from './database.server'
import { hash, compare } from 'bcryptjs';
import { createCookieSessionStorage } from '@remix-run/node';
import { redirect } from '@remix-run/node';

const SESSION_SECRET = process.env.SESSION_SECRET;

const sessionStorage = createCookieSessionStorage({
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        secrets: [SESSION_SECRET],
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60, // 30 days
        httpOnly: true //client side js code cannot access cookie
    }
});

// create user sessions
export async function createUserSession(userID, redirectPath) {
    // generate a session cookie
    const session = await sessionStorage.getSession();
    // add session data
    session.set('userID', userID);
    // send cookie to user
    return redirect(redirectPath, {
        headers: {
            'Set-Cookie': await sessionStorage.commitSession(session)
        }
    })
};

export async function getUserSession(request) {
    // get session cookie stored in browser
    const session = await sessionStorage.getSession(request.headers.get('Cookie'));
    const userID = session.get('userID');

    if(!userID) {
        return null;
    }

    return userID;
};

export async function endUserSession(request) {
    // get session cookie stored in browser
    const session = await sessionStorage.getSession(request.headers.get('Cookie'));

    return redirect('/', { headers: { 'Set-Cookie': await sessionStorage.destroySession(session) }});
}

// Protected Routes
export async function verifyUserLogin(request) {
   const userID = await getUserSession(request);

   if(!userID) {
        throw redirect('/login?mode=login');
   }

   return userID;
}

export async function signup({ email, password }) {
    const existingUser = await prisma.user.findFirst({ where: { email } });

    if(existingUser) {
        const error = new Error('A user with that email already exists.');
        error.status = 422;
        throw error;
    }

    const passwordHash = await hash(password, 12);
    const user = await prisma.user.create({data: { email: email, password: passwordHash }});
    return createUserSession(user.id, '/host');
};

export async function login({ email, password }) {
    const existingUser = await prisma.user.findFirst({ where: { email } });

    if(!existingUser) {
        const error = new Error('Could not log you in. Please check information provided.');
        error.status = 401;
        throw error;
    }

    const checkPassword = await compare(password, existingUser.password);

    if(!checkPassword) {
        const error = new Error('Could not log you in. Please check information provided.');
        error.status = 401;
        throw error;
    }

    return createUserSession(existingUser.id, '/host');
};