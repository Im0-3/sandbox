import * as React from 'react';
import * as ReactDOM from 'react-dom';
import dispatcher from '../dispatcher/AppDispatcher';
import MessageAction from '../actions/MessageAction';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.action = new MessageAction(dispatcher);
        this.onClickButton = this.onClickButton.bind(this);
    }
    onClickButton(e){
        e.preventDefault();
        let value = ReactDOM.findDOMNode(this.refs.input).value;
        this.action.sendData(value);
    }
    render(){
        return (
            <form id="form">
                <input type="text" ref="input" />
                <button type="submit" ref="button" onClick={this.onClickButton}>button</button>
            </form>
        );
    }
}

export default Form;