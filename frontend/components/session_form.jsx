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
                    <img src="https://gm1.ggpht.com/cIrYQLo5XTnaOOpoRuNCR_y84vAH3YJelKKeqKa4n4mJowglA6v2QmCvVbUuFXRgwBAJhcwZ5Of6ieVN_-cUVDZmAwOVJz9t0diYDxzNBU-bID0VtOidMPW012bGDW5E9i5rHNNM5UuEHhrFm4bzmg9FqFhBACPZs5uMxeQhAx6gfOpbyeXzwqKcktPevQT6k-yAnEeESSbECdBNawY25-QhJgpt8FR8b7m7KhIWsxbKzJv1B5awgqaOgbnHn9yMl8B9xNCRPv6ZXDVXoL873BC67Czh3SbqDs5WbhVTZiHE-4S2_EgR_WCiZYsP__lHJWLV1qv9BG7kGGcik7l2y6tVlbrc3IMVTqv45YSoG7M2jOvRVYKA-JGZ9IjBmDurVsWeiOpljheKeNYRJGXrks46w3G-Hb0HAOXp90vhIeDGdz9R_UJTfxHaw3Hq3h7XmvZsa7hrwqwGe72bs0y2x6iXurunrwpykYxw-Y7lRWFkBbNNez9XYA_dNUfPFrZtZwRiQFKS86jZiw7AJQwd25xRJNCVmSrKEtW0LHEHTu9Rho3ryeXf_U5G2dB3c1aR_u4PuQBUeeX--Hn5PKVmzLT3KD8jD1YuRCcyqcC7a8P0Xbnhr8yl7PiLQYD3SGf0wPkiwszsRUV3IyEdkqAI-jDN-hYHHpT1scibuODCax_sqhYdiF2Ot15JlkcF20RkE3EdvpbhTvCeE0A-xGffhigDG-ROU2uMoaW1fRjWdksv2VrDtDAj54UIrrJEbX8A3A=s0-l75-ft-l75-ft" className="splash-picture" />
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
                                    <input type="submit" value={this.props.formType} />
                                </div>
                            </form>
                        </div>
                    </div>
                    <br />
                    <button class="continue-button" data-qa="submit_team_domain_button" type="submit">  Continue</button>
                    <br/>
                    <p class="p-signin_form__caption">Don’t know your workspace URL?  
                        <a target="_self" class="b-link" data-qa="find_your_workspace" href="/" rel="noopener noreferrer">
                            <strong> Find your workspaces</strong>
                        </a>
                    </p>
                    <p class="p-signin_form">Looking to create a workspace instead? 
                        <a target="_self" class="c-link" data-qa="create_workspace_link" href="/" rel="noopener noreferrer">
                            <strong> Create a new workspace</strong>
                        </a>
                    </p>
                </div>
            </div>
        );
    }
};

export default SessionForm;
