import React, { useState } from 'react'

export default function Toogle(props) {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    props.toogleDarkMode()
  }

  return (
    <>
      <label className='flex items-center select-none'>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div
            className={`box block bg-gray-800 h-7 w-12 rounded-full ${
              isChecked ? 'bg-primary' : 'bg-dark'
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white transition ${
              isChecked ? 'translate-x-full' : ''
            }`}
          ></div>
        </div>
      </label>
    </>
  )
}

