import React from "react";
import styled from "styled-components";

import NavItem from "./NavItem/NavItem";

const Nav = styled.nav`
  display: flex;
  margin-top: ${(props) => (props.mobile ? "-6rem" : null)};
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  align-items: center;
  height: 100%;
`;

const NavItems = ({ mobile, clicked, loggedIn }) => {
  let links;
  if (loggedIn.uid) {
    links = (
      <Ul>
        <NavItem clicked={clicked} link="/">
          Todos
        </NavItem>
        <NavItem clicked={clicked} link="/profile">
          Profile
        </NavItem>
        <NavItem clicked={clicked} link="/logout">
          Logout
        </NavItem>
      </Ul>
    );
  } else {
    links = (
      <Ul>
        <NavItem clicked={clicked} link="/login">
          Login
        </NavItem>
        <NavItem clicked={clicked} link="/signup">
          Signup
        </NavItem>
      </Ul>
    );
  }
  return <Nav>{links}</Nav>;
};

export default NavItems;
