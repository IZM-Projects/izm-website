<template>
  <div class="is-flex center">
    <a
      href="https://instagram.com/izmgamestudios"
      title="Instagram"
      rel="noreferrer"
      target="_blank"
    >
      <Instagram
        fill="rgba(213 ,0 ,135 , 0.75)"
        size="32px"
        class="social-icon"
      />
    </a>

    <a
      href="https://facebook.com/izm.gamestudios"
      title="Facebook"
      rel="noreferrer"
      target="_blank"
    >
      <Facebook
        fill="rgba(72 ,103 ,170 , 0.75)"
        size="32px"
        class="social-icon"
      />
    </a>

    <a
      :href="`https://api.whatsapp.com/send?phone=+905417709205&lang=tr&text=${encodeURIComponent(
        'Merhaba, ben siteden iletişime geçiyorum 👋'
      )}`"
      title="WhatsApp"
      rel="noreferrer"
      target="_blank"
    >
      <WhatsApp
        fill="rgba(13 ,193 ,67 ,0.75)"
        size="32px"
        class="social-icon"
      />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.center {
  justify-content: center;

  a {
    opacity: 1;
    transition: opacity 0.2s;

    &:not(:last-child) {
      margin-right: 8px;
    }

    &:hover {
      opacity: 0.75;
    }
  }
}
</style>

<script>
import {
  UilInstagram,
  UilFacebookF,
  UilWhatsapp,
} from "@iconscout/vue-unicons";

export default {
  components: {
    Instagram: UilInstagram,
    Facebook: UilFacebookF,
    WhatsApp: UilWhatsapp,
  },
};
</script>