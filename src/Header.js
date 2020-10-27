import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from "@material-ui/core"; 
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Header() {
    return (
        <div className="header ">

             <div className="header_left">
                {/* logo */}
             <img  src="https://brandemia.org/sites/default/files/snapchat_logo_portada.jpg" alt=""  
                />
             </div>
             <div className="header_input">
                <SearchIcon/>
               <input placeholder='Search Gaxy' type="text"/>    
             </div>

             <div className="header_centro">
                        <div className="header_option 
                        header_option--active">
                        <HomeIcon fontSize="large" /> 
                        </div>
                        <div className="header_option">
                        <FlagIcon fontSize="large" /> 
                        </div>
                        <div className="header_option">
                        <SubscriptionsIcon fontSize="large" /> 
                        </div>
                        <div className="header_option">
                        <StorefrontIcon fontSize="large" /> 
                        </div>
                        <div className="header_option">
                        <SupervisedUserCircleIcon fontSize="large" /> 
                        </div>
             </div>


             <div className="header_rigth"></div>
                <div className= "header_info">
                    <Avatar/>
                    <h4>Wilson Lluilema</h4>

                </div> 
                <IconButton>
                    <AddIcon/> 
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
        </div>
    )
}

export default Header;
