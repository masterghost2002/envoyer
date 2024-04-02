import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage_grotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Experience the freedom of an open-source email sender alternative that wields the power of security, scalability, and community-driven innovation. Enjoy the flexibility of our pay-as-you-go pricing model, allowing you to scale your email delivery needs without being bound by restrictive plans or fixed costs. Join the Envoyer movement today and unleash the unstoppable force of your email delivery campaigns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bricolage_grotesque.className}>{children}</body>
    </html>
  );
}

