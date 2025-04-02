import React from "react";

import Link from "next/link";
import Label from "../Label";
import Container from "../Container";

const MenuBottom = () => {
  return (
    <MenuBottomStyled>
      <Container>
        <MenuBottomBox>
          <MenuBottomItem>
            <MenuBottomLink href={"/"}>О магазине</MenuBottomLink>
          </MenuBottomItem>
          <MenuBottomItem>
            <MenuBottomLink href={"/"}>Доставка и оплата</MenuBottomLink>

            <Label marginLeft={8}>Доступна рассрочка</Label>
          </MenuBottomItem>
          <MenuBottomItem>
            <MenuBottomLink href={"/"}>Тест-драйв</MenuBottomLink>
          </MenuBottomItem>
          <MenuBottomItem>
            <MenuBottomLink href={"/"}>Блог</MenuBottomLink>
          </MenuBottomItem>
          <MenuBottomItem>
            <MenuBottomLink href={"/"}>Контакты</MenuBottomLink>
          </MenuBottomItem>
          <MenuBottomItem>
            <MenuBottomLink href={"/"}>Акции</MenuBottomLink>
            <Label marginLeft={8}>%</Label>
          </MenuBottomItem>
        </MenuBottomBox>
      </Container>
    </MenuBottomStyled>
  );
};

const MenuBottomStyled = styled.nav`
  padding: ${rem(10)};
  background: ${(props) => props.theme.colors.background};
  margin-bottom: ${rem(20)};
`;

const MenuBottomBox = styled.ul`
  display: flex;
`;

const MenuBottomItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: ${rem(50)};
`;

const MenuBottomLink = styled(Link)`
  font-weight: 500;
  font-size: ${rem(14)};
  line-height: ${rem(20)};
  color: ${(props) => props.theme.colors.black};
`;

export default MenuBottom;
