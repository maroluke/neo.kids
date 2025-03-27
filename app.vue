<script lang="ts"></script>
<template>
  <div>
    <!-- <NightSky /> -->
    <!-- <SpaceGrid2
      class="absolute top-40 left-0 flex flex-col items-end justify-end rotate-180"
    /> -->
    <!-- <SpaceGrid2
      class="absolute bottom-40 left-0 flex flex-col items-end justify-end"
    /> -->

    <div
      class="fade-in flex flex-col items-center justify-center h-screen z-50"
    >
      <a
        class="flex flex-col justify-center items-center w-60"
        href="mailto:hello@neo.kids"
      >
        <!-- <SVGLogoIcon class="w-[72%] mb-[20%]" />
        <SVGLogo class="w-full" /> -->
        <SVGLogoColored />
      </a>
    </div>

    <div class="fade-overlay">&nbsp;</div>
  </div>
</template>

<style scoped>
body {
  height: 100vh;
  overflow: hidden;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}

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
