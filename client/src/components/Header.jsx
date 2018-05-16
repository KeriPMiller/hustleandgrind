import React from "react";
import logo from "../assets/logo.svg";
import styled from "react-emotion";


const Header = () => {
    const HeadWrap = styled('div')`
        background-color: #845730;
        padding: 5px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    `;
    const Title = styled('h1')`
        color: #CA944E;
        font-size: 2rem;
        font-family: 'Vast Shadow', cursive;
        margin: 10px 0 10px 0;        
    `;
    const Logo = styled('img')`
        height: 60px;
    `;
    return (
        <HeadWrap>
            <Logo src={logo} alt="logo"/>
            <Title>Hustle & Grind</Title>
        </HeadWrap>
    )
};

export default Header;