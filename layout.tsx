import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luma — Learn skills that move you forward",
  description:
    "Practical courses taught by people who do the work every day. Learn design, technology, business and more with Luma.",
  applicationName: "Luma",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
