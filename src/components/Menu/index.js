import React, { useState, useContext } from 'react';
import './index.css';
import { navItems} from '../SideBar/config';
import ThemeContext from '../../theme-context';

import { THEMES } from '../../constants/themes'

const Menu = () =>  {

    const [ isMenuOpen, setMenuOpen ] = useState(false);

    const setectedTheme = useContext(ThemeContext)

    const menuIcon = setectedTheme.theme === THEMES.DARK
        ?'/assets/icons/menu-white.svg'
        :'/assets/icons/menu.svg'
    return (
        <>
            {!isMenuOpen && <img src={menuIcon} alt='hamburger-menu' className='hamburger-menu' onClick={()=>setMenuOpen(true)}/>}
            <div className={'overlay' + (isMenuOpen?' show':'')} onClick={()=>setMenuOpen(false)}/>
            <div className={'drawer' + (isMenuOpen?' show':'')}>
                {isMenuOpen &&  navItems.map((navItem,index)=>{
                    const { title,href } = navItem
                    return (
                        <div
                            key={index}
                            className='navigation-item'
                        >
                            <a href={href} onClick={()=>setMenuOpen(false)} className='navigation-link'>{title}</a>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Menu;