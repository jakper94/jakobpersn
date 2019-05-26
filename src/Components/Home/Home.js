import React, {Component} from 'react'
import "./Home.scss"
import Gallery from "../Gallery/Gallery"
import IntroText from "../IntroText/IntroText"
class Home extends Component {
    render(){
    return (
   <div>
        <div className="HeaderImg">
            <img src="/Images/me1.jpg" alt="header"/>
           <div className="header_text">
                <h1>I'm Jakob Persson!</h1>
                <h2>UX/UI Designer</h2>
            </div>
        </div>
        <IntroText/>
        <Gallery/>
        
   </div>
    )};
};
export default Home;