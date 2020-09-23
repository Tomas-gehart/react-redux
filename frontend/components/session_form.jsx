import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    {this.props.formType} 
                <div className="login-form">
                <label>Email:
                    <input type="text"
                    value={this.state.email}
                    OnChange={this.update('email')}
                    className="login-input"/>
                 </label>
                <label>Password:
                    <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"/>
                </label>
                    <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
};

export default SessionForm;
