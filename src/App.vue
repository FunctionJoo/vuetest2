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
        todoItems: []
      };
    },
    created() {
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if ( localStorage.key(i) != 'loglevel:webpack-dev-server' ) {
                  this.todoItems.push(localStorage.key(i));
                }
            }
        }
    },
    methods: {
      addOneItem: function(todoItem){
        localStorage.setItem(todoItem, todoItem);
        this.todoItems.push(todoItem);
      },
      removeOneItem: function(todoItem, idx){
        localStorage.removeItem(todoItem);
        this.todoItems.splice(idx, 1);
      },
      clearAllItems: function(){
        localStorage.clear();
        this.todoItems = [];
      },
    }
  }
</script>

<style>

</style>
