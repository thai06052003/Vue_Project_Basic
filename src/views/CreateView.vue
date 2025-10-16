<script setup>
import { reactive } from 'vue';


const todoData = reactive({
    email: '',
    name: '',
    phone: '',
    website: '',
})

const handleCreateNewData = async () => {
    console.log(todoData);
}
</script>

<template>
  <main style="color: #000; padding: 2rem;">
    <h1 style="font-weight: bold;">Create Todo</h1>

    <div style="margin-top: 1rem;">
        <input type="text" placeholder="Enter Email Here!" v-model="txtSearch">
    </div>
    <div style="margin-top: 1rem;">
        <input type="text" placeholder="Enter Name Here!" v-model="txtSearch">
    </div>
    <div style="margin-top: 1rem;">
        <input type="text" placeholder="Enter Phone Here!" v-model="txtSearch">
    </div>
    <div style="margin-top: 1rem;">
        <input type="text" placeholder="Enter Website Here!" v-model="txtSearch">
    </div>

    <div style="display: flex; justify-content: end" @click="handleCreateNewData">
        <div class="btn-main" style="margin-top: 1rem; border-radius: 50px;">Create new</div>
    </div>
  </main>
</template>
