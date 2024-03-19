<script setup>
import { ref } from 'vue'
import axios from 'axios';

const username = ref('john')
const email = ref('john@gmail.com')
const password = ref('john123')

const signup = async () => {
    console.log(`${username.value} ${email.value} ${password.value}`);
    // Save the value
    await axios.post('http://127.0.0.1:8000/api/signup', {username: username.value, email: email.value, password: password.value});
}

</script>

<template>
    <v-container>
        <v-sheet 
            border="lg"
            class="mx-auto pa-10" 
            width="300"
            rounded>
            <p class="text-h4 mb-5">Signup here</p>
            <v-form @submit.prevent="signup">
                <v-text-field
                    hint="john"
                    label="Username"
                    variant="outlined"
                    persistent-hint
                    class="mb-5"
                    v-model="username">
                </v-text-field>
                <v-text-field
                    hint="john@gmail.com"
                    label="Email"
                    variant="outlined"
                    persistent-hint
                    class="mb-5"
                    v-model="email">
                </v-text-field>
                <v-text-field
                    hint="John123^&*"
                    label="Password"
                    variant="outlined"
                    persistent-hint
                    class="mb-5"
                    v-model="password">
                </v-text-field>
                <v-btn
                    type="submit"
                    variant="elevated"
                    color="blue">Signup</v-btn>
            </v-form>
        </v-sheet>
    </v-container>
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