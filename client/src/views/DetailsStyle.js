import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion"

export const MainDetailsDiv = styled(motion.div)`
  font-size: 20px;
  justify-content: center;
  margin: auto;
  width: fit-content;
  align-items: center;
`;

export const DetailDiv = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, minmax(500px, 1fr));
  grid-gap: 1rem;
  width: fit-content;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 50px;
  padding: 20px;
  margin: 5% 0 0 0;
  color: #fff;

/*   background-color: rgba(111, 111, 111, 0.);
 */
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

.imgFlag{
    width: 300px;
    height: 200px;
}

.countryStats{
    display: grid;
    grid-template-columns: repeat(1, minmax(50px, 2fr));
    grid-gap: 1rem;
    width: fit-content;
    margin-left: 4rem;
    border-radius: 50px;
    padding: 20px 70px;
    background-color:rgba(40, 40, 40, 0.5);


}
`;

export const StatDiv = styled(motion.div)`
display: flex;
justify-content: center;
align-items: center;
h1{
    font-size: 20px;
    font-weight: 700;
}
p{
font-size: 20px;
  font-weight: 400;
}
`;

export const CountryActivities = styled(motion.div)`

h2{
  background-color:rgba(40, 40, 40, 0.5);
  border-radius: 90px;
  padding: 10px;
}
  
`;




export const ButtonHome = styled.button`
  width: fit-content;
  padding: 10px;
  background-color: aquamarine;
  margin: auto;
  border: none;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    cursor: pointer;
    font-weight: 800;
    :hover{
        background-color: pink;

    }
`;