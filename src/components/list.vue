<template>
    <div class="todolist">
        <ul>
            <li v-for="(todoItem, index) in todoItems" :key="todoItem">
                <i class="fas fa-check chkico"></i>
                <span>{{todoItem}}</span>
                <button @click="removeTodo(todoItem, index)"><i class="fas fa-minus-circle delico"></i></button>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {
            todoItems: []
        }
    },
    created() {
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                this.todoItems.push(localStorage.key(i));
            }
        }
    },
    methods: {
        removeTodo(todoItem, idx) {
            localStorage.removeItem(todoItem);
            this.todoItems.splice(idx, 1);
        }
    }
};
</script>

<style scoped>

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
