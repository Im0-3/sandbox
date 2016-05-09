import dispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'eventemitter2';

/**
 * Store
 */
class MessageStore extends EventEmitter {
    constructor(){
        super();
        this.state = {};
        /**
         * dispatcherにデータが渡ったら
         * stateが更新される
         */
        dispatcher.register((payload) => {
            if (payload.actionType === 'sendData') {
                this.state.data = payload.data;
                /**
                 * Emitterのチェンジイベントが発行される
                 */
                this.emit('change');
            }
        });
    }
    getState(){
        return this.state;
    }
    //storeのチェンジイベントが実行されたらcallbackを実行
    addChangeListener(callback){
        this.on('change', callback);
    }
}

export default MessageStore;