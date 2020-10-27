import { Avatar } from '@material-ui/core'
import React,{useState} from 'react'
import "./MessageSender.css"
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
export default function MessageSender() {

    const[input,setInput] = useState("");
    const[imageUrl,setImageUrl]=useState("");

    const handleSubmit= (e) => {
        e.preventDefault();

        setInput("");
        setImageUrl("");    
    }

      



    return (
        <div className="messageSender"> 
            <div className="messageSender_top">
                <Avatar/>
                <form>
                    <input  
                        value={input}
                        onChange={(e)=> setInput(e.target.value)}
                    className="messageSender_input" style={{color:"black"}} type="text" placeholder="Que hay de nuevo?"/>
                    <input  
                         value={imageUrl}
                         onChange={(e)=> setImageUrl(e.target.value)}
                    placeholder="Url de imagen(Opcional)"/ >
                    <button onClick={handleSubmit} type="submit">
                        Enviar
                        </button>     
                </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={ {color:"red"} } />
                    <h3>En Vivo</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{color: "green"}} />
                    <h3>Imagen/Video  </h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{color: "orange"}} />
                    <h3>Como te sientes?</h3>
                </div>
            </div>
        </div>
    )
}
