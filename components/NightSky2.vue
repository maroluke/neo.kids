<script lang="ts" setup>
import { ref, onMounted } from "vue";

// Reactive references for stars and configuration
const stars = ref<any[]>([]); // Array to hold star data
const starsCross = ref<any[]>([]); // Array for cross stars
const starsCrossAux = ref<any[]>([]); // Array for auxiliary cross stars

// Night sky colors
const nightsky = ["#280F36", "#632B6C", "#BE6590", "#FFC1A0", "#FE9C7F"];

// Utility function to generate random numbers
const getRandomInt = (min: number, max: number) =>
  Math.random() * (max - min) + min;

// Function to generate stars
const generateStars = () => {
  // Get screen dimensions
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Calculate the number of stars based on screen size
  const baseStarCount = 500; // Default number of stars for a large screen
  const starCount = Math.floor((screenWidth * screenHeight) / 10000); // Adjust based on screen area
  const crossStarCount = Math.floor(starCount * 0.3); // 30% of stars are cross stars
  const auxStarCount = Math.floor(starCount * 0.1); // 10% are auxiliary stars

  // Clear existing stars
  stars.value = [];
  starsCross.value = [];
  starsCrossAux.value = [];

  // Generate main stars
  for (let i = 0; i < starCount; i++) {
    stars.value.push({
      type: "star1",
      top: getRandomInt(0, 40),
      left: getRandomInt(0, 100),
      duration: getRandomInt(2, 5),
    });
    stars.value.push({
      type: "star2",
      top: getRandomInt(20, 70),
      left: getRandomInt(0, 100),
      duration: getRandomInt(4, 8),
    });
  }

  // Generate cross stars
  for (let i = 0; i < crossStarCount; i++) {
    starsCross.value.push({
      type: "blur",
      top: getRandomInt(0, 100),
      left: getRandomInt(0, 100),
      color: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
    });
    starsCross.value.push({
      type: "star1pt",
      top: getRandomInt(0, 100),
      left: getRandomInt(0, 100),
      duration: getRandomInt(6, 12),
      color: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
      shadow: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
    });
  }

  // Generate auxiliary cross stars
  for (let i = 0; i < auxStarCount; i++) {
    starsCrossAux.value.push({
      type: "blur",
      top: getRandomInt(0, 100),
      left: getRandomInt(0, 100),
      color: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
    });
    starsCrossAux.value.push({
      type: "star2pt",
      top: getRandomInt(0, 100),
      left: getRandomInt(0, 100),
      duration: getRandomInt(4, 10),
      color: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
      shadow: nightsky[Math.floor(getRandomInt(0, nightsky.length))],
    });
  }
};

// Generate stars on component mount
onMounted(() => {
  generateStars();
});
</script>

<template>
  <div class="sky">
    <!-- Render stars -->
    <div class="stars">
      <div
        v-for="(star, index) in stars"
        :key="index"
        :class="['star', star.type]"
        :style="{
          top: star.top + 'vh',
          left: star.left + 'vw',
          animationDuration: star.duration + 's',
        }"
      ></div>
    </div>

    <!-- Render cross stars -->
    <div class="stars-cross">
      <div
        v-for="(star, index) in starsCross"
        :key="'cross-' + index"
        :class="['star', star.type]"
        :style="{
          top: star.top + '%',
          left: star.left + '%',
          backgroundColor: star.color,
          boxShadow: star.shadow ? `0px 0px 6px 1px ${star.shadow}` : 'none',
          animationDuration: star.duration ? star.duration + 's' : 'none',
        }"
      ></div>
    </div>

    <!-- Render auxiliary cross stars -->
    <div class="stars-cross-aux">
      <div
        v-for="(star, index) in starsCrossAux"
        :key="'aux-' + index"
        :class="['star', star.type]"
        :style="{
          top: star.top + '%',
          left: star.left + '%',
          backgroundColor: star.color,
          boxShadow: star.shadow ? `0px 0px 6px 1px ${star.shadow}` : 'none',
          animationDuration: star.duration ? star.duration + 's' : 'none',
        }"
      ></div>
    </div>
  </div>
</template>

<style>
.sky {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: #000;
}

.stars,
.stars-cross,
.stars-cross-aux {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.star {
  position: absolute;
  border-radius: 50%;
  background-color: white;
  opacity: 0.8;
}

.blink {
  animation: blink ease-in-out infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.star1 {
  height: 1px;
  width: 1px;
}

.star2 {
  height: 1.5px;
  width: 1.5px;
}

.blur {
  filter: blur(15px);
  width: 5px;
  height: 10px;
}

.star1pt,
.star2pt {
  border-radius: 50%;
}

@keyframes flicker {
  0%,
  100% {
    opacity: 0.9;
  }
  50% {
    opacity: 0.3;
  }
}

.star {
  position: absolute;
  border-radius: 50%;
  background-color: white;
  opacity: 0.8;
  animation: flicker ease-in-out infinite;
}

.star1 {
  height: 1px;
  width: 1px;
  animation-duration: 2s; /* Randomize duration */
}

.star2 {
  height: 1.5px;
  width: 1.5px;
  animation-duration: 3s; /* Randomize duration */
}

.blur {
  filter: blur(15px);
  width: 5px;
  height: 10px;
  animation-duration: 4s; /* Randomize duration */
}
</style>
