<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

 const router = useRoute()
 const user = ref({
    email: '',
    name: ''
 })

 onMounted(() => {
    (async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${router.params.id}`);
      const data = await res.json();
      user.value = data;
      console.log(user)
    })();
  });
</script>

<template>
  <main style="color: #000;padding: 2rem;">
    <!-- TodoDetail Item {{ router.params.id }} -->
     <div class="card-item">
        <div class="">
            <h2>{{ user?.name }}</h2>
            <h3>{{ user?.email }}</h3>
            <h4>{{ user?.username }}</h4>
            <h5>{{ user?.website }}</h5>
            <h6>{{ user?.phone }}</h6>
        </div>
     </div>
  </main>
</template>
