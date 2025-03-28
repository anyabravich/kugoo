import React from "react";
import styled from "styled-components";
import Menu from "./Menu/Menu";
import MenuBottom from "./Menu/MenuBottom";
import MenuTop from "./Menu/MenuTop";

const Header = () => {
  return (
    <HeaderStyled>
      <MenuTop />
      <Menu />
      <MenuBottom />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header``;

export default Header;
