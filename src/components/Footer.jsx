import React from 'react'
import styles from '../style'; 
import { footerLinks, socialMedia } from '../constants'
import { logo } from '../assets'
import { useState } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      leftRef.current,
      { opacity: 0, y: -50 },
      {
    opacity: 1,
      y: 50,
      duration: 2,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: leftRef.current, 
        start: 'top 80%',
        toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      rightRef.current,
      { opacity: 0 ,x: 0},
      {
        opacity: 1,
        x: -20,
        duration: 1,
        scrollTrigger: {
          trigger: rightRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`} ref={leftRef}>
        <div className='flex flex-1 flex-col justify-start mr-10'>
          <img
            src={logo}
            alt="mybank"
            className='w-[266px] h-[72px] object-contain'
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px] text-amber-50`}>
            The solution to  fast,reliable and secure payments
          </p>
        </div>
        <div
          className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'
          ref={rightRef}
        >
          {footerLinks.map((footerLink) => (
            <div key={footerLink.id} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                {footerLink.title}
              </h4>
              <ul className='list-none mt-4'>
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-lime-50 hover:text-[#5ce1e6] cursor-pointer ${
                      index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]'>
        <p className='font-poppins font-normal text-[18px] leading-[27px] text-lime-50 hover:text-[#5ce1e6]'>
          &copy; {new Date().getFullYear()} Morris Macharia. All rights reserved.
        </p>
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer