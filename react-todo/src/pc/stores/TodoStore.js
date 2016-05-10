import dispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'eventemitter2';

/**
 * Store
 */
class TodoStore extends EventEmitter {
    constructor(){
        super();
        this.todoList = [];
        /**
         * dispatcherにデータが渡ったら
         * stateが更新される
         */
        dispatcher.register((payload) => {
            switch(payload.actionType){
                case 'TodoAdd':
                    this.add(payload.item);
                    break;
                case 'TodoStateChange':
                    this.changeState(payload.item);
                    break;
            }
            this.emit('change');
        });
    }
    getTodoList(){
        return this.todoList;
    }
    add(item){
        this.todoList.push(item);
    }
    changeState(item){
        console.log(this.todoList);
        for(let key in this.todoList){
            if(this.todoList[key].createAt === item.createAt){
                this.todoList[key].isDone = !this.todoList[key].isDone;
            }
        }
        console.log(this.todoList);
    }
    //storeのチェンジイベントが実行されたらcallbackを実行
    addChangeListener(callback){
        this.on('change', callback);
    }
}

export default TodoStore;