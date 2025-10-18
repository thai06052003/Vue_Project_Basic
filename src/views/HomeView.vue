<script setup>
  import { useTodoStore } from '@/store/TodoStore';
import { computed, onMounted, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  const txtSearch = ref('');
  const store = useTodoStore();
  const router = useRouter();

  /* onMounted(() => {
    (async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      users.value = data;
    })();
  }); */

  /* const filterUsers = computed(() => {
    console.log('running');
    return users.value.filter(
      (item) =>
        item.name.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1 ||
        item.email.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1
    );
  }); */
</script>

<template>
  <main style="color: #000; padding: 2rem">
    <input type="text" placeholder="Enter Search Here!" @input="event => store.handleChangeTxtSearch(event.target.value)" />
    <div class="group-card">
      <div class="card-item" v-for="user in store.filterUsers">
        <div @click="router.push({ path: `/todo/${user?.id}` })">
          <h2>{{ user.name }}</h2>
          <i>{{ user.email }}</i>
        </div>
      </div>
      {{ store.txtSearch }}
    </div>
  </main>
</template>

<style></style>
