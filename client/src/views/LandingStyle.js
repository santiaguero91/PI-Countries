import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion"

export const Background = styled(motion.div)`
background-color: black;
`;

export const VideoGlobe = styled(motion.video)`
z-index: 1;
  margin: 0 auto;
  height: 100vh;
  width: 100%;
`;

export const Bienvenido = styled(motion.div)`
z-index: 3;
position: absolute;
margin:  10% 35%;
background: transparent;
font-size: 50px;
    border: 2px solid white;
      cursor: pointer;
border: 2px solid white;
padding: 2px 8px;
transition: 0.5s;
font-weight: 700;
:hover{
    border: 2px solid yellowgreen;
}

`;
