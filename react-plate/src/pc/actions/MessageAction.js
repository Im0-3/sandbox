import * as React from 'react';
import dispatcher from '../dispatcher/AppDispatcher';

/**
 * Action
 */
class MessageAction {
    /**
     * Dispatcherにデータを渡す
     * @param value
     */
    sendMessage(value){
        dispatcher.dispatch({
            actionType: 'sendMessage',
            message: value
        });
    }
}

export default MessageAction;