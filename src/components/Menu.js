import React from "react";

//Obs: Se utilizarmos uma lista nop React, devemos passar uma unique Key para cada elemento
//dessa lista,e para isso, geralmente utilizamos o indice da lista, ou o id(no caso de datos vindo do banco de dados)
const Menu = (props)=>{

  const listLinks = props.links.map((link,index)=> <li key={index}>{link}</li>);
  return(<ul className='menu'>
    {listLinks}
</ul>);
}


export default Menu;