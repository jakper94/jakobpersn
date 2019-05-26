import React, {Component} from 'react'
import "./Gallery.scss"

class Gallery extends Component {

    render(){
        return(
            <div>
            
            
                <div className="grid-container">
                    
                    <div className="image1">
                        
                        <img src="/Images/dragons.jpg" alt="vancouver"/>
                            <h2>UDHC</h2>
                            <h3>Photoshop/Illustraitor</h3>
                            
                    </div>
                    <div className="image2">
                        <img src="/Images/gallery_square.jpg" alt="aik"/>
                            <h2>Brawl Gaming</h2>
                            
                    </div>
                    <div className="image3">
                        <img src="/Images/gallery_square.jpg" alt="aik"/>
                        <h2>Photo Gallery</h2>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Gallery