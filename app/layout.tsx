"use client";
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Removed next/script dark-mode init — system no longer uses dark mode
import Footer from "@/components/Footer";
import { cn } from "@/lib/cn";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import Providers from "../components/Providers";
import "./globals.css";

const queryClient = new QueryClient();
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        suppressHydrationWarning
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "flex flex-col antialiased min-h-screen overflow-auto"
        )}
      >
        <Providers>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <Header />
            <main className="grow flex flex-col">{children}</main>
            <Footer />
          </QueryClientProvider>
        </Providers>
      </body>
    </html>
  );
}
