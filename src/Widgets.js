import React from 'react'
import "./Widgets.css"
export default function Widgets() {
    return (
        <div className="widgets ">
             <iframe src= "https://www.youtube.com/results?search_query=dancin+aaron+smith?autoplay=1&mute=1" 
              width="300" 
              height="20%"
              style={{border:"none" , overflow:"hidden" }}
              scrolling="no"
              frameBorder="0"
              allowTransparency="true"
              allow="encrypted-media"
             > </iframe>
            
        </div>
    )
}
