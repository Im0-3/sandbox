import * as React from 'react';
import Action from '../actions/TodoAction';
import Store from '../stores/TodoStore';

class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.action = new Action();
    }
    onClickHandler(e){
        e.preventDefault();
        this.action.changeState(this.props.todo);
    }
    render(){
        let { todo } = this.props;
        function isDone(){
            if(todo.isDone){
                return ' is-done';
            }
            return '';
        }
        return (
            <li className="list-item{isDone()}">
                <div>{todo.title}</div>
                <input type="checkbox" checked={todo.isDone} onClick={this.onClickHandler} />
            </li>
        );
    }
}

ListItem.propTypes = {
    todo: React.PropTypes.object
};

export default ListItem;