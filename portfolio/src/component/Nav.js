import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    const menus = [
        {id: 0, title: "home"},
        {id: 1, title: "about" },
        {id: 2, title: "skill"},
        {id: 3, title: "project"}
    ];

  return (
    <>
    <Nav>

        {menus.map((menu) => (
            <div>
                {menu.title}
            </div>
        ))}
    </Nav>
    </>
  )
}

export default Nav;