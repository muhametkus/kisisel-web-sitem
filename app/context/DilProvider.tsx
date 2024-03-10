import React, { createContext, useEffect, useState } from "react";

export const DilContext = createContext<any>(null);

export const DilProvider = ({children}:{
    children:React.ReactNode;
}) => {

    const [dil, setDil] = useState('Türkçe');
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


  /*  if (localStorage.getItem('secilenDil') === null) {
        localStorage.setItem('secilenDil', dil);
    }

    useEffect(() => {
        setDil(`${localStorage.getItem('secilenDil')}`);
      }, []);

  */ 
    return (
        <DilContext.Provider value={{dil,setDil,linkler}}>
            {children}
        </DilContext.Provider>
    )
}

