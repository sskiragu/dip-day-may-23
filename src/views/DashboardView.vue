<script setup>
import { useCounterStore } from '@/stores/counter';
import { useUserStore } from '@/stores/user';

const counter = useCounterStore()
const user = useUserStore()
</script>

<template>

    <h1>Dashboard</h1>
    <h1>{{user.userCredentials}}</h1>
    <h1>{{counter.count}}</h1>
    <button @click="counter.increment">Increment</button>

</template>

<style scoped></style>