import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
const Navigation = () =>{
    return(
        <div className="navigation">
            <div className="logo">
                <NavLink exact to="/">
                    
                </NavLink>
            </div>
            <div className="menu">
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/about">About</NavLink>
                <NavLink exact to="/portfolio">Portfolio</NavLink>
                <NavLink exact to="/resume">Resume</NavLink>
                <NavLink exact to="/contact">Contact</NavLink>
            </div>
        </div>
    );
};
export default Navigation;