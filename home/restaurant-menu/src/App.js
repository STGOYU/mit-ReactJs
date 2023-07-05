import React from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./assets/data/data.json";

function App() {

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu Cafee</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <div>
          {data.map((product) => (
            <Menu {...product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
