import React, {Component} from 'react'
import "./Portfolio.scss"
class Portfolio extends Component {
    render(){
    return (
   <div>
   <div className="header-info">
   <img src="/Images/IMG_6881.jpg" alt="vancouver"/>
        <div className="header-text">
       
        <h1>My projects</h1>
        <p>Here you can find some of my projects I have done and that is still in progress</p>
        </div>
    </div>
      <div className="grid-container">
          
          <div className="project1">
                <div className="text">
                    <h2>Umeå Dragons Social media</h2>
                    <p>One of my ongoing sideproject is working with the local hockey club Umeå Dragons Social media. 
                        That means that I do all the posts on instagram and facebook, by using Photoshop and inspiration from other 
                        sport sites. 
                    </p>
                </div>

          </div>
          <div className="image-1">
          <img src="/Images/Udhc_1.jpg" alt="Umeå dragons i"/>
          </div>
          </div> 


        
   </div>
    )};
};
export default Portfolio;