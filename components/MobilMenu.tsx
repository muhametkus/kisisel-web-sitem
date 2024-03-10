import React, { useContext } from 'react'
import './MenuDesen.css'
import { DilContext } from "@/app/context/DilProvider"; 

const MobilMenu = () => {

    const { dil,setDil,linkler } = useContext(DilContext);
  return (
    <>

    
<div className='shapedividers_com-9283 w-full absolute mb-16'>.</div>
<div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-[#B9B4C7]  dark:bg-gray-700 dark:border-gray-600">

    <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {linkler.map((link)=>(
            <button type="button" className="inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group">
            {link.icon}
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">{link.isim}</span>
        </button>

        ))}
        

    </div>
</div>

    
    
    </>
  )
}

export default MobilMenu