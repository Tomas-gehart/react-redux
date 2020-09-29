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
                    <img src="https://mail.google.com/mail/u/0?ui=2&ik=2250439bd6&attid=0.1.1&permmsgid=msg-f:1679099208136606078&th=174d5bd5639f417e&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8eM9XY0yoRVkhKOHwL6HGM9wzdK2FuwpQmcpucnKnIeiWHF-DmtzAbwHozBPFgOonWndozXBPM6LAneTPagkBd4OLiorscCz0iQZ-Vziv5adRC7zAPOvuFp8U&disp=emb" className="splash-picture" />
                    <br/>
                    <br/>
                    <div className="inner-form-container">
                        <p className="sign-in-work">Sign In Your Workspace</p>
                        <br/>
                        <p className="session-form-desc">Enter your workspace’s 6lack URL.</p>
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
                                     <label>
                                        <input type="submit"
                                            value={this.props.formType}
                                            className="login-form" /> 

                                     </label>

                                </div>
                            </form>
                        </div>
                    </div>
                    <br />
                    <button class="continue-button" data-qa="submit_team_domain_button" type="submit">  Continue</button>

                </div>
            </div>
        );
    }
};

export default SessionForm;
