"use client";
import React, { useContext } from 'react'
import { DilContext } from "@/app/context/DilProvider";

export default function Home() {

  const { dil,setDil } = useContext(DilContext);
  const icerik = {
    turkce:{
      isim:"Muhammet KUŞ",
      baslik:`Merhaba, Ben`,
      yazi:`Kendimi bir Web Developer olarak tanımlıyorum.
      Özellikle backend alanında uzmanlaşmayı amaçlayan bir developer olarak, dijital dünyanın sınırlarını zorlamak için buradayım.
      Projeleriniz için çözümler üretmeye hazırım.`
    },
    english:{
      isim:"Muhammet KUS",
      baslik:`Hello, I'm`,
      yazi:`I define myself as a Web Developer, with a particular focus on specializing in the backend. As a developer aiming to excel in the backend domain, I am here to push the boundaries of the digital world. I am ready to create solutions for your projects.`
    }

  };

  const icons=[
    {
   
      link:"https://www.linkedin.com/in/muhametkus",
      icon:<svg className="h-12 w-12"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
    },


    {
    
      link:"https://github.com/muhametkus",
      icon:<svg className="h-12 w-12"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
    },
    {
      link:"https://twitter.com/muhametkus",
      icon:<svg className="h-12 w-12"  fill="currentColor" viewBox="0 0 512 512"> <path
        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
    </svg>
    }
  ];

  return (
    <div className="w-full sm:w-[250px] border border-black flex flex-col gap-y-3">
      <div className='w-full'><img className="w-[250px] sm:w-[150px] rounded-full outline outline-offset-2 outline-4 outline-[#5C5470] mx-auto" src="https://media.licdn.com/dms/image/D4D03AQE03QsnIt6Lxg/profile-displayphoto-shrink_200_200/0/1697616372438?e=1715212800&v=beta&t=HRGA7KXpq8aXm-DpTUV2sN3kPJqVlTgcW8phHCmGoGc" alt="" /></div>
      <div className={`w-[70%] sm:w-[90%] flex mx-auto mt-10 flex-col gap-y-5`}>
      <h2 className="text-4xl sm:text-3xl text-[#352F44] font-light">{dil=="Türkçe"?icerik.turkce.baslik:icerik.english.baslik} <span className="font-normal text-[#5C5470]">{dil=="Türkçe"?icerik.turkce.isim:icerik.english.isim}</span></h2>
        <p className="text-xl sm:text-lg">
        {dil=="Türkçe"?icerik.turkce.yazi:icerik.english.yazi}
        </p>
      </div>

      <div className='w-[70%] sm:w-[90%] mx-auto'>
        <ul className="flex gap-x-10 mt-3 mx-auto">
          {icons.map((icon)=>(

            <li className='py-4 px-4 bg-[#352F44] hover:bg-[#5C5470] rounded-full duration-500 text-[#B9B4C7] hover:text-[#FAF0E6]'><a target='_blank' href={icon.link}>{icon.icon}</a></li>
          ))}
        </ul>
      </div>


      
    </div>
  );
}
