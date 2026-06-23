import Image from 'next/image'
import React from 'react'
import "./HomeBanner.css";

const HomeBanner: React.FC = () => {
  return (
    <div className="main-banner">
        <div className="banner_left">
        <p className="sub_title"> Summer Exclusive Collection</p>
        <h4 className="title"> Discover the Art of Smart Modern Living</h4>
        <p className="description">
        Upgrade your lifestyle and productivity setups with up to 40% off our verified catalog items. Valid this week only.
        </p>
        </div>

        <div className="banner_right">
            <Image
            src="/assets/image/home/banner.png"
            alt="New Fashion collection promo"
            className="banner_image"
            height={50}
            width={50}
            unoptimized
            style={{ width: "100% !important", height: "auto !important" }}
            />
        </div>
        
</div>

        
      
    
  )
}

export default HomeBanner