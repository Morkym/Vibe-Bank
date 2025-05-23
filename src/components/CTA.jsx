import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}
    sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow hover:scale-105 transition-all duration-300 ease-in-out`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Try our services now</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-amber-50`}>
          Everything you need to start and grow  your business
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml:0 sm:mt-0 mt-10`}>
        <Button/>
      </div>
    </section>
  )


export default CTA