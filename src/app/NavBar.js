import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../css/NavBar.css'
import {setToken} from "../service/localStorage";
class NavBar extends Component {
    render() {
        const {auth}=this.props;
        const login = !auth ?  <li ><Link to="/Login">Login</Link></li> : null;
        const Register = !auth ?<li ><Link to="/Register">Register</Link></li> : null;
        const logOut = auth ? <li ><a onClick={this._handleLogOut.bind(this)}>logOut</a></li> : null
        return (
            <div id="navBar">
                <ul>
                    <li id="home"><Link to="/">Home</Link></li>
                    {login}
                    {Register}
                    {logOut}
                </ul>
            </div>
        );
    }
    _handleLogOut(){
        this.props.onAuth(false);
        setToken('');
    }
}


export default NavBar;
