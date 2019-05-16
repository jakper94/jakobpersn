import React, {Component} from 'react'
import "./Home.scss"
import Gallery from "../Gallery/Gallery";
class Home extends Component {
    render(){
    return (
   <div>
        <div className="HeaderImg">
            <img src="/Images/me1.jpg" alt="header image"/>
           <div className="text">
                <h1>Jakob Persson</h1>
                <h2>UX Student &emsp;|&emsp;Photographer &emsp;|&emsp;Hockeyplayer</h2>
            </div>
            <Gallery/>
        </div>
        
   </div>
    )};
};
export default Home;