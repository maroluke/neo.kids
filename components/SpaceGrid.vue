<template>
  <div class="grid-container">
    <div class="plane">
      <div class="grid-matrix"></div>
      <div class="grid-glow"></div>
    </div>
    <div class="plane">
      <div class="grid-matrix"></div>
      <div class="grid-glow"></div>
    </div>
  </div>
</template>

<style>
body {
  height: 100vh;
  overflow: hidden;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-container {
  --grid-matrix: 20rem;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
  perspective: 25rem;
  -webkit-animation: rotate 100s linear infinite forwards;
  animation: rotate 100s linear infinite forwards;
  z-index: -10;
}
.grid-container .plane {
  --dir: 2;
  width: 800%;
  height: 400%;
  min-height: 20rem;
  position: absolute;
  bottom: 0;
  transform-style: preserve-3d;
  transform-origin: bottom center;
  transform: translateX(-50%) rotateX(85deg);
}
.grid-container .plane:last-child {
  --dir: -1;
  top: 0;
  transform-origin: top center;
  transform: translateX(-50%) rotateX(-85deg);
}
.grid-container .plane:last-child > *::after {
  background-image: linear-gradient(
    to top,
    black var(--grid-matrix),
    rgba(0, 0, 0, 0)
  );
}
.grid-container .plane > * {
  transform-style: preserve-3d;
  height: 100%;
  width: 100%;
  position: absolute;
}
.grid-container .plane > *::before,
.grid-container .plane > *::after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.grid-container .plane > *::before {
  background-image: repeating-linear-gradient(
      to left,
      #00c7be,
      #00c7be 3px,
      transparent 3px,
      transparent var(--grid-matrix)
    ),
    repeating-linear-gradient(
      to bottom,
      #00c7be,
      #00c7be 3px,
      transparent 3px,
      transparent var(--grid-matrix)
    );
  -webkit-animation: move 1s linear infinite forwards;
  animation: move 1s linear infinite forwards;
}
.grid-container .plane > *::after {
  background-image: linear-gradient(
    to bottom,
    black var(--grid-matrix),
    rgba(0, 0, 0, 0)
  );
  z-index: 1;
  transform: translateZ(1px);
}
.grid-container .plane .grid-glow {
  filter: blur(1rem);
  z-index: 1;
  mix-blend-mode: plus-lighter;
}

@-webkit-keyframes move {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(calc(var(--grid-matrix) * var(--dir)));
  }
}

@keyframes move {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(calc(var(--grid-matrix) * var(--dir)));
  }
}
@-webkit-keyframes blink {
  0% {
    visibility: visible;
  }
  50% {
    visibility: visible;
  }
  51% {
    visibility: hidden;
  }
  100% {
    visibility: hidden;
  }
}
@keyframes blink {
  0% {
    visibility: visible;
  }
  50% {
    visibility: visible;
  }
  51% {
    visibility: hidden;
  }
  100% {
    visibility: hidden;
  }
}
</style>
