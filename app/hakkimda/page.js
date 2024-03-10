import React from 'react'

const page = () => {
  const suankiYil = new Date().getFullYear();

  return (
    <div className='w-full '>

      
      <div className='anasayfa-ilk xn:w-[1100px] lg:w-[85%] md:w-[95%] mx-auto xn:py-24 xs:pb-8 xs:pt-7 flex flex-col'>
        <div className='flex flex-row sm:flex-col'>
        <div className='w-[35%] sm:w-[80%] sm:mx-auto hidden sm:mb-5'><img src="./images/foto.png" alt="foto" className='rounded-full shadow-2xl'/></div>
        <div className='flex flex-col xn:w-[65%]'>
                  
                <div className='font-light text-xl xn:mx-10 xn:mt-10 xs:mt-5'>2000 yılında İstanbul'da doğdum. Kartal Türk Kızılayı Anadolu Lisesinden mezun olduktan sonra, yazılıma olan ilgimi farkettim. Bu sebeple Bilgisayar Programcılığı bölümünü okumaya karar verdim. <br /> <br />Marmara Üniversitesi Bilgisayar Programcılığı bölümünden Mezun oldum. Bahçeşehir Üniversitesi, Wissen Akademie'den İşkur Nitelikli Bilişim Uzmanı Yetiştirme Programı kapsamında Veri tabanı ve Yazılım Uzmanlığı eğitimi aldım. Bununla beraber Web Alanına yönelerek projeler geliştirdim. </div>
                <div className='xn:mx-10 mt-5 mb-5'>Diller & Yetenekler: <span className='font-light'>React JS, Node JS, Express JS, Next JS, Vite JS, Mongo DB, Tailwind css, Bootstrap, Net Core, Ms SQL</span></div>

            </div>



            <div className='xn:w-[35%] xs:w-[80%] xs:mx-auto xs:hidden'><img src="./images/foto.png" alt="foto" className='rounded-full shadow-2xl'/></div>

            
        </div>

        <div className='mt-3 xn:mx-10 flex xn:flex-row xn:gap-x-14 xs:grid xs:gap-x-12 xs:grid-cols-2 xs:gap-y-5 xs:mx-auto'>

            <div className='flex flex-col'>
              <p>Yaş</p>
              <p className='font-light xn:text-center'>{suankiYil-2000}</p>
            </div>

            <div className='flex flex-col'>
              <p>Adres</p>
              <p className='font-light'>İstanbul, Pendik</p>
            </div>

            <div className='flex flex-col'>
              <p>E-Mail</p>
              <p className='font-light'>muhammet.kus000@gmail.com</p>
            </div>

            <div className='flex flex-col'>
              <p>Telefon No</p>
              <p className='font-light'>+90 553 696 2054</p>
            </div>

        </div>
      </div>

      

    </div>
  )
}

export default page