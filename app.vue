<template>
  <div class="container fade-in">
    <a href="mailto:hello@neo.kids">
      <img src="/neo-kids-logo-v-white-001.png" alt="neo.kids" />
    </a>
  </div>

  <div class="fade-overlay">&nbsp;</div>

  <div class="grid-container">
    <div class="plane">
      <div class="grid"></div>
      <div class="glow"></div>
    </div>
    <div class="plane">
      <div class="grid"></div>
      <div class="glow"></div>
    </div>
  </div>
</template>

<style>
img {
  width: 100%;
  max-width: 280px;
  padding: 0 40px;
  box-sizing: border-box;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 2000;
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

body {
  height: 100vh;
  overflow: hidden;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  color: green;
  font-family: "Share Tech Mono", "Cascadia Code", Menlo, Monaco, "Courier New",
    monospace;
  font-size: 6rem;
  filter: drop-shadow(0px 0px 5px currentColor);
}
h1::after {
  content: "";
  display: inline-block;
  width: 0.2em;
  height: 0.7em;
  background-color: currentColor;
  margin-left: 0.1em;
  -webkit-animation: blink 1s linear infinite forwards;
  animation: blink 1s linear infinite forwards;
  vertical-align: baseline;
}

.grid-container {
  --grid: 5rem;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
  perspective: 100rem;
  -webkit-animation: rotate 100s linear infinite forwards;
  animation: rotate 100s linear infinite forwards;
  z-index: -10;
}
.grid-container .plane {
  --dir: 1;
  width: 400%;
  height: 200%;
  min-height: 70rem;
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
    black var(--grid),
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
      transparent var(--grid)
    ),
    repeating-linear-gradient(
      to bottom,
      #00c7be,
      #00c7be 3px,
      transparent 3px,
      transparent var(--grid)
    );
  -webkit-animation: move 1s linear infinite forwards;
  animation: move 1s linear infinite forwards;
}
.grid-container .plane > *::after {
  background-image: linear-gradient(
    to bottom,
    black var(--grid),
    rgba(0, 0, 0, 0)
  );
  z-index: 1;
  transform: translateZ(1px);
}
.grid-container .plane .glow {
  filter: blur(1rem);
  z-index: 1;
  mix-blend-mode: plus-lighter;
}

@-webkit-keyframes move {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(calc(var(--grid) * var(--dir)));
  }
}

@keyframes move {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(calc(var(--grid) * var(--dir)));
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
