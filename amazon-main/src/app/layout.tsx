
import "./globals.css"


import { Metadata } from "next";
import Footer from "@/component/Footer";
import Header from "@/component/Header";



export const metadata: Metadata = {
  title: 'Home Amazon',
  description: 'home amazon',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body >
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
