import React from 'react'
import { card } from '../assets'
import styles,{layout} from '../style'
import Button from './Button'

const CardDeal = () => (
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
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />

      </div>

    </section>
  )


export default CardDeal