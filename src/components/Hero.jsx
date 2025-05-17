import React from 'react'
import styles  from '../style'
import { discount,robot } from '../assets'
import GetStarted from './GetStarted'
import { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from 'split-type';

const Hero = () =>  {
  const  imageRef = useRef(null)
  const  textRef = useRef(null)
  
   useGSAP(() => {
    gsap.fromTo(
      imageRef.current, 
      { opacity: 0, x: 50 },
      {
        opacity: 3,
        x: 0,
        ease: "power3.out",
        duration: 2,
        toggleActions: "play none none reverse",
      }
    );
    const split = new SplitType(textRef.current, { types: 'words' });

    gsap.from(split.words, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 3,
      ease: 'power3.out',
    });

  });
  return(
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingX}`}>
      < div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount" 
          className='w-[32px] h-[32px]'
          />
          <p className={`${styles.paragraph} ml-2`}> 
            < span className='text-white'>15% Discount For {''}
            </span>
          
          < span className='text-white'>1 month</span>
         <span className='text-teal-100 ml-2'>Account</span> 
          </p>
         
        </div>
        < div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]' >
            <span ref={textRef}>The Next <br  className='sm:block hidden'/>{''}</span>
          <span className='text-gradient'>Generation</span> <br />
            
          </h1>
          < div className='hidden lg:flex  md:mr-4 mr-0 hover:opacity-80 opacity-50'>
            <GetStarted/>
          </div>

        </div>
         <h1 className=' font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] w-full'>
          Payment Method
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
            We blend innovation, speed and security to bring you seamless digital banking, empowering individuals and businesses to thrive locally and globally. <br />
             Bank smart. Bank with Vibe.
          </p>
          

      </div>
      {/*Right side */}
      <div className={`flex flex-1 ${styles.flexCenter}
      md:my-0 my-10 relative`}>
       <img src={robot} alt="robot"
       className='w-[100%] h-[100%] relative z-[5]' ref={imageRef}/>
       <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
       <div className='absolute z-[1] w-[80%] h-[80%] rounded-full
       bottom-40 white__gradient'/>
       <div className='absolute z-[0] w-[50%] h-[50%] right-20
        bottom-20 blue__gradient'/>
      </div>
      <div className={`sm:hidden ${styles.flexCenter}`}>
        <GetStarted/>

      </div>
    </section>
    
  )
}

export default Hero