import React from 'react';

// Layout
import Header from '../src/layout/Header/Header';
import About from '../src/layout/About/About';
import Features from '../src/layout/Features/Features';
import Tours from '../src/layout/Tours/Tours';
import Stories from '../src/layout/Stories/Stories';
import Book from '../src/layout/Book/Book';
import Footer from '../src/layout/Footer/Footer';

// Components
import Navigation from './components/Navigation/Navigation';
import Popup from "./components/Popup/Popup";

function App() {
  return (
    <div className="container">
      <Navigation/>
      <Header/>
      <About/>
      <Features/>
      <Tours/>
      <Stories/>
      <Book/>
      <Footer/>
      <Popup/>
    </div>
  );
}

export default App;
