<template>
    <div>
      <!-- Shimmer Effect -->
      <div v-if="isLoading" class="skeleton-container">
        <div class="skeleton" style="height: 20px;"></div>
        <div class="skeleton" style="height: 20px;"></div>
        <div class="skeleton" style="height: 20px;"></div>
      </div>
  
      <!-- Opacity Animation -->
      <div v-if="isLoading" class="skeleton-container opacity-animation">
        <div class="skeleton" style="height: 20px;"></div>
        <div class="skeleton" style="height: 20px;"></div>
        <div class="skeleton" style="height: 20px;"></div>
      </div>
  
      <!-- Progress Bar -->
      <div v-if="isLoading" class="progress-container">
        <div class="progress">
          <div class="progress-bar" style="width: 50%;"></div>
        </div>
      </div>
  
      <!-- Wave Effect -->
      <div v-if="isLoading" class="skeleton-container wave-effect">
        <div class="skeleton" style="height: 20px;"></div>
        <div class="skeleton" style="height: 20px;"></div>
        <div class="skeleton" style="height: 20px;"></div>
      </div>
  
      <!-- Pulse Effect -->
      <div v-if="isLoading" class="skeleton-container pulse-effect">
        <div class="skeleton" style="height: 20px;"></div>
        <div class="skeleton" style="height: 20px;"></div>
        <div class="skeleton" style="height: 20px;"></div>
      </div>
  
      <!-- Skeleton Text -->
      <div v-if="isLoading" class="skeleton-container skeleton-text">
        <div class="skeleton-text" style="width: 200px;"></div>
        <div class="skeleton-text" style="width: 150px;"></div>
        <div class="skeleton-text" style="width: 250px;"></div>
      </div>
  
      <!-- Actual Content -->
      <div v-else>
        <!-- Your actual content here -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoading: true
      };
    },
    mounted() {
      // Simulate loading delay
      setTimeout(() => {
        this.isLoading = false;
      }, 7000);
    }
  };
  </script>
  
  <style scoped>
  .skeleton-container {
    margin-bottom: 20px;
  }
  
  .skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite linear;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  .opacity-animation .skeleton {
    animation: opacity-loading 1s infinite alternate;
  }
  
  .progress-container {
    width: 100%;
    height: 20px;
    background-color: #f0f0f0;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .progress {
    width: 50%;
    height: 100%;
    background-color: #9e9e9e;
  }
  
  .wave-effect .skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: wave-shimmer 2s infinite;
  }
  
  .pulse-effect .skeleton {
    animation: pulse 1.5s infinite alternate;
  }
  
  .skeleton-text {
    background-color: #f0f0f0;
    height: 20px;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  @keyframes shimmer {
    100% {
      background-position: -2% 0;
    }
  }
  
  @keyframes opacity-loading {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.6;
    }
  }
  
  @keyframes wave-shimmer {
    0% {
      background-position: -1% 0;
    }
    100% {
      background-position: 1% 0;
    }
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
  </style>
  