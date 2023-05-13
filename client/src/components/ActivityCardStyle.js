import styled from "styled-components";

export const Card = styled.div`
    width: 300px;
    height: 250x;
    border: none;
    border-radius: 10px;
    color: rgb(225, 225, 225);
    font-weight: 500;
    transition: 1s;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    padding: 0 10px;
    background-color:rgba(15, 15, 15);

    button{
        display: flex;
        border-radius: 50px;
        padding: 8px;
        margin: 1px;
        font-weight: 800;
        border: none;
        background-color: rgb(150, 150, 150, 0.4);
        :hover{
            background-color: darkgoldenrod;
        }
    }

    img{
    border-radius: 1px;
    width: 150px;
    border-radius: 60px;
}

`;