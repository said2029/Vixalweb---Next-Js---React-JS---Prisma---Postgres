"use server";

import { db } from "@/lib/Prisma";

// product functions

export const CreateProduct = async (data: any) => {
  return await db.product.create({
    data: data,
  });
};
