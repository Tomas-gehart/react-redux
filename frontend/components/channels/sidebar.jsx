import React from 'react';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import SideBarOption from './sidebaroption';
import AddIcon from '@material-ui/icons/Add';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import AddToHomeScreenOutlinedIcon from '@material-ui/icons/AddToHomeScreenOutlined';
import SaveAltOutlinedIcon from '@material-ui/icons/SaveAltOutlined';


function Sidebar() {


    return (
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
            <SideBarOption Icon={MessageOutlinedIcon} title="Threads" />
            <SideBarOption Icon={SmsOutlinedIcon} title="All DMs" />
            <SideBarOption Icon={AddToHomeScreenOutlinedIcon} title="Mentions/reactions" />
            <SideBarOption Icon={SaveAltOutlinedIcon} title="Saved Items" />
            <SideBarOption Icon={AddIcon} addChannelOption />

            <hr />
            <SideBarOption title="2020-07-06-ny" />
            <SideBarOption title="alumni" />
            <SideBarOption title="general" />
            <SideBarOption title="help-request" />
            <SideBarOption title="hunters" />


        </div>
    )
}

export default Sidebar;
