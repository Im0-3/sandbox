import * as React from 'react';
import * as ReactDOM from 'react-dom';

/**
 * Hello
 */
class Hello extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message: null
        };
        this.onClickButton = this.onClickbutton.bind(this);
    }
    onClickButton() {
        let value = ReactDOM.findDOMNode(this.refs.button).value;
        this.setState({message: value});
    }
    render(){
        return (
            <div>
                <form id="form">
                    <input type="text" />
                    <button ref="button" onClick={this.onClickButton}>submit</button>
                </form>
                <div>Hello World! { this.state.message }</div>
            </div>
        );
    }
}

let hello = ReactDOM.render(<Hello />, document.getElementById('hello'));

