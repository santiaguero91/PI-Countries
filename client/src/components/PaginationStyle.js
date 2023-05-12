import styled from "styled-components";


export const Buttons = styled.button`
    border: none;
    padding: 10px;
    cursor: pointer;
    background-color: rgba(111, 111, 111, 0.9);
    font-weight: 800;
    margin: 0px 5rem;
    border-radius: 20px;
    width: 8%;
    transition: 0.5s;
    background-image: linear-gradient(
      45deg,
      #6a6a6a 0%,
      #9a9a9a 51%,
      #6a6a6a 100%
    );
    :hover{
    border: none;
    background-image: linear-gradient(
      45deg,
      #9a9a9a 0%,
      #6a6a6a 51%,
      #9a9a9a 100%
    );
}
`;


export const Paginattion = styled.ul`
transition: 0.5s;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto 20px auto;
    width: fit-content;
    transition: 1s;

    button{
    border: none;
    padding: 10px;
    cursor: pointer;
    background-color: rgba(111, 111, 111, 0.9);
    transition: 0.2s;
    font-weight: 800;
    margin: 0;
    border-radius: 0px;
    width: 100%;

}
button:hover{
    border: none;
    background-image: linear-gradient(
      45deg,
      #9a9a9a 0%,
      #6a6a6a 51%,
      #9a9a9a 100%
    );
}

button.active{
    background-color: #471512;
    border: none;
    color: aliceblue;
}
`;