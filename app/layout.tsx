"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MenuDesen from "@/components/MenuDesen";
import * as React from 'react';
import { DilProvider } from "./context/DilProvider";
import MobilMenu from "@/components/MobilMenu";
import"../components/MenuDesen.css";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [mobilMenu, setMobilMenu] = React.useState(false);
    const  handleClick= () => {
      setMobilMenu(!mobilMenu);
    };



  return (
    <html lang="en" className="bg-[#FAF0E6]">
      <body className={`${inter.className} w-full h-screen bg-[#FAF0E6] flex`}>
        <DilProvider>
        <div className="flex xl:justify-between 2xl:justify-center mx-auto ">
          <div className="px-5 pr-80 sm:px-5 sm:pr-5 pt-10 mx-auto container">
          {children}
          </div>
          <div className="hidden sm:flex w-full fixed bottom-0 z-50 ">
          
          <MobilMenu/>
          </div>
          <div className="flex sm:hidden fixed h-screen z-20 right-0">
            
          <MenuDesen/>

          <div className={`flex `}>
          <Header/>
          </div>
        </div>   
        </div>
        </DilProvider>
        </body>
    </html>
  );
}
