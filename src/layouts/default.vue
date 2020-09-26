<template>
  <div>
    <ThemeSwitcher />

    <Nuxt />

    <div v-if="$device.isMobile" class="mobile-footer">
      <button
        :class="{
          'button mobile-footer': true,
          'is-light': $colorMode.value === 'light',
          'is-black': $colorMode.value === 'dark',
        }"
        @click="mobileFooter = !mobileFooter"
      >
        <Bars size="24px" />
      </button>

      <transition name="slide" mode="in-out">
        <Footer :mobile="true" v-if="mobileFooter" />
      </transition>
    </div>

    <Footer v-if="!$device.isMobile" />
  </div>
</template>

<style lang="scss">
html,
body {
  font-family: "Lexend Deca", sans-serif;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
  overflow-y: auto;

  &.mobile {
    align-items: unset;
  }
}

.mobile-footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;

  .button {
    transition: all 0.2s;
  }
}
</style>

<script>
import { UilBars } from "@iconscout/vue-unicons";

export default {
  head() {
    return {
      htmlAttrs: {
        lang: "tr",
      },
      bodyAttrs: {
        class: this.$device.isMobile ? "mobile" : null,
      },
    };
  },
  components: {
    Bars: UilBars,
  },
  data() {
    return {
      mobileFooter: false,
    };
  },
};
</script>