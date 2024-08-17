import type { Metadata } from "next";

import "./globals.css";
import { cn } from "@/lib/utils";

import { Poppins as FontSans } from "next/font/google";

import { ThemeProvider } from "next-themes";
import { ToastContainer } from "./nexttoast";
import "react-toastify/dist/ReactToastify.css";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "BlogPlex App",
  description: "An BlogPlex built with Next.js, Postgres, Shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
       
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        
        <ToastContainer />
      </body>
    </html>
  );
}
