import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageTransition } from "./PageTransition";
interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({
  children
}: LayoutProps) {
  return <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </div>;
}