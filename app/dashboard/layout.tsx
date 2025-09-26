import Footer from "@/ui/dashboard/Footer";
import Header from "@/ui/dashboard/Header";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col   bg-[#FEFEFE]">
      <Header />

      {children}

      <Footer />
    </div>
  );
}
