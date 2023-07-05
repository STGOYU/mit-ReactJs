import React from "react";

const Menu = (props) => {
  const productImage = require(`./assets/img/${props.img}`);

  return (
    <section key={props.id} className="section-center">
      <div className="menu-item">
        <img src={productImage} className="photo" />
        <div className="item-info">
          <header>
            <h4>{props.title}</h4>
            <h4 className="price">{props.price}</h4>
          </header>
          <p className="item-text">{props.desc}</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
