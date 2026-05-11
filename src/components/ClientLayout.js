"use client";

import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main className={isHome ? "" : "pt-18"}>
      {children}
    </main>
  );
}