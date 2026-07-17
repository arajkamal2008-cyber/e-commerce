
import CheckoutSections from "@/components/checkoutComponents/CheckoutSections";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import React from "react";

const page: React.FC = () => {
  return (
    <>
        <Header />
        <CheckoutSections />
        <Footer />
    </>
  );
}

export default page;