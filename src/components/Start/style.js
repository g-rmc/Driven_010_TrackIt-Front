import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/Logo.svg";
import { ThreeDots } from  'react-loader-spinner';

function Loading(){
    return (
        <ThreeDots
        height="20"
        width="50"
        radius="9"
        color="white"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        />
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 100%;
    max-width: 600px;
    height: 100%;
    min-height: 100vh;
    padding: 0 50px;

    img{
        cursor: pointer;
        width: 180px;
    }

    h1 {
        cursor: pointer;
        font-family: 'Playball', cursive;
        font-weight: 400;
        font-size: 70px;
        line-height: 86px;
        text-align: center;
        color: #126BA5;
    }

    h1:hover {
        filter: brightness(70%);
    }
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    width: 100%;

    input {
        height: 45px;
        width: 100%;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 10px;
        margin-top: 5px;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
    }

    input::placeholder {
        color: #DBDBDB;
        opacity: 1;
    }

    button {
        height: 45px;
        width: 100%;
        margin-top: 5px;
        border-radius: 5px;
        background-color: #52B6FF;
        border:none;
        color: white;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        display:flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        
        &:hover {
            filter: brightness(70%);
        }

        &:active {
            transform: translateY(2px);
        }
    }
`

const StyledLink = styled(Link)`
    font-weight: 400;
    font-size: 14px;
    margin-top: 25px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;

    &:hover {
        filter: brightness(70%);
    }
`

export {
    Container,
    StyledForm,
    StyledLink,
    Logo,
    Loading,
}