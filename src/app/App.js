import React, { Component } from 'react';
import '../css/App.css';
import {Route,Switch} from "react-router-dom"
import Home from "./Home";
import Login from "./Login";
import RegisterPage from "./RegisterPage";
import NavBar from "./NavBar";
import {getAuth} from "../service/localStorage";
class App extends Component {
    state = {
        auth: false
    };

    componentDidMount() {
        const auth = getAuth();
        this.setState({
            auth: auth
        });
    }


    render() {
        const {auth}=this.state;

        return (
            <div>
                <NavBar onAuth={this._onChangeAuth.bind(this)} auth={auth}/>

                <Switch>
                    <Route exact path="/" component={() => <Home auth={auth} />}/>
                    <Route exact path="/login" component={ () => <Login onAuth={this._onChangeAuth.bind(this)} auth={auth}/>}/>
                    <Route exact path="/Register" component={ () => <RegisterPage auth={auth}/>}/>
                </Switch>

            </div>
        );

    }

    _onChangeAuth(auth){
        this.setState({
            auth: auth
        });
    }


}
export default App;
