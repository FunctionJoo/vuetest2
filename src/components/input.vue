<template>
    <div>
        <form v-on:submit="addTodo" class="sch_form">
            <input v-model="newTodoItem" type="text" class="ipt">
            <button class="btn"><i class="fas fa-plus btnico"></i></button>
        </form>
        <modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">경고</h3>
            <span slot="body">텍스트 내용을 입력하세요</span>
            <button slot="footer" @click="showModal = false" class="modal-default-button">
                확인
            </button>
        </modal>
    </div>
</template>

<script>
import Modal from './modal.vue';

export default {
    data: function(){
        return {
            newTodoItem: '',
            showModal: false
        }
    },
    methods: {
        addTodo: function(e) {
            e.preventDefault();
            if (this.newTodoItem !== '') {
                let value = this.newTodoItem && this.newTodoItem.trim();
                this.$emit('addTodo', value);
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
                document.querySelector('.ipt').blur();
                return;
            }
        },
        clearInput: function() {
            this.newTodoItem = '';
        }
    },
    components: {
        Modal: Modal
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
