import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartShala | A school operating system, not just software.",
  description:
    "SmartShala connects admissions, fees, attendance, staff, transport, communication, reports and parent updates for modern Indian schools.",
};

export const viewport: Viewport = {
  themeColor: "#061A40",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
