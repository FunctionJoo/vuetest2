<template>
    <div class="todolist">
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, index) in propsdata" :key="todoItem">
                <i class="fas fa-check chkico"></i>
                <span>{{todoItem}}</span>
                <button @click="removeTodo(todoItem, index)"><i class="fas fa-minus-circle delico"></i></button>
            </li>
        </transition-group>
    </div>
</template>

<script>

export default {
    props: ['propsdata'],
    methods: {
        removeTodo(todoItem, idx) {
            this.$emit('removeTodo', todoItem, idx);
        }
    }
};
</script>

<style scoped>

.list-enter-active, .list-leave-active {
    transition: all 0.5s;
}
.list-enter, .list-leave-to {
    opacity: 0;
    transition: translateY(30px);
}

.todolist {
    padding: 5px 20px 0;
    text-align: left;
}
.todolist li {
    font-size: 0;
    padding: 10px 8px;
    border-radius: 3px;
    background: #fff;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.2);
    margin-top: 8px;

}
.todolist li .chkico {
    display: inline-block;
    vertical-align: middle;
    color: #ff893f;
    margin-right: 5px;
    font-size: 18px;
}
.todolist li span {
    display: inline-block;
    vertical-align: middle;
    width: calc(100% - 43px);
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 3px 10px 3px 0;
    box-sizing: border-box;
}
.todolist li button {
    display: inline-block;
    vertical-align: middle;
    border: 0 none;
    background: none;
    padding: 0 0 0 0;
    color: #f55;
    margin-left: auto;
    font-size: 20px;
}

</style>
