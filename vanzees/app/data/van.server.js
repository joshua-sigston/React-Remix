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
                }
            }
        )
    } catch (error) {
        console.log(error)
    }
}