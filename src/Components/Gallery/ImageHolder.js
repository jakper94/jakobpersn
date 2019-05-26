import React from "react";
import "./ImageHolder.scss";
const ImageHolder = ({image,label,gamemodes}) => {
    return (
        <div className="ImageBox">
            <div className="projectImage" style={{backgroundImage:`url(${image})`}}>
                <div className="textholder">
                    <div className="textInImage">
                    <h1>Gamemodes</h1>
                    <hr/>
                    <h3>{gamemodes}</h3>
                    </div>
                </div>
            </div>
            <div className="label">
                <h2>{label}</h2>
            </div>
        </div>
        );
};

export default ImageHolder;