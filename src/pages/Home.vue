<template>
  <div id="app">
    <Suspense>
      <template #default>
        <!-- Display user data when loaded -->
        <UserData />
      </template>
      <template #fallback>
        <!-- Display user data when loaded -->
        
      </template>
    </Suspense>
  </div>
  <div style="background-color: aqua;">
          <ApiGetPrac/>
    </div>
</template>

<script setup>
import { Suspense } from 'vue';
import UserData from '../components/UserData.vue';
import ApiGetPrac from '../components/ApiGetPrac.vue';

</script>
<style>

</style>
