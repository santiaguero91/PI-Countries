import styled from "styled-components";


export const CardDiv = styled.div`
    width: 270px;
    height: 200x;
    scale: 80%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	border-radius: 10px;
    background-color:rgba( 88, 129, 87, 0.9) ;
    color: rgb(0, 0, 0);
    font-weight: 00;
    transition: 0.5s;
    :hover{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
	rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transform: scale(110%);
}
`;




export const Stats = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-right: 20px;
    background-color:rgba(58, 90, 64, 0.9) ;
    font-weight: 700;

    img{
    border-radius: 1px;
    width: 150px;
    height: 100px;
    scale: 70%;
    transition: 1s;
    }
`;

