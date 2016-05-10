import * as React from 'react';
import Form from './Form';
import Display from './Display';
import Store from '../stores/TodoStore';
import FormArea from './FormArea';
import ListArea from './ListArea';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todoList: []
        };
        this.store = new Store();
    }
    //コンポーネントがDOMツリーに追加されたら実行される
    componentDidMount() {
        this.store.addChangeListener(() => {
            this.setState({
                todoList: this.store.getTodoList()
            });
        });
    }
    render(){
        return (
            <div>
                <FormArea />
                <ListArea todoList={this.state.todoList}/>
            </div>
        );
    }
}

export default App;