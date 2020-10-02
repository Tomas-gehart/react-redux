import React from 'react';
import ErrorList from './errors';

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

    componentWillUnmount() {
        this.props.clearErrors();
    }
    
    render() {
        return (
            <div className="background">
                <div className="form-container">
                    <h2 className="session-form-header"></h2>
                    <img src={window.logo} className="splash-picture-1" />
                    <br/>
                    <br/>
                    <div className="inner-form-container">
                        <p className="sign-in-work">Sign In Your Workspace</p>
                        <br/>
                        <p className="session-form-desc">Enter your workspace’s 6lack credentials.</p>
                    <div className="session-container">

                            <form onSubmit={this.handleSubmit} className="login-form">
                                <ErrorList errors={this.props.errors} />
                    
                            {this.props.formType} 
                                <div className="login-form">
                                    <label className="email">Email:
                                    <input type="text"
                                            value={this.state.email}
                                            onChange={this.update('email')}
                                            className="login-form-1"
                                            placeholder=" sixlack@interscope.com"/>

                                    </label>

                                    <label className="password">Password:
                                    <input type="password"
                                            value={this.state.password}
                                            onChange={this.update('password')}
                                            className="login-form-2"
                                            placeholder="   prettylittlefears"/>
                                    </label>
                                    
                                     <label className="continue">
                                        <input type="submit"
                                            value={this.props.formType}
                                            className="continue-button" /> 

                                     </label>

                                </div>
                            </form>
                        </div>
                    </div>
                    <br />


                </div>
            </div>
        );
    }
};

export default SessionForm;
