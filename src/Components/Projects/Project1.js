import React, {Component} from 'react'
import "./Project.scss"
class Project1 extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
    return (
    <div>
        <div className="project-grid">
            <div className="intro">
            <h1>Sideproject Umeå Dragons HC</h1>
            <p>One of my ongoing sideproject is working with the local hockey club Umeå Dragons Social media. 
                        That means that I do all the posts on instagram and facebook, by using Photoshop and inspiration from other 
                        sport sites. </p>
            </div>  
            
            <div className="imageholder1">
                
                <img src="/Images/dragons_instagram.jpg" alt="instagram"/>
            </div>
            <div className="textholder2">
            <p>I created the right image in photshop, all the icon was created in illustraitor. </p>
            </div>
            <div className="imageholder2">
                
                <img src="/Images/Udhc_1.jpg" alt="UDHC"/>
            </div>  
            <div className="imageholder3">
                <img src="/Images/poster_Derby.jpg" alt="derby"/>
            </div>
        </div>
        

   </div>
    )};
};
export default Project1;