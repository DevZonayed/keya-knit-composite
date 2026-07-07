import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { StoreProvider } from "@/lib/store";
import ToastTray from "@/components/ToastTray";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KEYA Knit Composite — From two pieces to twenty thousand",
  description:
    "Vertically integrated knitwear manufacturer from Bangladesh. Buy finished goods or request a bulk manufacturing quote — one trusted partner, 3.5M+ pieces a month.",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%23123A54'/%3E%3Cpath d='M10 22V10h6a5 5 0 010 10h-4l6 6' fill='none' stroke='%231E9E5C' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        <StoreProvider>
          {children}
          <ToastTray />
        </StoreProvider>
      </body>
    </html>
  );
}
