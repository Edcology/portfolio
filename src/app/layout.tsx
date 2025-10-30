import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";


const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk"
})

export const metadata: Metadata = {
  title: "Gbolahan Awofala | Porfolio",
  description: "Frontend developer skilled in Next.js, React, and TailwindCSS. I build fast, scalable, and modern web apps.",
  keywords: ["Gbolahan Awofala", "Frontend Developer", "Next.js", "React", "TailwindCSS", "Web Developer Portfolio", "Web Developer", "Web Developer in Nigeria"],
  authors: [{ name: "Gbolahan Awofala" }],
  openGraph: {
    title: "Gbolahan Awofala | Frontend Developer",
    description: "I build fast and scalable web applications using modern frontend technologies.",
    url: "https://portfolio-blue-delta-6f1uoclg7g.vercel.app/",
    siteName: "Gbolahan Awofala Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
