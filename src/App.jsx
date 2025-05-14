import React from 'react'
import style from './style'
import { NavBar,Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero, } from './components'
const App = () => {
  return (
    <div className='bg-black w-full overflow-hidden'>
        <div className={`${style.paddingX} ${style.flexCenter}`}>
          <div className={`${style.boxWidth}`}>
          <NavBar/>
          </div>
        </div>
        <div className={`bg-black-gradient ${style.flexStart}`}>
            
          <div className={`${style.boxWidth}`}>
            <Hero/>
          </div>
        </div>
            
        <div className={`bg-black ${style.paddingX} ${style.flexStart}`}>
          <div className={`${style.boxWidth}`}>
            <Stats/>
            <Business/>
            <Billing/>
            <CardDeal/>
            
            <Testimonials/>
            <Clients/>
            <CTA/>
            <Footer/>

          </div>
        </div>
    </div>
  )
}

export default App