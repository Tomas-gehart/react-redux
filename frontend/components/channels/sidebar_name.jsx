import React from 'react';
import {useHistory} from "react-router-dom";

function SidebarName({ Icon, title, id, addChannelOption}){
    const history = useHistory();

    const selectChannel = () => {
        if (id) {
            history.push()
                
            } else {
                history.push()

        }
    };

    const addChannel = () => {
        const channelName= prompt('search channel by name or description');
        if (channelName) {

        } else {

        }


    };
    return(
        <div className="sidebar_name" onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className="sidebar_name_icon"/>}
            {Icon ? (
                 <h3>{title}</h3>
             ) : (
             <h3 className="sidebarname_channels">
                <span className="sidebarname_hash">#{title}</span>
            </h3>)}

        </div>
    )
}

export default SidebarName;