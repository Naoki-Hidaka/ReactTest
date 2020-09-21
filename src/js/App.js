import React from 'react';
import '../App.css';
import { BrowserRouter, Route } from "react-router-dom"
import Top from "./pages/Top"
import Add from "./pages/Add"
import Header from "./component/Header"
import Footer from "./component/Footer"

function App() {
  return (
    <div>
      <header><Header/></header>
      <BrowserRouter>
        <div><Route exact path="/" component={Top}></Route></div>
        <div><Route path="/add" component={Add}></Route></div>
      </BrowserRouter>
      <footer><Footer /></footer>
    </div>
  );
}

export default App;
