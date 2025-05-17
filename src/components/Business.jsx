import React from 'react'
import styles,{layout} from '../style'
import { features } from '../constants'
import Button from './Button'
import { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
 
const FeatureCard =({icon,title,content,index})=>{
  
  return(
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length-1 ? 'mb-6':'mb-0'} `} >
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`} >
        <img src={icon} alt="icon"  className='w-[50%] h-[50%] object-contain'/>
      </div>
      <div className='flex flex-1 flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>{title}</h4>
        <p className='font-poppins font-normal text-amber-50 text-[16px] leading-[24px] mb-1'>{content}</p>

      </div>
    </div>
  )
}

const Business = () => {
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  
   useGSAP(() => {
    gsap.fromTo(
      leftRef.current, 
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        ease: "power3.out",
        duration: 2,
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );
     gsap.fromTo(
       rightRef.current,
     { opacity: 0, x: -50 },
       {
         opacity: 2,
         x: 0,
         ease: "power3.out",
         duration: 2,
         scrollTrigger: {
           trigger: rightRef.current,
           start: "top 80%",
           toggleActions: "play none none reverse",
        }
      }
     );
  },[]);
return (
    <section id='features' className={layout.section} >
      <div className={layout.sectionInfo} ref={leftRef} >
        < h2 className={styles.heading2}>
          You do the Business <br className='sm:block hidden' />
          We'll handle the money
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
          with the right credit card,you can improve your financial life
          by buldinng credit,earning rewards and saving your money but with several cards in the market.
          
            
        </p>
        < Button styles='mt-10'/>

      </div>
      <div className={`${layout.sectionImg} flex-col`} ref={rightRef}>
        {features.map((feature,index)=>(
          <FeatureCard key={feature.id} {... feature} index={index}/>
        ))}

      </div>
    </section>
  )
}

export default Business