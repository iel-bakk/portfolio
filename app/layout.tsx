import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ismail el bakkouchi",
  description: "ismail el bakkouchi portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
