<template>
    <div class="todolist">
        <transition-group name="list" tag="ul" class="clear">
            <li v-for="(txt, id) in todolists" :key="id">
                <div class="space"></div>
                <i class="fas fa-check chkico"></i>
                <span>{{txt}}</span>
                <button @click="removeTodo(id)"><i class="fas fa-minus-circle delico"></i></button>
            </li>
        </transition-group>
    </div>
</template>

<script>

export default {
    beforeCreate() {
        this.$store.commit('loadlistInit');
    },
    computed: {
        todolists() {
            return this.$store.getters.loadList
        },
    },
    methods: {
        removeTodo(id) {
            this.$store.commit('removeTodo', id)
        }
    }
};
</script>

<style scoped>

/* 자체 딜레이 때문에 다중 클릭시 오류 발생이 잦음 */
/* 키 값을 바꿔서 해결해버렸다 */
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

@media (min-width: 600px) {
    .todolist {
        width: 1024px;
        margin: 10px auto 0;
        padding: 0 0 0 0;
    }
    .todolist li {
        float: left;
        width: calc(33.33% - 7px);
        position: relative;
        margin: 0 0 10px 10px;
        box-sizing: border-box;
    }
    .todolist li:nth-of-type(3n + 1) {
        margin-left: 0;
    }
    .todolist li .space {
        padding-top: 100%;
    }
    .todolist li .chkico {
        position: absolute;
        top: 15px;
        left: 15px;
        font-size: 26px;
    }
    .todolist li span {
        position: absolute;
        top: 50px;
        left: 0;
        padding: 0 15px;
        
    }
}

</style>
