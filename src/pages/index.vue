<template>
  <div class="card-box">
    <div>
      <h3 class="bebas is-size-2" lang="en">
        <span class="has-text-danger">IZM</span> Game Studios
      </h3>
    </div>

    <hr
      :class="{
        divider: true,
        'has-background-black': $colorMode.value === 'light',
        'has-background-white': $colorMode.value === 'dark',
      }"
    />

    <div class="mt-4">
      <p>
        Yeteneğine güveniyorsan
        <nuxt-link class="has-text-danger" to="/iletisim">bize katıl</nuxt-link
        >!
      </p>

      <p>Akyazı'nın ilk ve tek oyun, içerik üretim ve yazılım firması!</p>

      <SocialMedia class="mt-2" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-box {
  transform: translate(-50%, -50%);
  width: fit-content;
  position: absolute;
  text-align: center;
  max-width: 400px;
  padding: 1em;
  left: 50%;
  top: 50%;

  .divider {
    animation: width 1.5s infinite;

    @keyframes width {
      0% {
        margin: 0.5em 7em;
      }

      50% {
        margin: 0.5em 6em;
      }

      100% {
        margin: 0.5em 7em;
      }
    }
  }
}
</style>

<script>
export default {
  head: {
    titleTemplate: "",
  },
};
</script>
