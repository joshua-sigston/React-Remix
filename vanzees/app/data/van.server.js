import { prisma } from "./database.server";

export async function addVan(vanInfo) {
    try {
        return await prisma.van.create(
            {
                data: {
                    title: vanInfo.title,
                    price: +vanInfo.amount,
                    image: vanInfo.image,
                    description: vanInfo.description,
                    type: vanInfo.type
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