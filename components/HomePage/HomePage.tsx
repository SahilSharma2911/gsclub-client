import React from "react";
import Hero from "./Hero";
import Products from "./Products";
import Filter from "./Filter";
import Faq from "./Faq";
import GetMail from "./GetMail";
import AdultGoods from "./AdultGoods";
import SupplementsBanner from "./SupplementsBanner";
import ProductTypes from "./ProductTypes";

const HomePage = () => {
  return (
    <main>
      <Hero />
      {/* <Filter /> */}
      <ProductTypes />
      <Products />
      <GetMail />
      <AdultGoods />
      {/* can't miss */}
      <SupplementsBanner />
      <Faq />
    </main>
  );
};

export default HomePage;
