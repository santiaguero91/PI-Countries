import { Link } from "react-router-dom";
import React from "react";
import style from "../styles/Landing.module.css"
import { motion } from "framer-motion/dist/framer-motion"

const Landing = () => {
    return (

<motion.div
    initial={{scaleY:0}}
    animate={{scaleY:1}}
    exit={{scaleY:0, transition:{duration:0.1}}}
    >

    <div className={style.background}>

      <div className={style.titleImg}></div>

      <div className={style.landing}>
        <Link to="/home">
          <button title="enter">Home</button>
        </Link>
      </div>
    </div>
    </motion.div>
    )
}
export default Landing;