import React from 'react';
import {Avatar} from "@material-ui/core";
import "./Story.css";

export default function Story({image,profileSrc,title}) {
    return (
        <div style={{backgroundImage:`url(${image})` }} 
        className="story">
            <Avatar className="story_personaje" src={profileSrc}/>
            <h4>{title}</h4>
        </div>
    )
}
