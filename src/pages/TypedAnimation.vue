<template>
    <div class="typed-animation">
      <h2 ref="typedText"></h2>
    </div>
  </template>
  
  <script>
  import Typed from "typed.js";
  
  export default {
    mounted() {
      // Initialize Typed.js instance
      this.typed = new Typed(this.$refs.typedText, {
        strings: [
          "Hello, World!",
          "Welcome to Typed.js",
          "Create amazing animations",
          "With Vue.js integration"
        ],
        typeSpeed: 50, // Typing speed in milliseconds
        backSpeed: 30, // Backspacing speed in milliseconds
        startDelay: 500, // Delay before typing starts
        backDelay: 1500, // Delay before backspacing starts
        loop: true, // Loop the animation
        loopCount: Infinity, // Number of loops (Infinity for infinite loop)
        showCursor: false, // Hide the cursor
        autoInsertCss: true // Automatically insert CSS for text
      });
    },
    beforeDestroy() {
      // Destroy Typed.js instance to prevent memory leaks
      this.typed.destroy();
    }
  };
  </script>
  
  <style scoped>
  .typed-animation {
    text-align: center;
  }
  </style>
  