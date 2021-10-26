<template>
    <footer>
        <button v-on:click="deleteAll" class="del_all">전부삭제</button>
    </footer>
</template>

<script>

export default {
    methods: {
        deleteAll() {
            this.$emit('clearAll');
        }
    }
};
</script>

<style scoped>
footer {
    margin: 20px 20px 0;
}

.del_all {
    display: block;
    border-radius: 3px;
    background: #f55;
    margin: 8px auto 0;
    border: 0 none;
    outline: 0 none;
    letter-spacing: -0.02em;
    font-size: 18px;
    padding: 7px 25px;
    color: #fff;
    font-weight: 700;
}
</style>
