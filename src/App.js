import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import Menu from './components/Menu'

function App() {
  return (
    <>
      <SideBar/>
      <MainContent/>
      <Menu/>
    </>
  );
}

export default App;
