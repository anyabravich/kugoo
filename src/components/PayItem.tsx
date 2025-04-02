import React from "react";

import Image from "next/image";

type Props = {
  icon: string;
};

const PayItem = ({ icon }: Props) => {
  return (
    <PayItemStyled>
      <Image
        src={"/images/pay/" + icon + ".svg"}
        alt=""
        width={34}
        height={23}
      />
    </PayItemStyled>
  );
};

const PayItemStyled = styled.div`
  position: relative;
  width: ${rem(34)};
  height: ${rem(23)};
  background: #fff;
  border: ${rem(1)} solid ${(props) => props.theme.colors.grey["200"]};
  border-radius: ${rem(3)};
  overflow: hidden;
`;

export default PayItem;
