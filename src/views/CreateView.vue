<script setup>
import { useTodoStore } from '@/store/TodoStore';
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const store = useTodoStore();
const router = useRouter();
const route = useRoute();

const todoData = reactive({
    email:  route.params.id ? store.detailUser.email : '',
    name: route.params.id ? store.detailUser.name : '',
    phone: route.params.id ? store.detailUser.phone : '',
})

const handleCreateNewData = () => {
    store.handleCreateUser({id: String(Math.random()), ...todoData})
    router.push('/')
}

const handleUpdateData = () => {
    store.handleUpdateUser({id: route.params.id, ...todoData})
    router.push('/')
}
</script>

<template>
  <main style="color: #000; padding: 2rem;">
    <h1 style="font-weight: bold;">Create Todo</h1>

    <div style="margin-top: 1rem;">
        <input type="text" placeholder="Enter Email Here!" v-model="todoData.email">
    </div>
    <div style="margin-top: 1rem;">
        <input type="text" placeholder="Enter Name Here!" v-model="todoData.name">
    </div>
    <div style="margin-top: 1rem;">
        <input type="text" placeholder="Enter Phone Here!" v-model="todoData.phone">
    </div>

    <div style="display: flex; justify-content: end" @click="route.params.id ? handleUpdateData() : handleCreateNewData()">
        <div class="btn-main" style="margin-top: 1rem; border-radius: 50px;">Create new</div>
    </div>
  </main>
</template>
