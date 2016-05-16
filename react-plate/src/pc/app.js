import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import App from './components/App';


class Form extends React.Component {
    constructor(){
        this.state = {
            name: 'LIG'
        };
    }
    render(){
        return (
            <div>
                Hello { this.state.name }!
            </div>
        )
    }
}

class App extends React.Component {
    constructor(){
        this.state = {
            name: 'LIG'
        };
    }
    render(){
        return (
            <div>
                Hello { this.state.name }!
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
