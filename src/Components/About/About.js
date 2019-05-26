import React, {Component} from 'react'
import "./About.scss"

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
    return (
   <div>
       <div className="grid-container">
            <div className="profilbild">
                <img src="/Images/Profilbild.jpg" alt="Jakob persson"/>
            </div>
            <div className="Start-Text">
            <h1>Jakob Persson</h1>
            <p> I am 25 years old and is raised in Stockholm. 
                In 2016 I moved to Umeå where I study Master of Engineering in Interaction & Design.
                On my sparetime I play icehockey and takes care of the team social media account. I also have a 
                passion for photography, especially to shoot sports.
                 </p>
            </div>
        </div>
   </div>
    )};
};
export default About;