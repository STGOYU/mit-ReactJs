import React from "react";

const Categories = ({categories,filterItems}) => {

  return (
    <section>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button type="button" 
            className="filter-btn" 
            key={index} 
            onClick={() => filterItems(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
    </section>
  );
};

export default Categories;
