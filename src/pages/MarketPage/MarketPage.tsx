import React from "react";
import AllItemsSection from "./components/AllItemsSection";
import BestItemsSection from "./components/BestItemsSection";

const MarketPage: React.FC = () => {
  return (
    <>
      <BestItemsSection />
      <AllItemsSection />
    </>
  );
};

export default MarketPage;
