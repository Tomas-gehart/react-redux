import React from 'react';
import { Avatar } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';



function Header() {
    return (
        <div className="channel-header">
            <div className="left">
                <Avatar
                    className="left_avatar"
                    alt="rav"
                    src="singh"
                />

            </div>
            <div className="header_searchbox">
                <SearchIcon />
            <input placeholder="search" />

            </div>
            <div className="right">
                <ContactSupportOutlinedIcon />
            </div>

        </div>
    )
}

export default Header