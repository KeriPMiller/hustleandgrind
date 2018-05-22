import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { Links } from "../assets/styledComponents";
import styled from "react-emotion";


const NavBar = () => {
  const HeadWrap = styled("div")`
        background-color: #845730;
        padding: 5px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    `;
  const Title = styled("h1")`
        color: #CA944E;
        font-size: 2rem;
        font-family: 'Vast Shadow', cursive;
        margin: 10px 0 10px 0;        
    `;
  const Logo = styled("img")`
        height: 60px;
    `;
  const LeftWrap = styled("div")`
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-left: 20%;
  `;

  return (
    <HeadWrap>
      <Link to={"/"}>
        <Logo src={logo} alt="logo"/>
      </Link>
        <Title>Hustle & Grind</Title>
      <LeftWrap>
        <Link to={"/login"}>
          <Links>login</Links>
        </Link>
      </LeftWrap>
    </HeadWrap>
  );
};

export default NavBar;