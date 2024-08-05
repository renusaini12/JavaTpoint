import React from 'react'
import style from './contain2.module.css'
import img from './image/pic1.jpg'
import img1 from './image/pic2.png'

const Contain2 = () => {
  return (
    <div>
        <div className={`${style.div1}`}>
            <div className={`${style.div2}`}><img src={img} alt="" /></div>
            <div className={`${style.div2}`}s><img src={img1} alt="" /></div>
        </div>
    </div>
  )
}

export default Contain2