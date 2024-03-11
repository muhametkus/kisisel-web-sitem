"use client";
import React, { useContext, useRef } from 'react'
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { DilContext } from "@/app/context/DilProvider"; 

function IletisimForm() {
  const form =useRef();
  const { dil } = useContext(DilContext);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nr6szfr', 'template_aq8scc4', form.current, 'QhFxktQnY6PysEVWJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  const mesaj_ilet=()=>{
    const adSoyad=document.getElementById("gonderen_adi").value;
    const mail=document.getElementById("gonderen_mail").value;
    const konu=document.getElementById("mail_konu").value;
    const mesaj=document.getElementById("mesaj_icerik").value;
    if((adSoyad!="")&&(mail!="")&&(konu!="")&&(mesaj!=""))
    Swal.fire('Mesajınız İletildi.');

    else{
      Swal.fire({
        icon: 'error',
        title: 'HATA!',
        text: 'Formdaki boş alanları doldurunuz.',
      })
    }

  }



  return (
    <div className='w-full pb-40'>
      <div className='w-full mx-auto  flex flex-col'>
            <div className='mx-auto text-6xl sm:text-4xl font-light sm:mb-5'><h2 className='text-center'>{dil=="Türkçe"?"Benimle İletişime Geç":"Contact Me"}</h2></div>
            
            <div className=''>

            <section className=" ">
  <div className="2xl:w-[700px] xl:w-[700px] lg:w-[600px] md:w-[450px] sm:w-[350px]   py-8 lg:py-16 px-4 mx-auto ">
    <form className="space-y-8" ref={form} onSubmit={sendEmail}>
    <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{dil=="Türkçe"?"Adınız ve Soyadınız:":"Name and Surname:"}</label>
        <input type="text" name="gonderen_adi" id="gonderen_adi" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder={dil=="Türkçe"?"Adınız ve Soyadınız":"Name and Surname"} required />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-Mail:</label>
        <input type="email" name="gonderen_mail" id="gonderen_mail" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
      </div>
      <div>
        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{dil=="Türkçe"?"Konu:":"Subject:"}</label>
        <input type="text" name="mail_konu" id="mail_konu" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder={dil=="Türkçe"?"Konu:":"Subject:"} required />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{dil=="Türkçe"?"Mesajınız:":"Your Message:"}</label>
        <textarea name="mesaj_icerik" id="mesaj_icerik" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder={dil=="Türkçe"?"Mesajınız...":"Your Message..."} defaultValue={""} />
      </div>
      <button onClick={mesaj_ilet} type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full font-light text-2xl">{dil=="Türkçe"?"Gönder":"Submit"}</button>
    </form>
  </div>
</section>




            </div>
      </div>
    
    </div>
  )
}

export default IletisimForm