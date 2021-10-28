<template>
  <div id="app">
    <header-comp></header-comp>
    <input-comp v-on:addTodo="addOneItem"></input-comp>
    <list-comp
      v-bind:propsdata="todoItems"
      v-on:removeTodo="removeOneItem"
    ></list-comp>
    <footer-comp v-on:clearAll="clearAllItems"></footer-comp>
    <!-- <modal></modal> -->
    <!-- <formtest></formtest> -->
  </div>
</template>

<script>
  // comp
  import Header from './components/header.vue';
  import Input from './components/input.vue';
  import List from './components/list.vue';
  import Footer from './components/footer.vue';
  // Modal from './components/modal.vue';
  //import Ftest from './components/test.vue';

  export default {
    components: {
      'header-comp': Header,
      'input-comp': Input,
      'list-comp': List,
      'footer-comp': Footer,
      //'modal': Modal,
      //'formtest': Ftest
    },
    data: function() {
      return {
        todoItems: {}
      };
    },
    created() {
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                let id = localStorage.key(i);
                if ( id != 'loglevel:webpack-dev-server' ) {
                  this.todoItems[id] = localStorage.getItem(id);
                }
            }
        }
    },
    methods: {
      addOneItem: function(todoItem){
        let key = new Date().getTime();
        localStorage.setItem(key, todoItem);
        this.$set(this.todoItems, key, todoItem);
      },
      removeOneItem: function(id){
        localStorage.removeItem(id);
        this.$delete(this.todoItems, id);
      },
      clearAllItems: function(){
        localStorage.clear();
        this.todoItems = {};
      },
    }
  }
</script>

<style>

</style>
