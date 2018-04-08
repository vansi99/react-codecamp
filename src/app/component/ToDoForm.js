import React, {Component} from 'react';

class ToDoForm extends Component {
    state={
        text: ''
    };



    render() {
            const {text}=this.state;
            return (
            <div>
                <form action="#" method="post" name="To Do">
                    <input type="text"
                           onChange={this.handleOnChange.bind(this)}
                           value={text}
                           placeholder="Title..." id="nhap"/><button type="button" onClick={this.handleOnClick.bind(this)} id="ADD">ADD</button>
                </form>
            </div>
        );
    }
    handleOnChange(e){
        const {value}=e.target;
        this.setState({
            text: value
        });
    }
    handleOnClick(){
        const {text}=this.state;
        this.props.onCreate(text);
        this.empty();
}
    empty(){
        this.setState({
            text: ''
        });
    }
}
export default ToDoForm;
