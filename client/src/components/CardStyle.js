import styled from "styled-components";
import Africa from "../components/Images/africa.jpg"
import Europa from "../components/Images/map-europa.png"
import Asia from "../components/Images/Asia.png"
import Samerica from "../components/Images/SAmerica.png"
import NAmerica from "../components/Images/NAmerica.png"
import Oceania from "../components/Images/Oceania.png"
import Antarctica from "../components/Images/Antartica.jpg"


import { motion } from "framer-motion/dist/framer-motion"

export const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 20px;
  background-color: rgba(58, 90, 64, 0.9);
  font-weight: 700;
  border-radius: 20px 20px 0 0;


  img {
    margin: auto auto auto 10px;
    border-radius: 1px;
    width: 150px;
    height: 100px;
    scale: 70%;
    transition: 1s;
  }
`;

export const CardDiv = styled(motion.div)`

  width: 270px;
  height: 200x;
  scale: 80%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 20px;
  background-color: rgba(88, 129, 87, 0.9);
  color: rgb(0, 0, 0);
  font-weight: 00;
  transition: 0.5s;

  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    transform: scale(110%);

    .btn {
      margin-bottom: 10px;
    }
  }
.name{
  font-weight: 800;
  font-size: 24px;
}
  .Asia{
    background-image: url(${Asia});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
    background-color: black;
    img{
      position: relative;
      margin: auto 10px auto auto;
    }
  }

  .Africa{
    background-image: url(${Africa});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
    background-color: black;
    img{
      position: relative;
      margin: auto auto auto 0;
    }
  }
  .Europe{
    background-image: url(${Europa});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
    background-color: black;
  }
.Samerica{
  background-image: url(${Samerica});
    background-repeat:  no-repeat;
    background-position: center;
    background-size: 60%;
    background-color: black;
    img{
      position: relative;
      margin: auto auto auto 0;
    }
}

.Namerica{
  background-image: url(${NAmerica});
    background-repeat:  no-repeat;
    background-position: center;
    background-size: 60%;
    background-color: black;
    img{
      position: relative;
      margin: auto -15px auto auto;
    }
}
.Oceania{
  background-image: url(${Oceania});
    background-repeat:  no-repeat;
    background-position: center;
    background-size: 60%;
    background-color: black;
    img{
      position: relative;
      margin: auto auto auto 0;
    }
}
.Antarctica{
  background-image: url(${Antarctica});
    background-repeat:  no-repeat;
    background-position: center;
    background-size: 60%;
    background-color: black;
    img{
      position: relative;
      margin: auto auto auto 0;
    }
}
`;

export const Button = styled.button`
  background-image: linear-gradient(
    45deg,
    #64403e 0%,
    #007ea7 51%,
    #64403e 100%
  );
  border: none;
  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 10px 16px;
  position: relative;
  margin-bottom: 10px;
  border-radius: 150px;

  :hover {
    border: none;
    background-image: linear-gradient(
      109.6deg,
      rgb(162, 2, 63) 11.2%,
      rgb(231, 62, 68) 53.6%,
      rgb(255, 129, 79) 91.1%
    );
  }
`;




