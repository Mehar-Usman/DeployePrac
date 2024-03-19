<template>
    <div>
      <div v-if="isLoading" style="justify-content: center; align-items: center; display: flex;">
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
      <ul v-else>
      <h2>Posts</h2>
        <li v-for="post in posts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const posts = ref([]);
  const isLoading = ref(true); // Initially, set loading to true
  
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      posts.value = response.data;
      // Delay setting isLoading to false by 5 seconds
      setTimeout(() => {
        isLoading.value = false;
      }, 3000);
    })
    .catch(err => {
      console.error('Error fetching posts:', err);
    });
  </script>
  
  <style scoped>
  /* Add your CSS styles here */
  .lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

  </style>
  