import * as React from 'react';
import dispatcher from '../dispatcher/AppDispatcher';

/**
 * Action
 */
class MessageAction {
    /**
     * Dispatcherにデータを渡す
     * @param data
     */
    sendData(data){
        dispatcher.dispatch({
            actionType: 'sendData',
            data: data
        });
    }
}

export default MessageAction;