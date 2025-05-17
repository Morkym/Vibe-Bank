import React from 'react'
import { apple,bill,google, star } from '../assets'
import styles,{layout} from '../style'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import { useGSAP } from "@gsap/react";



gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Billing = () =>  {
  const  imgRef = useRef(null)
  
   useGSAP(() => {
    gsap.fromTo(
      imgRef.current, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        duration: 2,
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );
  });
  return(
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse} ref={imgRef}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
        {/*add the gradient on the ledt side of the  bill img */}

        <div className='absolute z-[3] -left-1/2
         top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2
         bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>

      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
            Easily control your <br className='sm:block hidden' /> billing and Invoices
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-amber-50`}>
          Take control of your bills nay day any time anywhere on earth

        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt="google" className='w-[128px] h-[42px] object-contain  cursor-pointer' />

        </div>
      </div>

    </section>
)
}

export default Billing