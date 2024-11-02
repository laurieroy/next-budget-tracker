import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen w-full items-center justify-center">
      {children}
    </div>
  );
}
