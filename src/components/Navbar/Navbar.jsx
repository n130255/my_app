import React from 'react';
import { NavLink } from 'react-router-dom';
import ni from "./Navbar.module.css";//ni-navbar items

const Navbar = () =>{
    return <nav className={ni.nav}>
      <div className={ni.navbar_item}>
        <NavLink to="/profile" activeClassName={ni.activeLink} >Profile</NavLink>
      </div>
      <div className={ni.navbar_item}>
        <NavLink to="/dialogs" activeClassName={ni.activeLink}>Message</NavLink>
      </div>
      <div className={ni.navbar_item}>
        <NavLink to="/news" activeClassName={ni.activeLink}>News</NavLink>
      </div>
      <div className={ni.navbar_item}>
        <NavLink to="/music" activeClassName={ni.activeLink}>Music</NavLink>
      </div>
      <div className={ni.navbar_item}>
        <NavLink to="/settings" activeClassName={ni.activeLink}>Settings</NavLink>
      </div>       
    </nav>
}

export default Navbar;