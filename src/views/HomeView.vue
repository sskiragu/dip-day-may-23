<!-- <script setup>
import { ref } from "vue";

const count = ref(0)

console.log(count);

function increment() {
  count.value++
}
</script> -->
<script>
export default {
  data(){
    return{
      count: 0
    }
  },
  methods:{
    increment(){
      this.count++
    }
  },
  computed:{
     doubleCount(){return this.count * 2}
  },
  watch:{
    count(newCount, oldCount){
      console.log(`New count ${newCount} Old count ${oldCount}`)
    }
  },
  beforeUpdate(){
    alert("Do you really want to update?");
  }
}
</script>

<template>
    <h1>Welcome home</h1>
    <h1>Counter App</h1>

  <button @click="increment">Increment</button>
  <p>{{ count }}</p>
  <p>{{doubleCount}}</p>
</template>

<style>

</style>