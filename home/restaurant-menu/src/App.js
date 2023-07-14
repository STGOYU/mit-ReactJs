import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import data from './data';

const allCategories =['all',...new Set(data.map((item) => item.category))] ;


function App() {

  const [menuItems, setMenuItems] = useState(data);
  const [categories, setcategories] = useState(allCategories);

  const filterItems = (category) => {

    if(category === 'all'){
      setMenuItems(data);
      return;
    }

    const newItems = data.filter((menuItem) => menuItem.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu Cafee</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu data={menuItems}/>
      </section>
    </main>
  );
}

export default App;
