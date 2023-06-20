import { hash } from 'bcryptjs';

import { prisma } from './database.server';

export async function signUp({ email, password }) {
  const existingUser = await prisma.users.findFirst({ where: { email } });

  if (existingUser) {
    const error = new Error(
      'A user with the provided email address exists already.'
    );
    error.status = 422;
    throw error;
  }

  const passwordHash = await hash(password, 12);

  await prisma.users.create({ data: { email: email, password: passwordHash } });
}