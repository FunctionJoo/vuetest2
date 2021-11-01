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
            let val = {
                chk: true,
                txt: todoItem
            }
            Vue.set(state.todoItems, key, val);
            val = JSON.stringify(val);
            localStorage.setItem(key, val);
        },
        removeTodo(state, id){
            localStorage.removeItem(id);
            Vue.delete(state.todoItems, id);
        },
        dataChk(state, propsdata) {
            let val = {
                chk: !propsdata.datas.chk,
                txt: propsdata.datas.txt
            }
            Vue.set(state.todoItems, propsdata.id, val);
            val = JSON.stringify(val);
            localStorage.setItem(propsdata.id, val);
            // 이상하게 감지가 안되서 버그 이용
            Vue.set(state.todoItems, '', '');
            Vue.delete(state.todoItems, '');
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
                        state.todoItems[id] = JSON.parse(localStorage.getItem(id));
                    }
                }
            };
        }
    },
    getters: {
        loadList: (state) => () => {
            console.log('getter');
            return state.todoItems
        }
    },
    actions: {
        
    }
});