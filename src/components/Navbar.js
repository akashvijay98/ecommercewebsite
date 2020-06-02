import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import logo2 from "./logo2.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import app from "../firestore";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark  px-sm-5">
        {/*
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk 
    */}
        <Link to="/">
          <img src={logo} alt="ok" className="navbar-brand" />
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              PRODUCTS
            </Link>
          </li>
        </ul>

        <Link to="login">
          <ButtonContainer>
            <span className="mr-2" onClick={() => app.auth().signOut()}>
              signout
            </span>
          </ButtonContainer>
        </Link>

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
              <img src={logo2} alt="ok" className="navbar-brand" />
              cart
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
