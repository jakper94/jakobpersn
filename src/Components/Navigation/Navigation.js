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
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/resume">Resume</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </div>
    );
};
export default Navigation;