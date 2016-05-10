import * as React from 'react';
import ListItem from '../components/ListItem';

class ListArea extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        };
    }
    componentWillReceiveProps(nextProps){
        this.todos = [];
        for (let index in nextProps) {
            this.todos.push(<ListItem todo={nextProps[index]}/>);
        }
    }
    render(){
        let { todoList } = this.props;
        let todos = [];

        for (let index in todoList) {
            todos.push(<ListItem todo={todoList[index]}/>);
        }

        return (
            <div className="list-area">
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

ListArea.propTypes = {
    todoList: React.PropTypes.array
}

export default ListArea;