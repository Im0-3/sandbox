import * as React from 'react';
import Form from './Form';
import Display from './Display';

class App extends React.Component {
    render(){
        return (
            <div>
                <Form />
                <Display />
            </div>
        );
    }
}

export default App;