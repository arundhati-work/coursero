import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <div id="header-component">
        <NavLink to="/" className="logo"><h1>coursero</h1></NavLink>
        <NavLink to={props.comp==='dashboard'? 'explore':'/'} className='link'>{props.comp==='dashboard'?'Explore Courses':'Dashboard'}</NavLink>
    </div>
  )
}
