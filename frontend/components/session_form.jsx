import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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
            <div className="login-form">
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
                <input type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
};

export default SessionForm;
