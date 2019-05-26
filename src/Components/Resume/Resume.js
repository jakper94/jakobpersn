import React, {Component} from 'react'
import "./Resume.scss"

class Resume extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return(
        <div className="resume">
        <div className="grid">
            <div className="education">
                <h1><strong>Eduction</strong></h1>
                <br/>
                <img src="/Images/umu.png" alt="umea universitets logga"/>
                <h2>2016&emsp;-&emsp;2021&emsp;|&emsp;Master of Science</h2>
                <p>Interaction Technology and Design at Umeå University</p>
                <br/>
                
                <img src="/Images/vgy.png" alt="vgylogga"/>
                <h2>2010&emsp;-&emsp;2013&emsp;|&emsp;High school </h2>
                <p>Natural science with specialization in emergency services at Värmdö gymnasium</p>
                <br/>
                
            </div>
            <div className="work-experience">   
                <h1><strong>Work experience</strong></h1>
                <br/>
                <img src="/Images/postnord.png" alt="postnord.logga"/>
                <h2>2013 - 2019  &emsp;|&emsp; Postnord</h2>
                <p>Driver at Postnord in Stockholm</p>
                
            </div>

            
                <div className="text-1">
                    <h1><strong>Skills</strong></h1>
                    </div>
                <div className="experiences-left">
                    <h1>Programing</h1>
                        <h3>Java</h3>
                        <h3>Javascript</h3>
                        <h3>C</h3>
                        <h3>React.js</h3>
                        <h3>Node.js</h3>
                        <h3>Html</h3>
                        <h3>scss/css</h3>
                    
                </div>
                <div className="excperience-right">
                    <h1>Design</h1>
                        <h3>User experience</h3>
                        <h3>User inter</h3>
                        <h3>Adobe photoshop</h3>
                        <h3>Adobe XD</h3>
                        <h3>Adobe Illustraitor</h3>
                  
                </div>

            </div>
        </div>
        )
    };
}
export default Resume