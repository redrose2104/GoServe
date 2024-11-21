import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'leaflet/dist/leaflet.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GoServe",
  description: "Serving you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black h-screen`}
      >
      <div className={"flex flex-col justify-center items-center h-screen"}>
          <div className={"flex flex-col bg-white h-5/6"} style={{ width: 390 }}>
            {children}
          </div>
      </div>
      </body>
    </html>
  );
}
