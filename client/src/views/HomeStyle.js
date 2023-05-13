import styled from "styled-components";

export const Home = styled.div`
  transition: 1s ease-in-out;
`;

export const LinkAndReload = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  background-color: rgba(34, 34, 34, 0.4);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  padding: 2px;
  .linkToForm {
    border-radius: 30px;
  }
  button {
    border: none;
    background-image: linear-gradient(
      45deg,
      #6a6a6a 0%,
      #9a9a9a 51%,
      #6a6a6a 100%
    );
  }
  .firstRow {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 10rem;
    margin-top: 15px;
  }
`;

export const ButtontoForm = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  background-color: rgba(111, 111, 111, 0.9);
  font-weight: 800;
  margin: 0px 5rem;
  border-radius: 20px;
  width: 60%;
  height: 100%;
  transition: 0.5s;

  :hover {
    border: none;
    background-image: linear-gradient(
      45deg,
      #9a9a9a 0%,
      #6a6a6a 51%,
      #9a9a9a 100%
    );
  }
`;

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  select {
    cursor: pointer;
    height: 35px;
    width: fit-content;
    border: none;
    border-radius: 30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    margin-top: 1rem;
    font-weight: 700;
    padding: 10px 20px;
    font-weight: 700;
    outline: none;
    margin-bottom: 10px;
    background-color: rgba(88, 129, 87);

    appearance: none;
    border: none;
  }
`;

export const Countries = styled.div`
    display: grid;
	  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2.5rem;
    font-size: larger;
    margin: 2.5rem 4rem;
    transition: 1s;
  
`;


