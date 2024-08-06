import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <div className="px-[20px]">{children}</div>;
}
