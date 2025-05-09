"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isDashboardRoute = pathname.startsWith("/dashboard");

  return (
    <main>
      {!isDashboardRoute && <Navbar />}
      <div className={!isDashboardRoute ? "pt-10" : ""}>
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default AppShell;
