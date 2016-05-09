import * as React from 'react';
import * as ReactDOM from 'react-dom';

/**
 * Hello
 */
class Hello extends React.Component {
    render(){
        return (
            <div>Hello World!</div>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('hello'));