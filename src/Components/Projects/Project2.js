import React, {Component} from 'react'
import "./Project.scss"
class Project2 extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
    return (
    <div>
        <div className="project-grid">
            <div className="intro">
            <h1>Website to BrawlGaming</h1>
            <p>A project in the course Design-build-test, my group and I developed a prototype for a website to the company brawlgaming.</p>
            </div>  
            
            <div className="imageholder1">
                
            <img src="/Images/brawlgaming_xd.jpg" alt="Umeå dragons i"/>
            </div>
            <div className="textholder1">
                <p>this prototype was made in adobe XD, I did alot of the work in adobe to build the prototype.
                    the design is  based on a given graphical profile and my project-group hade.
                </p>
            </div>
            <div className="textholder2">
            <p>I created the rigofht image in photshop, all the icon was created in illustraitor. </p>
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
export default Project2;