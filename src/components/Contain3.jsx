import React from 'react'
import style from './contain3.module.css'
import img1 from './image/splunk.jpg'
import img2 from './image/spss.jpg'
import img3 from './image/swagger.JPG'
import img4 from './image/transact-sql.jpg'
import img5 from './image/tumblr.jpg'
import img6 from './image/react.jpg'
import img7 from './image/regex.jpg'
import img8 from './image/react1.JPG'
import img9 from './image/r-prog.jpg'
import img10 from './image/rxjs.jpg'
import img11 from './image/react-native.jpg'
import img12 from './image/python.jpg'
import img13 from './image/python-pillow.png'
import img14 from './image/python-turtle.png'
import img15 from './image/keras.png'




const Contain3 = () => {
    return (
        <div>
            <div className={`${style.div1}`}>
                <h1 className={`${style.h1}`}>Latest Tutorial</h1>
                <div className={`${style.box}`}>
                    <div className={`${style.div2}`}>
                        <img src={img1} alt="" />
                        <a href="">Splunk</a>
                    </div>
                    <div className={`${style.div2}`}>
                        <img src={img2} alt="" />
                        <a href="">SPSS</a>
                    </div>
                    <div className={`${style.div2}`}>
                        <img src={img3} alt="" />
                        <a href="">Swagger</a>
                    </div>
                    <div className={`${style.div2}`}>
                        <img src={img4} alt="" />
                        <a href="">Transact-SQL</a>
                    </div>
                    <div className={`${style.div2}`}>
                        <img src={img5} alt="" />
                        <a href="">Tumblr</a>
                    </div>
                    <div className={`${style.div2}`}>
                        <img src={img6} alt="" />
                        <a href="">ReactUS</a>
                    </div>
                    <div className={`${style.div2}`}>
                        <img src={img7} alt="" />
                        <a href="">Regex</a>
                    </div>
                    <div className={`${style.div2}`}>
                        <img src={img8} alt="" />
                        <a href="">reinforcement learning</a>
                    </div>
                    <div className={`${style.div2}`}>
                        <img src={img9} alt="" />
                        <a href="">R Programming</a>
                    </div>
                    <div className={`${style.div2}`}>
                        <img src={img10} alt="" />
                        <a href="">RxJS</a>
                    </div>
                    <div className={`${style.div2}`}>
                        <img src={img11} alt="" />
                        <a href="">React Native</a>
                    </div>
                    <div className={`${style.div2}`}>
                        <img src={img12} alt="" />
                        <a href="">Python Design Patterns</a>
                    </div>
                    <div className={`${style.div2}`}>
                        <img src={img13} alt="" />
                        <a href="">Python Pillow</a>
                    </div>
                    <div className={`${style.div2}`}>
                        <img src={img14} alt="" />
                        <a href="">Python Trutle</a>
                    </div>
                    <div className={`${style.div2}`}>
                        <img src={img15} alt="" />
                        <a href="">Keras</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contain3