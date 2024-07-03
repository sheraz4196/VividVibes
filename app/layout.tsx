import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VividVibes | Home",
  description:
    "Welcome to VividVibes, your ultimate destination for high-quality web components and templates. Designed for both seasoned developers and beginners, VividVibes offers a rich library of meticulously crafted UI elements, including elegant popups, smooth loaders, stunning hero sections, and fully responsive website templates. Each component is easy to integrate, highly customizable, and crafted with modern web standards in mind, empowering you to create exceptional web experiences effortlessly.",
  keywords: [
    "VividVibes",
    "web components",
    "UI elements",
    "website templates",
    "popups",
    "loaders",
    "hero sections",
    "responsive templates",
    "web design",
    "web development",
    "customizable UI",
    "web standards",
    "frontend development",
    "UI design",
    "web resources",
    "developer tools",
    "website elements",
    "web project",
    "UI library",
    "web experiences",
    "hero section",
    "popups",
    "modals",
    "drawer UI component",
    "nextjs components library",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
