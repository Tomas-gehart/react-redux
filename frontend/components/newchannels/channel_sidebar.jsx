import React from 'react';


//https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
class ChannelSidebar extends React.Component{
    constructor(props){
        super();

        this.state = {
            title: '',
            channel_type: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);

    };

    componentDidMount(){
        this.props.fetchUsers();
        this.props.fetchChannels();
    }

    handleInput(type) {
        return (event) => {
            this.setState({ [type]: event.target.value });
        };
    };

    handleSubmit(event) {
        event.preventDefault();
        const channel = Object.assign({}, this.state);
        this.props.createChannel(channel);
    };
    
    
    //https://medium.com/path2code/how-react-js-toggle-button-works-99c838ae2fe1#:~:text=Function%20to%20make%20Toggle%20Button%20works&text=It%20causes%20React%20to%20re,passing%20a%20function%20into%20this.
    toggleChannels() {
        const channelsUl = document.getElementById("channels-ul");

        if (channelsUl.style.display === "none") {
            channelsUl.style.display = "block";
        } else {
            channelsUl.style.display = "none";
        }

        const caret = document.getElementById("channels-caret");

        caret.classList.toggle("caret-toggled");

    };

    toggleDms() {
                const dmsUl = document.getElementById("dms-ul");

        if (dmsUl.style.display === "none") {
            dmsUl.style.display = "block";
        } else {
            dmsUl.style.display = "none";
        }

        const caret = document.getElementById("dms-caret");

        caret.classList.toggle("caret-toggled");
    };



    render(){

        
        
    }
};

export default ChannelSidebar;