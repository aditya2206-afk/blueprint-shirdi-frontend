import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blueprint Shirdi — Private Balinese Villas with Land in Shirdi",
  description:
    "A limited private collection of Balinese-inspired villas in Shirdi Central. Your villa. Your land. Request an invitation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
