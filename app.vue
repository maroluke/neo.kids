<script lang="ts" setup></script>
<template>
  <div class="bg-black">
    <NightSky2 />
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
        <SVGLogoColored class="w-32 sm:w-full" />
      </a>

      <MusicButton />
    </div>

    <div class="fade-overlay">&nbsp;</div>
  </div>
</template>

<style scoped>
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
  z-index: 30;
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
