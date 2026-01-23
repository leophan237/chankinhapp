import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";

const barlow = Barlow({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chân Kinh Online - Digital Monastery for Entrepreneurs",
  description: "A sanctuary for mindful entrepreneurship. Discover ancient wisdom for modern business success through the teachings of Chân Kinh Online.",
  keywords: ["Chân Kinh Online", "CKO", "mindfulness", "entrepreneurship", "business wisdom", "meditation", "digital monastery"],
  authors: [{ name: "Chân Kinh Online" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Chân Kinh Online - Digital Monastery for Entrepreneurs",
    description: "A sanctuary for mindful entrepreneurship. Discover ancient wisdom for modern business success.",
    siteName: "Chân Kinh Online",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chân Kinh Online",
    description: "Digital Monastery for Entrepreneurs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${barlow.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <ThemeProvider defaultTheme="dark" storageKey="cko-theme">
          <Navigation />
          <main className="lg:pt-20">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
