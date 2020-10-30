import { Link } from 'react-router-dom';
import React from 'react';
import Navbar from './splash_body';
import SplashFooter from './splash_footer';


class SplashPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            submitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(() => {
            return this.props.history.push('/signup');
        });
    }
    
    handleClick() { 
        this.props.processForm({ username: 'ricardo', email: 'sixlack@interscope.com', password: 'prettylittlefears' }).then(()=>{
            return this.props.history.push('/channels');

        });
    }
    
    render() {
        return (
            <div>
                <Navbar/>
                <div className="ultra-div">
                    <div className="splash-div">
                        <div>
                            <div className="firstcol">
                                <div>
                                    <h1 className="splash-hq">
                                        6lack is where collaborations happens
                            </h1>

                                    <div className="team">
                                        With channels in 6lack, you and your team know where to go to ask questions, share updates and stay in the loop on your music.
                            </div>
                                    <br />
                                    <form className="splash-form" onSubmit={this.handleSubmit}>
                                        <input type="submit" className="splash-started" value="Try For Free" />
                                    </form>
                                    <br />
                                </div>




                                <video className="video"
                                    autoPlay
                                    loop
                                    src="https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/hero/desktop/mp4/hero-image.mp4"
                                    type="video/mp4"
                                    id="animation1"
                                    muted
                                />


                            </div>


                        </div>
                        <div className="header-div-2">
                            <div>
                                <video className="animation-1"
                                    autoPlay
                                    loop
                                    src="https://a.slack-edge.com/5f6f2/marketing/img/homepage/hp-prospect/channels/bring-your-team-together-in-channels.mp4"
                                    type="video/mp4"
                                    id="animation2"
                                    muted
                                />
                            </div>

                            <div>
                                <div className="seccol">
                                    <h2 className="better-way">
                                        A better way to share your art
                                </h2>
                                    <p className="unlike-text">
                                        Unlike email, conversations in 6lack are easy to follow. And they’re more than conversations — you can make calls, share music files, and even connect with other musicians on apps.
                                </p>
                                    <form className="splash-form" src={"./channels"} onClick={() => this.handleClick()}>
                                        <input type="submit" className="splash-started" value="Demo" />
                                    </form>





                                </div>

                            </div>









                        </div>


                        <div className="header-div-3">
                            <h2 className="better-way-2">
                                Over 750,000 artists use 6lack to get collaborations done
                    </h2>
                            <div>
                                <div className="thirdcol">
                                    <p className="unlike-text-2">
                                        “I help share my sound from the studio to others in my neighborhood, and all around the world” Valentine explains. “[With 6lack] there’s no wasted time or wasted music because you’re able to communicate things right away.”
                                        Ricardo Valdez Valentine
                                        Artist, East Atlanta.
                            </p>
                                    <div className="youtube">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/iSgUMPHQEWw" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>

                                </div>

                            </div>
                            



                        </div>


                    </div>

                </div>
                <SplashFooter/>


            </div>

            
         );
    }
}

export default SplashPage;