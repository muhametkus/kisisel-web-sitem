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
    <html lang="en">
      <body className={`${inter.className} w-full h-screen bg-[#B9B4C7] flex`}>
        <DilProvider>
        <div className="flex w-full xl:justify-between 2xl:justify-center mx-auto bg-[#FAF0E6]">
          <div className="px-10 pr-64 sm:pl-5 sm:w-[90%] sm:ml-0 pt-10 absolute z-10 container mx-auto  bg-[#FAF0E6]">
          {children}
          </div>
          <div className="hidden sm:flex w-full fixed bottom-0 z-50 ">
          
          <MobilMenu/>
          </div>
          <div className="flex sm:hidden fixed h-screen z-20 right-0">
            
          <MenuDesen/>

          <div className={`flex`}>
          <Header/>
          </div>
        </div>   
        </div>
        </DilProvider>
        </body>
    </html>
  );
}
