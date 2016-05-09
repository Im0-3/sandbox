import * as React from 'react';
import Form from './Form';
import Display from './Display';
import Store from '../stores/MessageStore';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message: 'ココに結果が表示されます'
        };
        this.store = new Store();
    }
    componentDidMount() {
        this.store.addChangeListener(() => {
            this.setState(this.store.getState());
        });
    }
    render(){
        return (
            <div>
                <Form />
                <Display message={this.state.massage} />
            </div>
        );
    }
}

export default App;