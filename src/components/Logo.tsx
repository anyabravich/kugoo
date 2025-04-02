import React from "react";

import Link from "next/link";

type Props = {
  mr: number;
};

const Logo = ({ mr }: Props) => {
  return (
    <LogoStyled href={"/"} mr={mr}>
      Kugoo
    </LogoStyled>
  );
};

const LogoStyled = styled(Link)<{ mr: number }>`
  font-weight: 700;
  font-size: ${rem(30)};
  line-height: ${rem(43)};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.black};
  margin-right: ${(props) => props.mr}px;
`;

export default Logo;
