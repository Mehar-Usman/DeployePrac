<template>
    <div class="text-animation">
      <div ref="text1" class="text">Text 1</div>
      <div ref="text2" class="text">Text 2</div>
      <div ref="text3" class="text">Text 3</div>
      <button @click="animateText">Animate Text</button>
    </div>
  </template>
  
  <script>
  import gsap from "gsap";
  export default {
    mounted() {
      // Store references to the text elements
      this.textElements = [
        this.$refs.text1,
        this.$refs.text2,
        this.$refs.text3
      ];
    },
    methods: {
      animateText() {
        // Use GSAP to animate multiple text elements
        gsap.to(this.textElements, {
          duration: 1,
          textContent: "Animated!",
          color: "blue",
          fontSize: "24px",
          ease: "power2.inOut"
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .text {
    margin-bottom: 10px;
  }
  </style>
  