import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6 
    bg-blue-gradient font-poppins font-medium text-[18px]
    text-black outline-none ${styles} rounded-[10px] hover:scale-110`}>Get Started

    </button>
  )
}

export default Button