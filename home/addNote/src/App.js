import React from "react";
//import AddNote from "./components/create-note/add-note/add-note";
import NewNote from "./create-note/newNote";
import Note from "./create-note/person/note";

function App() {
  return (
    <main>
      {/* <ProductList /> */}
      <NewNote />
      <hr />
      <br />
      <Note />
    </main>
  );
}

export default App;