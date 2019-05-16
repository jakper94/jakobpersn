import React, {Component} from 'react'
import "./Footer.scss"
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
class Footer extends Component {
    render(){
        return(
            <div classname="footer">
                
                <div className="middle">
                <SocialIcon url="https://www.linkedin.com/in/jakob-persson/"bgColor="#808080" />
                <SocialIcon url="https://www.instagram.com/jakper/"bgColor="#808080" />
                <SocialIcon url="mailto:jakob.j.persson@hotmail.com" bgColor="#808080"/>
                </div>
            </div>
        )
    };
};
export default Footer