<script setup>
import { ref } from 'vue'
import axios from 'axios';
import {useRouter} from 'vue-router'

const email = ref('john@gmail.com')
const password = ref('john123')

const router = useRouter()

const signup = async () => {
    console.log(`${email.value} ${password.value}`);
    // Save the value
    await axios.post('http://127.0.0.1:8000/api/login', {email: email.value, password: password.value});
    router.push('/dashboard')
}

</script>

<template>
    <div class="signup-form">
        <h1>Login Here</h1>
        <form @submit.prevent="signup">
            <div class="form-group">
                <input class="form-input" type="email" placeholder="Enter email" v-model="email">
            </div>
            <div class="form-group">
                <input class="form-input" type="password" placeholder="Enter password" v-model="password">
            </div>
            <div class="form-group">
                <input class="form-input" type="submit" value="Login">
            </div>
        </form>
    </div>
</template>

<style scoped>
    .signup-form{
        background-color: rgb(202, 202, 233);
        width: 50%;
        padding: 1%;
        border-radius: 10px;
    }
    .signup-form .form-group{
        margin-bottom: 1%;
    }

    .signup-form .form-input{
        border-radius: 5px;
        border-style: none;
        padding: 5px 28px;
    }
</style>