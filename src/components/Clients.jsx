import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () =>  (
    <section className={`${styles.flexCenter} my-4 flex-col flex flex-start`}>
      <h2 className='font-poppins font-normal text-teal-100/50 w-full mb-8'>The people we`ve worked with</h2>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
          {clients.map((client)=>(
            <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
              <img src={client.logo} alt="client"
              className='sm:w-[192px] w-[100px] object-contain' />

            </div>
          )
        )}

      </div>

    </section>
  )


export default Clients