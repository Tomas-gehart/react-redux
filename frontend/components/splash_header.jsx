import { Link } from 'react-router-dom';
import React from 'react';
import NavBar from './splash_body'
import Footer from './splash_footer';



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
                <h1 className="splash-hq">
                    Welcome to your new HQ
                </h1>
                <div className="team">
                    Teamwork can be hard, messy, complicated… and still the best way to work. That’s why we made 6lack — a place where people get work done, together.
                </div>
                <form className="splash-form" onSubmit={this.handleSubmit}>
                    <input type="submit" className="splash-started" value="TRY FOR FREE" />
                    <p className="splash-login"><Link to="/signup" className="splash-link">Log in.</Link></p>
                </form>
                <div className="greeting">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default SplashPage;