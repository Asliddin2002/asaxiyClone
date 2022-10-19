import React, { useState } from "react";
import "./App.css";
import Category from "./components/header/Category";
import Navbar from "./components/header/Navbar";
import Adds from "./components/adds";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Brand from "./components/brands/Brands";
import Download from "./components/brands/Download";
import Modal from "./components/modal/Modal";

function App() {
  const [modal, setModal] = useState(false);

  const onHover = () => {
    setModal(!modal);
  };
  const closeModal = () => {
    setModal(!modal);
  };

  return (
    <div className="App">
      <Navbar onHover={onHover} />
      <Category />
      {modal && <Modal closeModal={closeModal} />}
      <Adds />
      <Main />
      <About />
      <Brand />
      <Download />
    </div>
  );
}

export default App;
