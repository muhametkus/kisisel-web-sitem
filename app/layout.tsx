"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MenuDesen from "@/components/MenuDesen";
import * as React from 'react';
import { DilProvider } from "./context/DilProvider";
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
          <div className="flex menu-kismi  fixed h-screen z-20 right-0">
          <MenuDesen/>
          <div className="hidden sm:flex h-screen items-center bg-[#B9B4C7]">
   <button onClick={handleClick} className="sm:h-screen">      
<svg  className={`h-10 w-10 text-[#FAF0E6]  py-1 rounded-lg ml-1 ${mobilMenu?"hidden":"flex"}`}  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
</svg>

<svg className={`h-10 w-10 text-[#FAF0E6]  py-1 rounded-lg ml-1 ${mobilMenu?"flex":"hidden"}`}  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
</button> 


          </div>
          <div className={`flex ${mobilMenu?"sm:flex":"sm:hidden"}`}>
          <Header/>
          </div>
        </div>   
        </div>
        </DilProvider>
        </body>
    </html>
  );
}
