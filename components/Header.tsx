"use client";
import React, { useContext, useEffect } from 'react'
import { DilContext } from "@/app/context/DilProvider"; 
import Link from 'next/link';

const Header = () => {

  const { dil,setDil } = useContext(DilContext);


  const handleClick = () => {
    if(dil=="Türkçe"){
      setDil("English");
      if(typeof window !== 'undefined'){
        window.localStorage.setItem('secilenDil', 'English');
      }
    }
    if(dil=="English"){
      setDil("Türkçe");
      if(typeof window !== 'undefined'){
        window.localStorage.setItem('secilenDil', 'Türkçe');
      }
    }

    
  };

  useEffect(() => {
    if(typeof window !== 'undefined'){
    setDil(`${window.localStorage.getItem('secilenDil')}`);
    }
  }, []);

  

  
  
  const linkler=[
    {
      link:'/',
      isim:'Anasayfa',
      isim2:'Home',
      link2:'/',
      icon:<svg className="h-9 w-9 "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
    </svg>
    },
    {
      id:2,
      link:'/hakkimda',
      isim:'Hakkımda',
      isim2:'About Me',
      link2:'/about',
      icon:<svg className="h-9 w-9 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg>
    },
    {
      id:3,
      link:'/projelerim',
      isim:'Projelerim',
      isim2:'My Projects',
      link2:'/projects',
      icon:<svg className="h-9 w-9"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/>
    </svg>
    },
    {
      id:4,
      link:'/iletisim',
      isim:'İletişim',
      isim2:'Contact',
      link2:'/contact',
      icon:<svg className="h-8 w-8 mr-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg>
    }
  ]

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