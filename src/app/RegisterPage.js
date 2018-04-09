import React, {Component} from 'react';
import '../css/logAndRegis.css'
import {Redirect} from 'react-router-dom'
import {registerAccount} from "../service/APIService";
class RegisterPage extends Component {
    state = {
    success: false,
        email: '',
        password: '',
        name: '',
    };
    render() {
        const {success}= this.state;

        if(success){
            return <Redirect to="/login"/>
        }
        const {email,password,name}=this.state;
        return (

            <div id="logAndRegis">
                <h1>Register</h1>
                <form onSubmit={this._handleSubmit.bind(this)}>
                    <p>Email:</p>
                    <br/>
                    <input  type="text" onChange={this._handleChange.bind(this, 'email')} value={email} name="email"/>
                    <br/>
                    <p>Password:</p>
                    <br/>
                    <input type="password" onChange={this._handleChange.bind(this, 'password')} value={password} name="password"/>
                    <br/>
                    <p>YourName:</p>
                    <br/>
                    <input type="text" onChange={this._handleChange.bind(this, 'name')} value={name} name="name"/>
                    <br/>
                    <button>Register</button>
                </form>
            </div>
        );
    }

    _handleChange(field, e){
        const {value}=e.target;
        this.setState({
            [field]: value
        });
    }

    _handleSubmit(e) {
        e.preventDefault();
        const {email,password,name}=this.state;

        registerAccount({email,password,name})
            .then(response => {
                this.setState({
                    success: true
                });
            });

    }

}


export default RegisterPage;
