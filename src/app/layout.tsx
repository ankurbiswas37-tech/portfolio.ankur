import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor"; // 👈 কাস্টম কার্সার ইমপোর্ট করা হলো

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ankur Biswas | Portfolio",
  description: "Graphic Designer, Video Editor, and Automation Specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      {/* lg:cursor-none দিয়ে বড় স্ক্রিনে ডিফল্ট মাউস হাইড করা হয়েছে */}
      <body className="min-h-full flex flex-col bg-[#0B0B0F] text-white lg:cursor-none">
        <CustomCursor /> {/* 👈 কার্সারটি এখানে গ্লোবাল অ্যাক্টিভেট করা হলো */}
        {children}
      </body>
    </html>
  );
}