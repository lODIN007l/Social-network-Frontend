import React from 'react'
import "./Sidebar.css";
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutLined from "@material-ui/icons/ExpandMoreOutlined";
function Siderbar() {
    return (
    <div className="sidebar">
    {/* <SiderbarRow src={user.photoURL} title={user.displayName}/> */}
       <SidebarRow src="https://st.depositphotos.com/2069323/2156/i/950/depositphotos_21568785-stock-photo-man-pointing.jpg"
        
        title="Wilson Lluilema"/>
       <SidebarRow 
            Icon={LocalHospitalIcon}
            title="COVID19 centro de informacion"
       />
       <SidebarRow Icon={EmojiFlagsIcon} title="Paginas"/>
       <SidebarRow Icon={PeopleIcon} title="Amigos"/>
       <SidebarRow Icon={ChatIcon} title="Messenger"/>
       <SidebarRow Icon={StorefrontIcon} title="Markplace"/>
       <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
       <SidebarRow Icon={ExpandMoreOutLined} title="Tienda"/>



    </div>
    )
}

export default Siderbar
