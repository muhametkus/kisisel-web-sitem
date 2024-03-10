"use client";
import React, { useContext, useEffect } from 'react'
import { DilContext } from "@/app/context/DilProvider"; 
import Link from 'next/link';

const Header = () => {

  const { dil,setDil,linkler } = useContext(DilContext);


  const handleClick = () => {
    if(dil=="Türkçe"){
      setDil("English");
      //localStorage.setItem('secilenDil', 'English');
    }
    if(dil=="English"){
      setDil("Türkçe");
      //localStorage.setItem('secilenDil', 'Türkçe');
    }

    
  };

  useEffect(() => {
    //setDil(`${localStorage.getItem('secilenDil')}`);
    
  }, []);

  

  
  
 

  return (
    <div className='bg-[#B9B4C7] h-screen flex items-center '>


          <ul className='text-2xl flex flex-col gap-y-5 px-5'>
            {linkler.map((link)=>(

<li className='hover:bg-[#352F44] hover:text-[#FAF0E6] px-3 py-2 rounded-xl duration-500 text-[#352F44]'><Link href={`${dil=="Türkçe"?link.link:link.link2}`} className='flex items-center gap-x-2'> {link.icon}            
{dil=="Türkçe"?link.isim:link.isim2}</Link></li>
            ))}

<li className='hover:bg-[#352F44] hover:text-[#FAF0E6] px-3 py-2 rounded-xl duration-500 text-[#352F44]'><button onClick={handleClick} className='flex items-center gap-x-2'>             
<svg className="h-8 w-8 mr-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="2" y1="12" x2="22" y2="12" />  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
{dil=="Türkçe"?"English":"Türkçe"}</button></li>

          </ul>
    
    </div>
  )
}

export default Header