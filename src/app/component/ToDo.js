import React, {Component} from 'react';


class ToDo extends Component {
    render() {

        const {title , completed}=this.props.data;

        return (
            <li className={completed ? "completed" :""}  ><div onClick={this._toggle.bind(this)} >{title}</div><span className="close" onClick={this._handle.bind(this)}>X</span></li>
        );
    }
    _handle(){
        const {data}=this.props;
        this.props.onRemove(data._id);
    }
    _toggle(){

        const {data}=this.props;
        this.props.onToggle(data._id);

    }

}


export default ToDo;
