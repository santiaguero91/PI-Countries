import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const TitleDiv = styled(motion.div)`
  color: aliceblue;
  border: none;
  background-color: rgba(15, 15, 15);
  border-radius: 30px;
  padding: 15px;
  width: 25%;
  margin: 20px auto 20px auto;
  font-size: larger;
`;

export const ButtonsDiv = styled(motion.div)`
  background-color: transparent;

  .linkToHome,
  .linkToForm,
  select {
    background-color: darkcyan;
    border: none;
    border-radius: 10px;
    width: fit-content;
    height: fit-content;
    padding: 10px;
    font-weight: 800;
    transition: 1s;
    :hover {
      background-color: darkmagenta;
    }
  }
`;

export const CardsDisplayerDiv = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  font-size: larger;
  margin: 3rem 5rem;
  transition: 1s;
  border-radius: 35px;
`;
