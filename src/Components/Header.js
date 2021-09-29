import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { NavLink, NavLink as RRNavLink, useHistory } from "react-router-dom";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedOut } from "../Actions/IsLogin";


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const dispatch = useDispatch();

  const history = useHistory();

  let isLoggedin = useSelector((state) => state.isLogin.isLoggedin);
  let details = useSelector((state) => state.isLogin.detail);

  console.log(isLoggedin)

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(isLoggedOut());
    history.push("/");
  };

  return (
    <>
      <Navbar color="dark" dark expand="md" fixed="top">
        <NavbarBrand style={{ marginLeft: "1rem" }}>IPL DASHBOARD</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="menu" navbar>
            <NavItem>
              <NavLink to="/" className="nav_link" tag={RRNavLink}>
                <span className="nav_text">Home</span>
              </NavLink>
            </NavItem>
            {!isLoggedin ? (
              <>
                <NavItem>
                  <NavLink to="/login" className="nav_link" tag={RRNavLink}>
                    <span className="nav_text">Login</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/signup" className="nav_link" tag={RRNavLink}>
                    <span className="nav_text">SignUp</span>
                  </NavLink>
                </NavItem>
              </>
            ) : null}
            {isLoggedin ? (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={{ color: "white" }} nav caret>
                  {details[0]}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>{details[1]}</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={logout} data-test="logout">Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : null}
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header;
