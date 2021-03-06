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
    //コンポーネントがDOMツリーに追加されたら実行される
    componentDidMount() {
        this.store.addChangeListener(() => {
            //stateの値を変更
            this.setState(this.store.getState());
        });
    }
    render(){
        return (
            <div>
                <Form />
                <Display message={this.state.message} />
            </div>
        );
    }
}

export default App;