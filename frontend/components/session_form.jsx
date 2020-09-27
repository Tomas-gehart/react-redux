import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(() => {
            return this.props.history.push('/');
        });
    }
    render() {
        return (
            <div className="background">
                <div className="form-container">
                    <h2 className="session-form-header"></h2>
                    <img src="https://a.slack-edge.com/4a5c4/marketing/img/icons/icon_slack.svg" className="splash-picture" />
                    <div className="inner-form-container">
                        <p className="sign-in-work">Sign In Your Workspace</p>
                        <p className="session-form-desc">Enter your workspace’s Slack URL.</p>
                    <div className="session-container">
                            <form onSubmit={this.handleSubmit} className="login-form">
                    
                            {this.props.formType} 
                                <div className="login-form">
                                    <label>Email:
                                    <input type="text"
                                            value={this.state.email}
                                            onChange={this.update('email')}
                                            className="login-form"/>
                                    </label>
                                    <label>Password:
                                    <input type="password"
                                            value={this.state.password}
                                            onChange={this.update('password')}
                                            className="login-form"/>
                                    </label>
                                    <label>Username:
                                    <input type="text"
                                            value={this.state.username}
                                            onChange={this.update('username')}
                                            className="login-form" />
                                     </label>
                                    <input type="submit" value={this.props.formType} />
                                </div>
                            </form>
                            <div className="login-continue"></div>
                            <p className="session-form-continue">Continue</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default SessionForm;
