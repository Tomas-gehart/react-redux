import React from 'react';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import SidebarName from './sidebar_name';
import AddIcon from '@material-ui/icons/Add';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import AddToHomeScreenOutlinedIcon from '@material-ui/icons/AddToHomeScreenOutlined';
import SaveAltOutlinedIcon from '@material-ui/icons/SaveAltOutlined';


function Sidebar(){

    
    return(
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>App Academy</h2>
                    <h3>
                        <FiberManualRecordOutlinedIcon />
                    Rav Singh
                    </h3>
                </div>
             </div>
            <SidebarName Icon={MessageOutlinedIcon} title="Threads" />
            <SidebarName Icon={SmsOutlinedIcon} title="All DMs" />
            <SidebarName Icon={AddToHomeScreenOutlinedIcon} title="Mentions/reactions" />
            <SidebarName Icon={SaveAltOutlinedIcon} title="Saved Items" />
            <SidebarName Icon={AddIcon} addChannelOption/>

            <hr/>
            <SidebarName title="2020-07-06-ny"/>
            <SidebarName title="alumni" />
            <SidebarName title="general" />
            <SidebarName title="help-request" />
            <SidebarName title="hunters" />


        </div>
    )
}

export default Sidebar;