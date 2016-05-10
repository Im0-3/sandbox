import * as React from 'react';
import dispatcher from '../dispatcher/AppDispatcher';

/**
 * Action
 */
class TodoAction {
    /**
     * Dispatcherにデータを渡す
     * @param value
     */
    add(value){
        dispatcher.dispatch({
            actionType: 'TodoAdd',
            item: {
                createAt: new Date().getTime(),
                title: value,
                isDone: false
            }
        });
    }
    changeState(item){
        dispatcher.dispatch({
            actionType: 'TodoStateChange',
            item: item
        });
    }
}

export default TodoAction;