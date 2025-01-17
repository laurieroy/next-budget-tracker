import Logo from "@/components/Logo";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen w-full  items-center justify-center">
      <Logo />
      <div className="mt-12">{children}</div>
    </div>
  );
}
export default layout;
