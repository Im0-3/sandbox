import * as React from 'react';
import * as ReactDOM from 'react-dom';
import dispatcher from '../dispatcher/AppDispatcher';
import TodoAction from '../actions/TodoAction';


/**
 * Form
 */
class Form extends React.Component {
    constructor(props){
        super(props);
        this.action = new TodoAction(dispatcher);
        this.onClickButton = this.onClickButton.bind(this);
    }
    onClickButton(e){
        e.preventDefault();
        let value = ReactDOM.findDOMNode(this.refs.input).value;
        //ボタンがクリックされたらアクションを実行
        this.action.add(value);
        //追加したらいフォーム内の文字削除
        ReactDOM.findDOMNode(this.refs.input).value = '';
    }
    render(){
        return (
            <form id="form">
                <input type="text" ref="input" />
                <button type="submit" ref="button" onClick={this.onClickButton}>Add</button>
            </form>
        );
    }
}

export default Form;