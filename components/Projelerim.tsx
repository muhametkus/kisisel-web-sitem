import React from 'react'

const Projelerim = () => {

    const projeler = [
            {
                logo:"/images/logo-hebiloglu.png",
                link:"www.hebilogluahsap.com",
                renkkodu:"bg-gray-900"
            },
            {
                logo:"/images/hocaogullari-logo.png",
                link:"www.hocaogullariturizm.com.tr",
                renkkodu:"bg-blue-800"
            },
            {
                logo:"/images/eymenlogo.png",
                link:"www.eymenkompresor.com",
                renkkodu:"bg-blue-700"
            }
    ];

  return (
    <div className='w-full flex flex-col gap-20 2xl:gap-32 md:gap-14  xl:grid xl:grid-cols-2 2xl:grid 2xl:grid-cols-2 pb-20'>

{projeler.map((proje)=>(
    <div className="card w-[98%] sm:w-[95%] sm:mx-auto glass border-0">
    <figure  className={`h-[200px] px-10 ${proje.renkkodu}`}><img src={proje.logo} alt="car!"/></figure>
    <div className="card-body bg-[#B9B4C7] rounded-b-2xl">
      <a href={`https://${proje.link}`} className="text-center text-2xl text-[#352F44]" target='_blank'>{proje.link}</a>

    </div>
  </div>
))}



    </div>
  )
}

export default Projelerim