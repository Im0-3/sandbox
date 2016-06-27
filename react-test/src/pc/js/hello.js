

import * as React from 'react';
import * as ReactDOM from 'react-dom';



class Form extends React.Component {
    render(){
        return (
            <form action="">
                <input type="text"/>
                <button>submit</button>
            </form>
        );
    }
}

class Container extends React.Component {
    render(){
        return (
            <div>
                Container
            </div>
        );
    }
}

class App extends React.Component {
    render(){
        return (
            <div>
                <Form />
                <Container />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));