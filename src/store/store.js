import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// export 
export default new Vuex.Store({
    state: {
        appTitle: 'TODO It!',
        todoItems: {}
    },
    mutations: {
        addOneItem(state, todoItem){
            let key = new Date().getTime();
            localStorage.setItem(key, todoItem);
            Vue.set(state.todoItems, key, todoItem);
        },
        removeTodo(state, id){
            localStorage.removeItem(id);
            Vue.delete(state.todoItems, id);
        },
        clearAllItems(state){
            localStorage.clear();
            state.todoItems = {};
        },
        loadlistInit(state) {
            console.log('init');
            if (localStorage.length > 0) {
                for (let i = 0; i < localStorage.length; i++) {
                    let id = localStorage.key(i);
                    if ( id != 'loglevel:webpack-dev-server' ) {
                        state.todoItems[id] = localStorage.getItem(id);
                    }
                }
            };
        }
    },
    getters: {
        loadList: (state) => {
            console.log('getter');
            return state.todoItems
        }
    },
    actions: {
        
    }
});