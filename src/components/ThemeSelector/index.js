import React, { useContext } from 'react';
import './index.css';
import ThemeContext from '../../theme-context';
import { THEMES } from '../../constants/themes';



function ThemeSelector() {

    const setectedTheme = useContext(ThemeContext)

    const url = setectedTheme.theme === THEMES.DARK? '/assets/icons/bright-mode.svg': '/assets/icons/dark-mode.svg';
    
    return (
        <img src={url} alt='theme-selector' onClick={setectedTheme.toggleTheme} className={'themeSelector'} />
    );
}

export default ThemeSelector;