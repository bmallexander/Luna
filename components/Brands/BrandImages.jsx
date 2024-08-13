import React from 'react';
import brandsData from './brandsData'; // Update with the correct path

const BrandImages = () => {
  return (
    <div className="brand-container">
      {brandsData.map((brand) => (
        <a href={brand.href} key={brand.id} target="_blank" rel="noopener noreferrer">
          <img
            src={brand.image}  // Ensure this is the image you want to display and scale
            alt={brand.name}
            style={{
              width: '200px',  // Adjust this to your desired width
              height: '100px', // Adjust this to your desired height
              objectFit: 'fill', // Force the image to fill the specified dimensions
            }}
          />
        </a>
      ))}
    </div>
  );
};

export default BrandImages;
