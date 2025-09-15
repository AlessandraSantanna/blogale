import React from 'react';
import Image from "next/image";
import { Check, MapPin } from 'lucide-react';
import note from '../../../public/note.png';
import back from '../../../public/back.jpg';

export default function  Front() {
    return (
        <section className="bg-pink-300 py-16">
            <div className="container  px-4 mx-auto ">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative" data-aos="fade-up-right" data-aos-delay="300"> 
                 
                 <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                     <Image
                         src={note}
                         alt="foto do bolo"
                         fill
                         quality={100}
                         className="object-cover hover:scale-110 duration-300"
                         priority
                     />
                 </div>
           
                 <div className="absolute w-40 h-40 right-4 -bottom-8 border-4  overflow-hidden rounded-lg
                  border-white">
                     <Image
                         src={back}
                         alt="docinhos"
                         fill
                         quality={100}
                         priority
                     />
                 </div>
             </div>
                 <div className='space-y-2  mt-5'  data-aos="fade-up-left" data-aos-delay="300">
                    
                         <h2 className='text-2xl font-bold py-6'> O Lado Back-end</h2>
                        <p  className='text-2xl '></p>
                        <p  className='text-2xl '>
                       Depois de dominar o que o usuário vê, é hora de entender o que ele não vê: o Back-end. Essa é a parte que lida com a lógica do servidor, a segurança e os bancos de dados.
                        </p>
                     <div className='flex gap-4'>

                       
                     </div>
                     


                 </div>
        

             </div>
              
              
            </div>      
        </section>
    )
}

