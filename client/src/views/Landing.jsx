import { Link } from "react-router-dom";
import React from "react";
import style from "../styles/Landing.module.css"

const Landing = () => {
    return (
      <div className={style.background}>
        <div className={style.leaves}>

        </div>
          <div className={style.landing}>
            <Link to="/home">
              <button title="enter">Home</button>
            </Link>
          </div>
      </div>
    )
}
export default Landing;