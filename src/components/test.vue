<template>
    <form id="app2" class="nnn" v-on:submit="submitForm">
        <div>
            <label for="username">id: <i class="fab fa-facebook-square cls001"></i></label>
            <input type="text" id="username" name="username" v-model="username">
        </div>
        <div>
            <label for="password">password: </label>
            <input type="password" id="password" name="password" v-model="password">
        </div>
        <div>
            <button type="submit">submit</button>
        </div>
        <div>
            {{username}} / {{password}}
        </div>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    data: function() {
        return {
            username: '',
            password: ''
        };
    },

    methods: {
        submitForm: function(e) {
            e.preventDefault();
            console.log(this.username);

            let url = 'https://jsonplaceholder.typicode.com/users/';
            let data = {
                'username': this.username,
                'password': this.password
            };
            // http
            axios.post(url, data)
            .then(function(responce){
                console.log(responce);
            })

            .catch(function(error){
                console.log(error);
            })
        }
    }
}
</script>

<style>

</style>