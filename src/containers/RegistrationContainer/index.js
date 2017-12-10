import React, {Component} from 'react';

import RegistrationComponent from '../../components/RegistrationComponent';

import {userService} from '../../services/UserService';

class RegistrationContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: "",
            password: ""
        };
    }

    onChangeLogin = (event) => {
        this.setState({login: event.target.value});
    };

    onChangePassword = (event) => {
        this.setState({password: event.target.value});
    };

    onClickSignUp = () => {
        userService.create(this.state).then(() => {
            return userService.authentication(this.state);
        }).then((response) => {
            return response.text();
        }).then(token => {
            localStorage.setItem("token", token);
            this.props.history.push("/tree");
        });
    };

    render() {
        return <RegistrationComponent
            login={this.state.login}
            password={this.state.password}
            onChangeLogin={this.onChangeLogin}
            onChangePassword={this.onChangePassword}
            onClickSignUp={this.onClickSignUp}/>
    }

}

export default RegistrationContainer;