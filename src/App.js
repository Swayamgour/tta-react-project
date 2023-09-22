import React from 'react';
import Navbar from './component/Navbar/Navbar';
import Main from './component/Main_content/Main';
import Foter from './component/Foter/Foter';
import './style.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Foter />
    </div>
  );
}
