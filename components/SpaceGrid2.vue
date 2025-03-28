<template>
  <div class="scene">
    <div
      class="bottom after:bg-gradient-to-b after:from-black after:to-transparent after:absolute after:-mt-1"
    >
      <div class="m0"></div>
      <div class="m1"></div>
      <div class="m2"></div>
    </div>
  </div>
</template>

<style>
@property --shift {
  syntax: "<number>";
  inherits: false;
  initial-value: 0;
}
:root {
  --labs-sys-color-background: lack;
  --labs-sys-color-on-background: white;
  --base-speed: 10s;
  --labs-sys-color-grid: #00c7be;
  --labs-sys-color-grid-glow: #32ade6;
}

.bottom {
  perspective: 14.5rem;
  flex: 0 0 29rem;
  position: relative;
  width: 100%;
  box-sizing: border-box;
}
.bottom:before {
  content: "";
  position: absolute;
  inset: 0;
  --line-width: 0.0635rem;
  background: linear-gradient(
      to right,
      var(--labs-sys-color-grid) var(--line-width),
      transparent var(--line-width)
    ),
    linear-gradient(
      to bottom,
      var(--labs-sys-color-grid) var(--line-width),
      transparent var(--line-width)
    ),
    black;
  background-size: 2rem 125rem, 125rem 2rem;
  transform: rotateX(53deg) scale(1.8) translateZ(75px);
  -webkit-animation: grid calc(var(--base-speed) * 1) linear infinite;
  animation: grid calc(var(--base-speed) * 1) linear infinite;
  filter: drop-shadow(0 0 2px var(--labs-sys-color-grid-glow));
}

.bottom:after {
  content: "";
  inset: 0;
  transform: rotateX(53deg) scale(1.8) translateZ(75px);
}

@-webkit-keyframes grid {
  from {
    background-position-y: 30rem;
  }
  to {
    background-position-y: 0%;
  }
}

@keyframes grid {
  from {
    background-position-y: -30rem;
  }
  to {
    background-position-y: 0%;
  }
}

.scene {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: fixed;
}
.scene:after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.7;
  mix-blend-mode: overlay;
  filter: invert(1);
  z-index: 20000;
}
</style>
