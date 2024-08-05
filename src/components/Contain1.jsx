import React from 'react'
import style from './contain1.module.css'
import img from "./image/youtube.jpg"


const Contain1 = () => {
    return (
        <div>
            <div className={`${style.div1}`}>
                <span className={`${style.h3}`}>For Videos Join Our Youtube Channel:</span>
                <a href="">Join Now </a>
                <div className={`${style.div2}`}>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contain1