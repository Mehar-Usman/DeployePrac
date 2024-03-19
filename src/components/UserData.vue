<template>
    <div>
      <h1>Posts</h1>
      <ul v-if="posts">
        <li v-for="post in posts" :key="post.id">
          <h2>{{ post.title }}</h2>
          <p>{{ post.body }}</p>
        </li>
      </ul>
      <div v-else style="display: flex; justify-content: center; align-items: center;" >
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const posts = ref(null);
  
  onMounted(async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      posts.value = await response.json();
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  });
  </script>
  <style>
    .lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fdd;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fdd transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
  