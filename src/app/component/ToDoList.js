import React, {Component} from 'react';
import ToDo from "./ToDo";

class ToDoList extends Component {

    render() {
        const {todos} = this.props;
        return (
            <div>
                <ul id='list'>
                    {
                        todos.map((data, index) => {
                        return (
                        <ToDo onRemove={this._handleOnRemove.bind(this)} onToggle={this._handleOnToggle.bind(this)} data={data} id={index} key={index}  />
                        );
                    })
                    }
                </ul>
            </div>
        );
    }
    _handleOnRemove(id){
        this.props.onHandleDelete(id);
    }
    _handleOnToggle(id){
        this.props.onHandleToggle(id);
    }
}



export default ToDoList;
