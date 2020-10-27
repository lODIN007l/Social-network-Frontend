import React from 'react'
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

export default function Feed() {
    return (
        <div className="feed"> 
            <StoryReel/>
            <MessageSender/>    
            <Post
                profilePic="https://i.pinimg.com/originals/64/3e/fe/643efe51394d635cbf544a25088ee269.png"
                message="this is insane"
                timestamp="este es el tiempo "
                username="Wilson Lluilema"
                image= "https://www.tithink.com/wp-content/uploads/2018/05/practicas-desarollo-software.jpeg"
            
            
            />
            <Post/>
            <Post/>

        </div>
    )
}
