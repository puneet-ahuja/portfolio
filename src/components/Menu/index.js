import React, { useState} from 'react';
import './index.css';
import { navItems} from '../SideBar/config'

function Menu() {

    const [ isMenuOpen, setMenuOpen ] = useState(false);

    return (
        <>
            {!isMenuOpen && <img src='/icons/menu.svg' alt='hamburger-menu' className='hamburger-menu' onClick={()=>setMenuOpen(true)}/>}
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