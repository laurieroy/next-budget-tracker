import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { RedirectToSignIn } from "@clerk/nextjs";

import Logo from "@/components/Logo";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CurrencyComboBox } from "@/components/CurrencyComboBox";
import { Separator } from "@/components/ui/separator";

async function page() {
  const user = await currentUser();
  if (!user) {
    RedirectToSignIn("/sign-in");
  }

  return (
    <div>
      <div className="container flex flex-col max-w-2xl items-center justify-between gap-4">
        <h1 className="text-center text-3xl">
          Welcome, <span className="ml-2 font-bold">{user.firstName}! 👋</span>
        </h1>

        <h2 className="mt-4 text-center text-base text-muted-foreground">
          Let&apos;s get started by setting up your currency
        </h2>

        <h3 className="mt-2 text-center text-sm text-muted-foreground">
          You can change these settings at any time
        </h3>
      </div>

      <Separator />

      <Card className="w-full">
        <CardHeader className="">
          <CardTitle className="">Currency</CardTitle>
          <CardDescription>
            Set your default currency for transactions
          </CardDescription>
        </CardHeader>

        <CardContent>
          <CurrencyComboBox />
        </CardContent>
      </Card>

      <Separator />

      <Button className="w-full" asChild>
        <Link href={"/"}>I&apos;m done! Take me to the dashboard</Link>
      </Button>
      <div className="mt-8">
        <Logo />
      </div>
    </div>
  );
}
export default page;
