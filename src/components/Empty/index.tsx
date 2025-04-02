import React from "react";

import H3 from "../Titles/H3";
import Image from "next/image";
import { Button } from "../Button";
import { IEmpty } from "./types";

const Empty = ({ title, description }: IEmpty) => {
  return (
    <EmptyContainer>
      <EmptyImgContainer>
        <Image src={"/images/empty.svg"} fill alt="empty" />
      </EmptyImgContainer>
      <H3 marginBottom={5}>{title}</H3>
      <EmptyText>{description}</EmptyText>
      <Button>Перейти в каталог</Button>
    </EmptyContainer>
  );
};

const EmptyContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${rem(45)};
  margin-bottom: ${rem(100)};
  background: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => rem(props.theme.radius.empty)};
`;

const EmptyImgContainer = styled.div`
  position: relative;
  width: ${rem(134)};
  height: ${rem(85)};
  margin-bottom: ${rem(25)};
`;
const EmptyText = styled.p`
  margin-bottom: ${rem(25)};
  font-weight: 400;
  font-size: ${rem(14)};
  line-height: ${rem(20)};
`;

export default Empty;
