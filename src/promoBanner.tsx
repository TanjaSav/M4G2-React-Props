import React from 'react';

// Define the props for the PromoBanner component

type PromoBannerProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  imageSrc: string;
  buttonColor?: string;
  backgroundColor?: string;
  border?: string; 
};


// Functional component that renders a promotional banner
const PromoBanner = ({
  title = 'Enjoy 20% OFF all pastries!',
  subtitle = 'Soft, buttery layers that taste like home',
  buttonText = 'Shop Now',
  imageSrc = "/images/PastriesPromo.jpg",
  buttonColor = '#007E23',
  backgroundColor = '#FFF8F8',// Default background color
  border = '1px solid #E03400',
}: PromoBannerProps) => {
  return (

  // Outer container for the banner
  <div
      className="promotion-item"
      style={{backgroundColor: '#FFFFFB', margin: 'auto', padding:'32px', maxWidth: '431px', boxSizing: 'border-box', height: '245px'}}> {/* Styles for the outer container, applying background color from props*/}

    <div
      style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', border: border, 
      borderRadius: '8px', height: '181px', boxSizing: 'border-box', gap: '35px', maxWidth: '352px', margin: 'auto', backgroundColor: backgroundColor}}>
      
      {/* Left side: text and button */}
      <div
        style={{width: '205px', padding: '0', height: '100%', marginLeft: '35px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <h2
          style={{fontFamily: 'Poppins', fontSize: '19px', fontStyle: 'normal', fontWeight: '500', lineHeight: '100%', margin: '0'}}>
            {title}
        </h2>
        <p
          style={{fontFamily: 'Poppins', fontSize: '13px', fontWeight: 400, lineHeight: '110%', color: '#333333', marginBottom: '14px'}}>
            {subtitle}
        </p>
        <button
          style={{width: '135px', height: '45px', backgroundColor: buttonColor, color:'#ffff', border: 'none', padding: '11px 19.5px', fontSize: '19px', fontWeight: 500,
          lineHeight: '100%', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.3s ease', transform : 'none'}}>
          {buttonText}
        </button>
      </div>

      {/* Right side: promo image */}
      <div
        style={{width: '352px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
        <img
          src= {imageSrc}
          alt="Promo"
          style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', borderRadius: '8px'}}/>
      </div>
    </div>
  </div>
  );
};

// Export the component for use in other parts of the app
export default PromoBanner;