import React, { useState } from 'react';
// import './styles.css';

const ProductDetailItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive); 
  };

  return (
    <div className="text-white mt-5">
      <hr style={{ borderStyle: "dashed" }} />
      <div className="my-5">
        <div className={`showUl flex justify-between items-center cursor-pointer ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
          <div className="uppercase text-2xl text-btnYellow">
            {title}
          </div>
          <i className={`fa-solid fa-chevron-${isActive ? 'up' : 'down'}`} />
        </div>
        <ul className={`Ul mx-5 mb-5 Ulan ${isActive ? 'active' : ''}`}>
          {content}
        </ul>
        <hr style={{ borderStyle: "dashed" }} />
      </div>
    </div>
  );
};

export default ProductDetailItem;
