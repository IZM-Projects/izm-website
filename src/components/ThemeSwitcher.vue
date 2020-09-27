<template>
  <a
    :class="{
      button: true,
      'is-dark': $colorMode.value === 'dark',
      'is-white': $colorMode.value === 'light',
    }"
    title="Temayı Değiştir"
    @click="themeSwitch"
  >
    <Sun v-if="$colorMode.value === 'dark'" />
    <Moon v-else />
  </a>
</template>


<style lang="scss" scoped>
.button {
  transform: translateX(-50%);
  position: absolute;
  z-index: 35;
  top: 0.5em;
  left: 50%;
}
</style>

<script>
import { UilBrightness, UilMoon } from "@iconscout/vue-unicons";

export default {
  components: {
    Sun: UilBrightness,
    Moon: UilMoon,
  },
  methods: {
    themeSwitch() {
      if (this.$colorMode.value === "dark")
        this.$colorMode.preference = "light";
      else this.$colorMode.preference = "dark";
    },
  },
};
</script>
