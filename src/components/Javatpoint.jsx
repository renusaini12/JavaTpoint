import React from 'react'
import style from './javatpoint.module.css'
import img from "./image/javatpoint.jpg"
import { SlMagnifier } from "react-icons/sl";

const Javatpoint = () => {
  return (
    <div id={`${style.maindiv}`} >
      <div id={`${style.maindiv1}`}>
        <div className={`${style.div2}`}>
          <img src={img} alt="" /></div>
        <div className={`${style.div3}`}>
          <input type="text" />
          <div className={`${style.div4}`}>
            <SlMagnifier className={`${style.div5}`} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Javatpoint