import React from "react";
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(){
   return( 
   <nav>
    <ul>
  {/*   <ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
    </ul> */}
    <li>
    <NavLink className='navlink' to={'/Main'}>Main Page</NavLink>
    </li>
    <li>
    <NavLink className='navlink' to={'/Create'}>Create</NavLink>
    </li>
    </ul>
   </nav>
   )
}