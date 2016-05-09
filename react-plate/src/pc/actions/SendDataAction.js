import * as React from 'react';
import dispatcher from '../dispatcher/AppDispatcher';

/**
 * Action
 */
class SendDataAction {
    constructor(){
        this.dispatcher = dispatcher;
    }
    /**
     * Dispatcherにデータを渡す
     * @param data
     */
    sendData(data){
        this.dispatcher.dispatch({
            actionType: 'sendData',
            data: data
        });
    }
}

export default SendDataAction;