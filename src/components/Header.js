import React from "react";
import "../App.css";


const Header = (props)=>{

  return ( 
  <header className='header'>
    <h1 >{props.name}</h1>
    <ul className='menu'>
      <li>About</li>
      <li>Buy</li>
      <li>Contact</li>
    </ul>
</header>  );
}

export default Header;