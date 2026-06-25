"use client"
import React from 'react'
import "./HomeCategory.css";
import { categories } from '@/data/productsData';
const HomeCategory: React.FC = () => {
  return (
    <>
    <div className="home_category_section">
      <div className="category_header">shop by category</div>
      
      <div className="category_images">
        {categories.map((category, index) => {
            return (
                <div key={index} className="cat_card" style={{backgroundImage: `url(${category.image})`}}>
                    <div className= "cat_card">{category.name}</div>
                </div>
            )
        })}
      </div>
      </div>
      </>
  )
}

export default HomeCategory