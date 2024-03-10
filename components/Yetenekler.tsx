"use client";
import React from 'react'

interface YeteneklerProps {
    baslikYetenek: string;
}

const Yetenekler: React.FC<YeteneklerProps> = (props) => {
    return (
        <div className='flex flex-col'>
            <div className='mx-auto text-6xl font-light xn:mb-5 xs:mb-5'>
                <h2 className='text-center'>{props.baslikYetenek}</h2>
            </div>

            <div className='mt-7 grid grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-y-10'>
                <div className=''>
                    <div className=''>
                        <img src="./images/React.png" className='h-[120px] resim-hover mx-auto' alt="" />
                    </div>
                    <div className='text-center text-4xl font-light mt-5'>
                        <h2 className='resim-hover'>React JS</h2>
                    </div>
                </div>

                <div className=''>
                    <div className=''>
                        <img src="./images/node.png" className='h-[120px] resim-hover mx-auto' alt="" />
                    </div>
                    <div className='text-center text-4xl font-light mt-5'>
                        <h2 className='resim-hover'>Node JS</h2>
                    </div>
                </div>

                <div className=''>
                    <div className=''>
                        <img src="./images/express.png" className='h-[120px] resim-hover mx-auto' alt="" />
                    </div>
                    <div className='text-center text-4xl font-light mt-5'>
                        <h2 className='resim-hover'>Express JS</h2>
                    </div>
                </div>

                <div className=''>
                    <div className=''>
                        <img src="./images/next.webp" className='h-[120px] resim-hover mx-auto' alt="" />
                    </div>
                    <div className='text-center text-4xl font-light mt-5'>
                        <h2 className='resim-hover'>NEXT JS</h2>
                    </div>
                </div>

                <div className=''>
                    <div className=''>
                        <img src="./images/mongo.png" className='h-[120px] resim-hover mx-auto' alt="" />
                    </div>
                    <div className='text-center text-4xl font-light mt-5'>
                        <h2 className='resim-hover'>Mongo DB</h2>
                    </div>
                </div>

                <div className=''>
                    <div className=''>
                        <img src="./images/tailwind.webp" className='h-[120px] resim-hover mx-auto' alt="" />
                    </div>
                    <div className='text-center text-4xl font-light mt-5'>
                        <h2 className='resim-hover'>Tailwind</h2>
                    </div>
                </div>

                <div className=''>
                    <div className=''>
                        <img src="./images/netcore.png" className='h-[120px] resim-hover mx-auto' alt="" />
                    </div>
                    <div className='text-center text-4xl font-light mt-5'>
                        <h2 className='resim-hover'>NET Core</h2>
                    </div>
                </div>

                <div className=''>
                    <div className='rounded-full h-[120px] resim-hover w-[120px] bg-slate-100 flex items-center justify-center mx-auto'>
                        <img src="./images/mssql.png" className='h-[95px] w-[95px] mx-auto' alt="" />
                    </div>
                    <div className='text-center text-4xl font-light mt-5'>
                        <h2 className='resim-hover'>MS SQL</h2>
                    </div>
                </div>

                <div className=''>
                    <div className=''>
                        <img src="./images/mysql.png" className='h-[120px] resim-hover mx-auto' alt="" />
                    </div>
                    <div className='text-center text-4xl font-light mt-5'>
                        <h2 className='resim-hover'>MySql</h2>
                    </div>
                </div>

                <div className=''>
                    <div className=''>
                        <img src="/images/postman.png" className='h-[120px] resim-hover mx-auto' alt="" />
                    </div>
                    <div className='text-center text-4xl font-light mt-5'>
                        <h2 className='resim-hover'>Postman</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Yetenekler;