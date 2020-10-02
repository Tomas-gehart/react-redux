import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';



function Header() {
    return (
        <div className="channel-header">
            <div className="left">
                <div classname="rav">
                    <img src="https://ca.slack-edge.com/T03GU501J-U012L4FKPAA-5ad6782370b5-48"className="lol" />
                    
                </div>
               
            </div>
            <div className="header_searchbox">
                <SearchIcon />
            <input placeholder="browse channels" />

            </div>
            <div className="right">
                <ContactSupportOutlinedIcon />
            </div>

        </div>
    )
}

export default Header