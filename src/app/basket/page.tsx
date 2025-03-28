import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { rem } from "polished";

import "swiper/css";
import "swiper/css/pagination";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import H2 from "@/components/Titles/H2";
import Empty from "@/components/Empty";
import Card from "@/components/Card";

const BasketPage = () => {
  return (
    <>
      <>1</>
    </>
    // <BasketPageBox>
    //   <Container>
    //     <Breadcrumbs mb={49} />
    //     <H2 marginBottom={40}>Моя корзина</H2>
    //     <Empty
    //       title={"Ваша корзина пуста"}
    //       description={"Добавьте в нее товары из каталога"}
    //     />
    //     <H2 marginBottom={50}>Рекомендуем вам</H2>
    //     <BasketPageSlider>
    //       <Swiper slidesPerView={5.4} spaceBetween={30} className="mySwiper">
    //         <SwiperSlide>
    //           <Card labelText="Хит" labelColor="green" />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <Card labelText="Хит" labelColor="green" />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <Card labelText="Хит" labelColor="green" />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <Card labelText="Хит" labelColor="green" />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <Card labelText="Хит" labelColor="green" />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <Card labelText="Хит" labelColor="green" />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <Card labelText="Хит" labelColor="green" />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <Card labelText="Хит" labelColor="green" />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <Card labelText="Хит" labelColor="green" />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <Card labelText="Хит" labelColor="green" />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <Card labelText="Хит" labelColor="green" />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <Card labelText="Хит" labelColor="green" />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <Card labelText="Хит" labelColor="green" />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <Card labelText="Хит" labelColor="green" />
    //         </SwiperSlide>
    //       </Swiper>
    //     </BasketPageSlider>
    //   </Container>
    // </BasketPageBox>
  );
};

const BasketPageBox = styled.div``;
const BasketPageSlider = styled.div`
  width: ${rem(1500)};
`;

export default BasketPage;
