"use server";

import { currentUser, redirectToSignIn } from "@clerk/nextjs/server";

import prisma from "@/lib/prisma";
import { UpdateUserCurrencySchema } from "@/schema/userSettings";

export async function UpdateUserCurrency(currency: string) {
  const parsedBody = UpdateUserCurrencySchema.safeParse({
    currency,
  });

  if (!parsedBody.success) {
    throw parsedBody.error;
  }

  const user = await currentUser();
  if (!user) {
    redirectToSignIn("/sign-in");
  }

  const userSettings = await prisma.userSettings.update({
    where: {
      userId: user.id,
    },
    data: {
      currency,
    },
  });

  return userSettings;
}
