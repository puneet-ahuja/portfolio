import React, { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import Menu from './components/Menu';
import './themes.css';
import classnames from 'classnames';
import ThemeContext from './theme-context';
import { THEMES } from './constants/themes';

function App() {

  const defaultTheme = (localStorage && localStorage.getItem('theme')) || THEMES.LIGHT;
  const [theme, setTheme] = useState(defaultTheme);

  const setectedTheme = {
    theme,
    toggleTheme: () => {
        setTheme(theme === THEMES.DARK? THEMES.LIGHT : THEMES.DARK)
        localStorage && localStorage.setItem('theme', theme === THEMES.DARK? THEMES.LIGHT : THEMES.DARK)
      }
  }

  


  return (
    <ThemeContext.Provider value={setectedTheme} >
      <div className = {classnames('app-root',{
        'dark-mode': THEMES.DARK === theme,
        'light-mode': THEMES.LIGHT === theme
      })}>
        <SideBar/>
        <MainContent/>
        <Menu/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
