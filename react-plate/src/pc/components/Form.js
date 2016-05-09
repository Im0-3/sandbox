import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
    }
    onClickButton(e){
        e.preventDefault();
        let value = ReactDOM.findDOMNode(this.refs.input).value;
        console.log(value);
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