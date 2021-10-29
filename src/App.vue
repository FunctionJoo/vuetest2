<template>
  <div id="app">
    <header-comp></header-comp>
    <input-comp></input-comp>
    <list-comp></list-comp>
    <footer-comp></footer-comp>
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
    }
  }
</script>

<style>

</style>
