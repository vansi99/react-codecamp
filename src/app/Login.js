import React, {Component} from 'react';
import '../css/logAndRegis.css'
import {Redirect} from "react-router-dom";
import {login} from "../service/APIService";
import {setToken} from "../service/localStorage";

class Login extends Component {

    state = {
        email: '',
        password: ''

    };
    render() {
        const {auth}=this.props;

        if(auth){
            return <Redirect to="/"/>
        }

        const {email,password}=this.state;

        return (
            <div id="logAndRegis">

                <h1>Login</h1>
                <form onSubmit={this._handleOnSubmit.bind(this)}>
                    <p>Email:</p> <br/>

                    <input  type="text" onChange={this._handleChangeInput.bind(this, 'email')} value={email} name="Email"/>

                    <p>Password:</p> <br/>

                    <input type="password" onChange={this._handleChangeInput.bind(this, 'password')} value={password}  name="password"/><br/>

                    <button>Log In</button>
                </form>
            </div>
        );
    }

    _handleChangeInput(field, e){
        const {value}=e.target;

        this.setState({
            [field]: value
        });
    }

    _handleOnSubmit(e){
        e.preventDefault();

        const {email,password} =this.state;

        login({email,password})
            .then(response =>{
                const {success,data} = response;

                const {accessToken} = data;
                console.log(accessToken);
                if(success){
                    setToken(accessToken);
                    this.props.onAuth(true);
                }
            })
    }

}


export default Login;



