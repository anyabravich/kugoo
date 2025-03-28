import React from "react";
import Banner from "components/Banner";
import BannerTitle from "components/BannerTitle";
import BannerDescription from "components/BannerDescription";
import { Button } from "components/Button";

const ServicePage = () => {
  return (
    <div>
      <Banner bg="/images/pages/service/banner-1.png">
        <BannerTitle>Ремонт и обслуживание товаров Kugoo Kirin</BannerTitle>
        <BannerDescription>в фирменных сервисых центрах</BannerDescription>
        <Button background="#fff" color="#F3A712" href="catalog">
          Записаться
        </Button>
      </Banner>
    </div>
  );
};

export default ServicePage;
