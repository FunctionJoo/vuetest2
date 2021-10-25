<template>
    <form class="sch_form">
        <input v-model="newTodoItem" type="text" class="ipt">
        <button v-on:click="addTodo" class="btn"><i class="fas fa-plus btnico"></i></button>
    </form>
</template>

<script>

export default {
    data: function(){
        return {
            newTodoItem: ''
        }
    },
    methods: {
        addTodo: function(e) {
            e.preventDefault;
            if (this.newTodoItem !== '') {
                let value = this.newTodoItem && this.newTodoItem.trim();
                localStorage.setItem(this.newTodoItem, this.newTodoItem);
                this.clearInput();
            }
        },
        clearInput: function() {
            this.newTodoItem = '';
        }
    }
};
</script>

<style scoped>
    .sch_form {
        position: relative;
        display: block;
        text-align: center;
        margin: 20px 20px 0;
    }
    .ipt {
        border: 2px solid #ddd;
        border-radius: 4px;
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        outline: none;
        transition: border 0.3s;
        text-align: center;
        font-size: 20px;
    }
    .ipt:focus {
        border-color: #ff893f;
    }
    .btn {
        position: absolute;
        top:0;right:0;
        border: 0 none;
        background: none;
        width: 50px;height: 50px;
        padding: 0 0 0 0;
        text-align: center;
        line-height: 50px;
        cursor:pointer;
    }
    .btnico {
        display:inline-block;
        vertical-align: middle;
        font-size: 27px;
        transition: color 0.3s;
        color: #bbb;
    }
    .ipt:focus+.btn .btnico {
        color: #ff893f;
    }
</style>
