import React, {Component} from 'react';
import ToDoHead from './component/ToDoHead.js';
import '../css/style.css';
import {Redirect} from "react-router-dom"
import ToDoList from "./component/ToDoList.js" ;
import ToDoForm from "./component/ToDoForm.js";
import {createTodo, deleteTodo, fetchTodos, toggle} from "../service/APIService";

class Home extends Component {
    state = {
        todos : []
    };

    componentDidMount() {
        const {auth} = this.props;

        if(!auth)
            return;

        this.fetchListTodos();
    }

    fetchListTodos(){
        fetchTodos().then(object => {
            const {data, success}=object;

            if(success){
                this.setState({
                    todos: data
                });
            }
        }).catch(error =>{
            console.log("error");
        })
        ;
    }

    render() {
        const {auth}= this.props;
        if(!auth){
            return <Redirect to="/login"/>
        }
        return (

                <div className="menu">
                    <div className="head">
                        <ToDoHead/>
                        <ToDoForm onCreate={this.handleOnCreate.bind(this)}/>
                    </div>

                    <ToDoList todos={this.state.todos} onHandleToggle={this.handleOnToggle.bind(this)} onHandleDelete={this.handleDeleteToggle.bind(this)}/>

                </div>
        );

    }
    handleOnToggle(id){
        toggle(id)
            .then(() => {
                this.fetchListTodos();

            })
    }

    handleDeleteToggle(id){
        deleteTodo(id)
            .then(() =>{
                this.fetchListTodos();

            });

    }

    handleOnCreate(text) {
        createTodo(text)
            .then(object =>{
                this.fetchListTodos();
            });

    }


}



export default Home;
