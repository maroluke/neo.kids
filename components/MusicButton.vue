<script lang="ts" setup>
import { Volume2, VolumeX } from "lucide-vue-next";
const isPlaying = ref(false);
const audio = ref<HTMLAudioElement | null>(null); // Ref for the audio element

const toggleMusic = () => {
  if (!audio.value) return; // Ensure the audio element is available

  if (audio.value.paused) {
    audio.value.play();
    isPlaying.value = true; // Update the reactive variable
  } else {
    audio.value.pause();
    isPlaying.value = false; // Update the reactive variable
  }
};
</script>

<template>
  <!-- a button that play/stop music from a mp3 file -->
  <button
    @click="toggleMusic"
    :class="{
      'bg-opacity-100 border-purple-700 hover:bg-opacity-100': isPlaying,
      'bg-opacity-0 border-transparent': !isPlaying,
    }"
    class="z-50 p-4 text-white bg-white translate-y-20 rounded-full border-4 cursor-pointer hover:bg-opacity-10 transition-all duration-300 ease-in-out"
  >
    <Volume2
      v-if="!isPlaying"
      :class="{ '!stroke-black': isPlaying }"
      class="stroke-white"
    />
    <VolumeX
      v-else
      :class="{ '!stroke-black': isPlaying }"
      class="stroke-white"
    />
  </button>

  <audio
    ref="audio"
    src="https://cdn.pixabay.com/audio/2022/12/11/audio_daca287e76.mp3"
    loop
  ></audio>
</template>

<style></style>
