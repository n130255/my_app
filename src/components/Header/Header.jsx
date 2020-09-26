import React from 'react';
import h from "./Header.module.css"; //h-header

const Header = () =>{
    return <header className={h.header}>
        <img src='https://images.freecreatives.com/wp-content/uploads/2016/08/Fire-Abstract-Logo-Design.jpg' className={h.header_logo} />
    </header>
}

export default Header;