import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import Navbar from './Navbar';
// import styled from 'styled-components';
const Header = () => {
  return (
    <MainHeader>
     <NavLink to="/">
        <img src="./images/logo4.png" alt="logo" 
        className="logo"/>
     </NavLink>
     <Navbar/>
    </MainHeader>
  )
};
const MainHeader=styled.header`
padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: auto;
    max-width: 30%;
    margin-left: 0px 0px 0px 30px;
    float: left
  }
  


`;

export default Header;