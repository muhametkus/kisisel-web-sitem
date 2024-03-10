import React, { useContext } from 'react'
import './MenuDesen.css'
import { DilContext } from "@/app/context/DilProvider"; 
import Link from 'next/link';

const MobilMenu = () => {

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
  return (
    <>

    
<div className='shapedividers_com-9283 w-full absolute mb-16'>.</div>
<div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-[#B9B4C7]  dark:bg-gray-700 dark:border-gray-600">

    <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        {linkler.map((link: {
            isim2: any;
            link2: any;
            link: any; icon: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; isim: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; 
})=>(
            <Link href={`${dil=="Türkçe"?link.link:link.link2}`} className="inline-flex flex-col items-center justify-center  group hover:text-[#5C5470] duration-500">
            {link.icon}
            <span className="text-sm text-[#352F44]">{dil=="Türkçe"?link.isim:link.isim2}</span>
        </Link>

        ))}

<button onClick={handleClick} className='inline-flex flex-col items-center justify-center hover:text-[#5C5470] duration-500 group mt-1'>             
<svg className="h-8 w-8"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="2" y1="12" x2="22" y2="12" />  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
<span className="text-sm text-[#352F44]">{dil=="Türkçe"?"English":"Türkçe"}</span>
</button>
        

    </div>
</div>

    
    
    </>
  )
}

export default MobilMenu