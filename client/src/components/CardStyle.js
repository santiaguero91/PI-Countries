import styled from "styled-components";


export const CardDiv = styled.div`
    width: 270px;
    height: 200x;
    scale: 80%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	border-radius: 10px;
    background-color:rgba(31, 29, 17, 0.9) ;
    color: rgb(161, 187, 171);
    font-weight: 500;
    transition: 0.5s;
    :hover{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
	rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transform: scale(110%);
}
button{
    transition: 1s;
    border: none;
    background-color: rgba(255, 255, 255, 0.644);
    box-shadow: rgba(255, 255, 255, 0.644) 0px 0px 0px 0px;
    border-radius: 15px;
    align-self: flex-end;
    margin-bottom: 10px;
}

button:hover{
    border: none;
    border-radius: 30px;
}
`;

export const Stats = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-right: 20px;
    background-color:rgba(139, 133, 77, 0.9) ;
    font-weight: 700;

    img{
    border-radius: 1px;
    width: 150px;
    height: 100px;
    scale: 70%;
    transition: 1s;
    }
`;

