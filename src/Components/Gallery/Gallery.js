import React, {Component} from 'react'
import "./Gallery.scss"

class Gallery extends Component {

    render(){
        return(
            <div>
            
            
                <div className="grid-container">
                    
                    <div className="image1">
                    <img src="/Images/IMG_6881.jpg" alt="picture"/>
                    <div className="middle">
                            <div className="text">Vancouver 2016</div>
                            <button>Read more</button>
                        </div>
                    </div>
                    <div className="image2">
                        <img src="/Images/IMG_5934.jpg" alt="pic"/>
                        <div className="middle">
                            <div className="text">AIK Fotboll</div>
                        </div>
                    </div>
                    <div className="image3">
                        <img src="/Images/IMG_6693.jpg" alt="tete"/>
                        <div className="middle">
                            <div className="text">Go to sport gallery</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Gallery