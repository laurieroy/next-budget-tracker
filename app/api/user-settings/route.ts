import { RedirectToSignIn } from "@clerk/nextjs";

import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/dist/server/web/spec-extension/revalidate";

export async function GET(request: Request) {
  const user = await currentUser;

  if (!user) {
    RedirectToSignIn("/sign-in");
  }

  let userSettings = await prisma.userSettings.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (!userSettings) {
    userSettings = await prisma.userSettings.create({
      data: {
        userId: user.id,
        currency: "USD",
      },
    });
  }

  revalidatePath("/");

  return Response.json(userSettings);
}
