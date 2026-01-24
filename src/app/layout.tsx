import type { Metadata } from "next";
import { Barlow, Barlow_Semi_Condensed } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
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

const barlowSemiCondensed = Barlow_Semi_Condensed({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${barlow.variable} ${barlowSemiCondensed.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            storageKey="cko-theme"
          >
            <Navigation />
            <main className="lg:pt-20">{children}</main>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
