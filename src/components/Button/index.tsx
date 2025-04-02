import React from "react";

import Link from "next/link";
import { IButton } from "./types";

export const Button = ({
  href,
  children,
  width,
  background,
  color,
}: IButton) => {
  return (
    <Link href={href || "#"} passHref>
      <ButtonStyled width={width} background={background} color={color}>
        {children}
      </ButtonStyled>
    </Link>
  );
};

const ButtonStyled = styled.button<{
  width?: string;
  background?: string;
  color?: string;
}>`
  display: inline-block;
  width: ${(props) => props.width};
  padding: ${rem(15)} ${rem(25)};
  background: ${(props) => props.background};
  text-align: center;
  border-radius: ${rem(5)};
  color: ${(props) => props.color};
  font-weight: 400;
  font-size: ${rem(12)};
  line-height: ${rem(17)};
  cursor: pointer;
`;
