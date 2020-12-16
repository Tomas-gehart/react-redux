# Introduction - At a glance
## 6lack is a channels-based messaging platform (6lack, a slack clone).

## It is centered around channelss created by you, friends or co-workers so the app can keep track of what is going on within your team throughout the day - sharing ideas and plans made easy !

[Live Link](https://aa-6lack.herokuapp.com/#/)

## Features

A user can join a channels.


A user can create a channels and add members (friends).


Messages are shared within real time.

## Code Highlights
Implemented Session Log In / Sign Up - 
```Javascript
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
            return this.props.history.push('/channelss');
        });
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }
```

## Technologies 
* SQL
* Rails
* React / Redux
* CSS / HTML
