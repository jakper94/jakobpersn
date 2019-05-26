import React, {Component} from 'react'
import { NavLink } from "react-router-dom";
import "./Portfolio.scss"
class Portfolio extends Component {
    render(){
    return (
   <div>
   <div className="header-info">
   <img src="/Images/IMG_6881_1.jpg" alt="vancouver"/>
        <div className="header-text">
       
        <h1>Portfolio</h1>
        <p>Here you can find some of my projects I have done and that is still in progress. The projects are related to UX/UI-design 
            and programing. I try to make the desing simplistic. </p>
        </div>
    </div>
      <div className="grid-container">
          
          <div className="project1">
          <NavLink to={`/project1/`}>
          <img src="/Images/Udhc_1.jpg" alt="Umeå dragons i"/>
          
          </NavLink>
          <h1>UDHC</h1>
          </div>
          <div className="Project2">
          <img src="/Images/brawlgaming_xd.jpg" alt="brawlgaming"/>
          </div>
          <div className="project3">
              <img src="/Images/Alpens_spa_och_bubbel_svart.png" alt="logga"/>
          </div>
    </div>    
   </div>
    )};
};
export default Portfolio;