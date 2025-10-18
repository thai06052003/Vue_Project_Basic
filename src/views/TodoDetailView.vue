<script setup>
  import { useTodoStore } from '@/store/TodoStore';
import { useRoute, useRouter } from 'vue-router';

  const store = useTodoStore();
  const route = useRoute();
  const router = useRouter();

  const handleDeleteUser = () => {
    store.handleDeleteUser(route.params.id)
    router.push('/')
  }

</script>

<template>
  <main style="color: #000; padding: 2rem">
    <div class="card-item">
      <div class="">
        <h3>{{ store.detailUser.email }}</h3>
        <h2>{{ store.detailUser.name }}</h2>
        <h6>{{ store.detailUser.phone }}</h6>
      </div>
    </div>

    <div style="display: flex;">
      <div class="btn-main" style="margin-top: 1rem; background-color: rgb(231 66 66); min-width: 100px;" @click="handleDeleteUser()">Delete</div>
    </div>
    <div style="display: flex;">
      <div class="btn-main" style="margin-top: 1rem; background-color: rgb(255 148 60); min-width: 100px;" @click="router.push(`/update/${store.detailUser.id}`)">Update</div>
    </div>
  </main>
</template>
