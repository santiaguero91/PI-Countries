import styled from "styled-components";

export const ButtonsDiv = styled.div`
  background-color: transparent;
  
  .linkToHome, .linkToForm, select{
    background-color: darkcyan;
    border: none;
    border-radius: 10px;
    width: fit-content;
    height: fit-content;
    padding: 10px;
    font-weight: 800;
    transition: 1s;

    :hover{
        background-color: darkmagenta;
    }
  }
  `;



export const CardsDisplayerDiv = styled.div`
  background-color: rgba(70, 70, 70, 0.9);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  font-size: larger;
  margin: 3rem 5rem;
  transition: 1s;
  border-radius: 35px;
`;

export const TitleDiv = styled.div`
  color: aliceblue;
  border: 2px solid black;
  background-color: rgba(70, 70, 70, 0.514);
  border-radius: 30px;
  padding: 20px;
  width: 300px;
  margin: 20px auto 20px auto;
`;
