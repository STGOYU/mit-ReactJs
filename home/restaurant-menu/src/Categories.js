import React, { useState } from 'react'

const Categories = (props) => {
  const [products, setProducts] = useState([]);
  
  const filters = (category) => {
    if(category === 'all'){
      setProducts();
      return;
    }
    const news = props.filter((item) => item.category === category);
    setProducts(news);
  };

  return (
    <div className='btn-container'>
       <button className="filter-btn" onClick={() => filters ('all')}>
          All
       </button>
       <button className="filter-btn" onClick={() => filters ('breakfast')}>
          Breakfast
       </button>
    </div>
  )
}

export default Categories