"use client";
import React from "react";
import "./Header.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
 
import "./Header.css";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const navigate = useRouter();
  return (
    <>  
      <div className="main_header">
        <div className="header_left">
          <div className="header_left_icon">
            <AiOutlineHome />
          </div>
          <div className="header_title">ShopEase</div>
        </div>
        <div className="header_right">
          <div className="header_right_icon">
            <FaRegUser />
          </div>
          <div className="header_right_icon"
           onClick={() => navigate.push("/cart")}
           > 
            <TiShoppingCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;