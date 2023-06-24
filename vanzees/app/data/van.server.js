import { prisma } from "./database.server";

export async function addVan(vanInfo, userID) {
    try {
        return await prisma.van.create(
            {
                data: {
                    title: vanInfo.title,
                    price: +vanInfo.amount,
                    image: vanInfo.image,
                    description: vanInfo.description,
                    type: vanInfo.type,
                    User: { connect: { id: userID } }
                }
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export async function getVans() {
    try {
        const vans = await prisma.van.findMany();
        return vans;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export async function getUserVans(userId) {
    try {
        const vans = await prisma.van.findMany({
            where: { userId }
        })
        return vans;
    } catch (error) {
        console.log(error);
        throw error;
    }
}