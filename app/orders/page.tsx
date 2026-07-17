import AllOrders from "@/components/ordersComponents/AllOrders";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import React from "react";

const page: React.FC = () => {
  return (
    <>
      <Header />
      <AllOrders />
      <Footer />
    </>
  );
};

export default page;