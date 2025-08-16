import React from "react";
import Hero from "./Hero";
// import Products from "./Products";
// import Filter from "./Filter";
import Faq from "./Faq";
import GetMail from "./GetMail";
import AdultGoods from "./AdultGoods";
import SupplementsBanner from "./SupplementsBanner";
import ProductList from "./ProductList";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <ProductList title="Just In" viewAllLink="/vapes" productType="VAPES" />
      <GetMail />
      <AdultGoods />
      <ProductList title="Can’t miss" viewAllLink="/vapes" productType="VAPES" />
      {/* <Filter />
      <Products /> */}
      <SupplementsBanner />
      <Faq />
    </main>
  );
};

export default HomePage;
