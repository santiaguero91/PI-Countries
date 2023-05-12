import styled from "styled-components";


export const LinkAndReload = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    align-items: center;
    gap: 2rem;
    background-color: rgba(34, 34, 34, 0.4);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    padding: 2px;
    .linkToForm{
    border-radius: 30px;
}
button{
    border: none;
    background-color: rgba(234, 234, 234, 0.9);
}
.firstRow{
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    gap: 10rem;
    margin-top: 15px;
}
`;
export const Filters = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 5rem;

    select{
    cursor: pointer;
    border: none;
    border-radius: 30px;
    height: 35px;
    width: fit-content;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    margin-top: 1rem;
    font-weight: 700;
    padding: 10px;
    outline: none;
  appearance: none;
  border: none;



}
`;
