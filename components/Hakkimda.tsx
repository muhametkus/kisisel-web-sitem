"use client";
import React, { useContext } from 'react'
import { DilContext } from "@/app/context/DilProvider"; 
const Hakkimda = () => {
    const suankiYil = new Date().getFullYear();
    const { dil } = useContext(DilContext);
  
    const yazi=[
      {"turkce":"2000 yılında İstanbul'da doğdum. Kartal Türk Kızılayı Anadolu Lisesinden mezun olduktan sonra, yazılıma olan ilgimi farkettim. Bu sebeple Bilgisayar Programcılığı bölümünü okumaya karar verdim. Marmara Üniversitesi Bilgisayar Programcılığı bölümünden Mezun oldum. Bahçeşehir Üniversitesi, Wissen Akademie'den İşkur Nitelikli Bilişim Uzmanı Yetiştirme Programı kapsamında Veri tabanı ve Yazılım Uzmanlığı eğitimi aldım. Bununla beraber Web Alanına yönelerek projeler geliştirdim."},
      {"english":"Computer Programming graduate from Marmara University. With additional training in Database and Software Expertise from Bahçeşehir University and Wissen Akademie, he has developed a solid foundation in these areas. He has gained hands-on experience working with React and has been actively involved in MERN Stack projects. Proficiency in Asp.Net Core MVC and ongoing work on Asp.Net Core Web API further demonstrate their versatile skill set."}
      
  ]
  return (
    <div className='2xl:w-[80%] xl:w-[80%] w-full mx-auto pb-28'>

      <h1 className='text-center text-7xl mb-8'>{dil=="Türkçe"?"Hakkımda":"About Me"}</h1>

        <div className='flex 2xl:flex-row xl:flex-row flex-col gap-x-10 gap-y-5 2xl:items-center xl:items-center '>
            <img src="./images/foto.png" alt="foto" className='rounded-full shadow-2xl w-[250px] h-[250px] mx-auto'/>
                  
                <p className='font-light text-xl md:text-base'>{dil=="Türkçe"?yazi[0].turkce:yazi[1].english}</p>
            </div>

            
            <div className='xn:mx-10 mt-5 mb-5'>{dil=="Türkçe"?"Diller & Yetenekler":"Languages & Skills"}: <span className='font-light'>React JS, Node JS, Express JS, Next JS, Vite JS, Mongo DB, Tailwind css, Bootstrap, Net Core, Ms SQL</span></div>


            
      

        <div className='w-full mt-3 flex flex-row gap-x-14 flex-wrap'>


            <div className='flex flex-col gap-y-2'>
              <p className='flex items-center gap-x-2'><svg className="h-8 w-8 text-[#352F44] hover:text-[#B9B4C7] duration-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
</svg>
Adres</p>
              <p className='font-light'>Istanbul / Pendik</p>
            </div>

            <div className='flex flex-col gap-y-2'>
              <p className='flex items-center gap-x-2'><svg className="h-8 w-8 text-[#352F44] hover:text-[#B9B4C7] duration-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>E-Mail</p>
              <p className='font-light'>muhammet.kus000@gmail.com</p>
            </div>


        </div>
      </div>
  )
}

export default Hakkimda