import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import { cn } from "@/lib/cn";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { isValidTenant } from "@/lib/tenants";
import "../../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function TenantLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { tenant?: string };
}>) {
  const tenant = (await params)?.tenant;
  const ok = isValidTenant(tenant);
  if (!ok) return notFound();
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
          <Header />
          <main className="grow flex flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
