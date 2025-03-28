<script lang="ts" setup>
const toggleMusic = () => {
  const audio = document.getElementById("audio") as HTMLAudioElement;
  if (audio.paused) {
    audio.play();
    isPlaying.value = true; // Update the reactive variable
  } else {
    audio.pause();
    isPlaying.value = false; // Update the reactive variable
  }
};
const isPlaying = ref(false);
</script>
<template>
  <div class="bg-black">
    <NightSky />
    <SpaceGrid2
      class="absolute bottom-40 left-0 flex flex-col items-end justify-end"
    />

    <div
      class="fade-in flex flex-col items-center justify-center h-screen z-50"
    >
      <a
        class="flex flex-col justify-center items-center w-60"
        href="mailto:hello@neo.kids"
      >
        <SVGLogoColored />
      </a>
    </div>

    <div class="fade-overlay">&nbsp;</div>

    <audio id="audio" src="/audio/neon-gaming-128925.mp3" loop></audio>

    <!-- a button that play/stop music from a mp3 file -->
    <button
      class="absolute top-0 right-0 p-4 text-white z-50"
      @click="toggleMusic"
      :aria-label="isPlaying ? 'Pause music' : 'Play music'"
      :class="isPlaying ? 'text-red-500' : 'text-white'"
    >
      <LucideVolume2 />
    </button>
  </div>
</template>

<style scoped>
.masked-logo {
  mask: url(#myMask);
  -webkit-mask: url(#myMask);
}

img {
  width: 100%;
  max-width: 280px;
  padding: 0 40px;
  box-sizing: border-box;
}

.fade-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 3000;
  animation: fadeOut 2s ease-out forwards;
}

.fade-in {
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    visibility: visible;
  }
  100% {
    opacity: 1;
  }
}
</style>
