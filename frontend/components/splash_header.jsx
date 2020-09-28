import { Link } from 'react-router-dom';
import React from 'react';


class SplashPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            submitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(() => {
            return this.props.history.push('/signup');
        });
    }
    render() {
        return (
            <div className="splash-div">
                <div> 
                <h1 className="splash-hq">
                    6lack is where work happens
                </h1>
                <div className="team">
                    With channels in 6lack, you and your team know where to go to ask questions, share updates and stay in the loop.
                </div>
                <form className="splash-form" onSubmit={this.handleSubmit}>
                    <input type="submit" className="splash-started" value="TRY FOR FREE" />
                </form>
                </div>
                <img src="https://a.slack-edge.com/5f6f2/marketing/img/homepage/hp-prospect/slack-integrations.png" className="splash-picture2" />
                <div className="header-div-2">
                    <h2 className="better-way">A better way to communicate</h2>
                <p className="unlike-text">
                        Unlike email, conversations in Slack are easy to follow. And they’re more than conversations — you can make calls, share files, and even connect with other apps.
              </p>
                    <form className="splash-form" onSubmit={this.handleSubmit}>
                        <input type="submit" className="splash-started2" value="SEE ALL FEATURES" />
                    </form>
                </div>
                <div className="header-div-3">
                    <h2 className="better-way-2">Over 750,000 companies use Slack to get work done</h2>
                    <p className="unlike-text-2">
                        “I help to bring product from the wild to the kitchen, and all across the dining room,” Koseba explains. “[With Slack] there’s no wasted time or wasted product because you’re able to communicate things right away.”
                        Katina Connaughton
                        Head Farmer, SingleThread
                    </p>
                </div>
                <img src="https://a.slack-edge.com/ce67d/marketing/img/stories/singlethread/customer-story.png" className="splash-picture3"/>
                
                
            </div>
            

            
        );
    }
}

export default SplashPage;