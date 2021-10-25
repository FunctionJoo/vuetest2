<template>
  <div id="app">
    <header-comp></header-comp>
    <input-comp v-on:addItem="addOneItem"></input-comp>
    <list-comp
      v-bind:propsdata="todoItems"
      v-on:removeItem="removeOneItem"
      v-on:toggleItem="toggleOneItem"
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
  import Modal from './components/modal.vue';
  import Ftest from './components/test.vue';

  export default {
    components: {
      'header-comp': Header,
      'input-comp': Input,
      'list-comp': List,
      'footer-comp': Footer,
      'modal': Modal,
      'formtest': Ftest
    },
    data: function() {
      return {
        todoItems: ''
      };
    },
    methods: {
      addOneItem: function(){},
      removeOneItem: function(){},
      toggleOneItem: function(){},
      clearAllItems: function(){},
    }
  }
</script>

<style>

</style>
