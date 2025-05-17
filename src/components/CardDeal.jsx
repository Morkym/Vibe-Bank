import React from 'react'
import { card } from '../assets'
import styles,{layout} from '../style'
import Button from './Button'
import { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardDeal = () => {
  
  const imgRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        ease: "power3.out",
        duration: 3,
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }
  , []);

  return(
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
            Find a better card deal <br
            className='sm:block hidden' />In simple steps
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-amber-50`}>
            Discover the perfect card for your lifestyle—whether
             it's everyday purchases, travel rewards, or building credit. Our range of debit and credit cards offers convenience, 
             security, and exclusive benefits tailored just for you.

        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg} ref={imgRef}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />

      </div>

    </section>
  )

}
export default CardDeal