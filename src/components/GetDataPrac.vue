<template>
    <div style="padding: 20px;">
      <div style="font-size: 20px; margin-bottom: 20px;">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam omnis cumque molestias quod exercitationem, distinctio beatae dicta molestiae odio labore quos magnam optio mollitia impedit similique ea id eum adipisci.
      </div>
      <div v-if="isLoading">
        <div v-if="isLoading" style="display: flex; justify-content: center; align-items: center;">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
        <div class="skeleton-table">
          <div class="skeleton-row " v-for="n in 10 " :key="n" style="display: flex; gap: 10px;">
            <div class="skeleton-cell" style="width: 10%; height: 30px;"></div>
            <div class="skeleton-cell" style="width: 20%; height: 30px;"></div>
            <div class="skeleton-cell" style="width: 20%; height: 30px;"></div>
            <div class="skeleton-cell" style="width: 20%; height: 30px;"></div>
            <div class="skeleton-cell" style="width: 30%; height: 30px;"></div>
          </div>
        </div>
      </div>
      <div v-else>
        <table class="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in posts" :key="post.id">
              <td>{{ post.id }}</td>
              <td>{{ post.name }}</td>
              <td>{{ post.username }}</td>
              <td>{{ post.email }}</td>
              <td>{{ post.address.street }}, {{ post.address.suite }}, {{ post.address.city }}, {{ post.address.zipcode }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { ref } from 'vue';
  
  const posts = ref([]);  // Store Api Posts data
  const isLoading = ref(true);
  
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      posts.value = response.data;
      setTimeout(() => {
        isLoading.value = false;
      }, 1000);
    })
    .catch(err => {
      console.error('Error in Fetching Data:', err);
    });
  </script>
  
  <style scoped>
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
  background: rgb(31, 36, 41);
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

  .table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .table th, .table td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  .table th {
    background-color: #f2f2f2;
    font-weight: bold;
    text-align: left;
  }
  
  .table tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  .table tr:hover {
    background-color: #f2f2f2;
  }
  
  .table td {
    background-color: #ffffff; /* White background for table cells */
    color: #333333; /* Text color for table cells */
  }
  
  .skeleton-table {
    border-collapse: collapse;
    width: 100%;
  }
  
  .skeleton-row {
    animation: loading 2s infinite;
  }
  
  .skeleton-cell {
    background-color: #f2f2f2;
    height: 20px;
    margin: 5px 0;
    border-radius: 4px;
    position: relative;
  }
  
  .skeleton-cell::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent 0%, rgba(182, 185, 180, 0.5) 50%, transparent 100%);
    animation: shimmer 1s infinite linear;
  }
  
  @keyframes loading {
    0% { opacity: 0.6; }
    50% { opacity: 0.8; }
    100% { opacity: 0.6; }
  }
  
  @keyframes shimmer {
    100% { left: 1%; }
  }
  </style>
  