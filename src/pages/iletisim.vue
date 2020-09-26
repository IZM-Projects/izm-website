<template>
  <div
    :class="{
      'card px-4 py-4': true,
      'has-background-dark': $colorMode.value === 'dark',
    }"
  >
    <div class="columns has-text-centered-mobile mb-0">
      <div class="column">
        <img draggable="false" src="/icon.png" width="150" class="is-rounded" />
      </div>

      <div class="column align-center">
        <div class="is-flex">
          <Facebook size="24px" class="mr-2" />
          <a href="https://facebook.com/izm.gamestudios" target="_blank"
            >IZM Game Studios</a
          >
        </div>
        <div class="is-flex">
          <YouTube size="24px" class="mr-2" />
          <a
            href="https://www.youtube.com/channel/UCnNT1aclSK87lfWaDB67pNQ"
            target="_blank"
            >IZM Game Studios</a
          >
        </div>
        <div class="is-flex">
          <Instagram size="24px" class="mr-2" />
          <a href="https://instagram.com/izmgamestudios" target="_blank"
            >@izmgamestudios</a
          >
        </div>

        <div class="mt-2">
          <div class="is-flex">
            <Phone size="24px" class="mr-2" />
            <a href="tel:+905417709205">+90 541 770 92 05</a>
          </div>
          <div class="is-flex">
            <WhatsApp size="24px" class="mr-2" />
            <a
              :href="`https://api.whatsapp.com/send?phone=+905417709205&lang=tr&text=${encodeURIComponent(
                'Merhaba, ben siteden iletişime geçiyorum 👋'
              )}`"
              target="_blank"
              >+90 541 770 92 05</a
            >
          </div>
        </div>
      </div>
    </div>

    <p>
      <a href="https://g.page/IZM-Game" target="_blank"
        ><Map fill="rgb(50, 115, 220)" size="18px" class="mr-2" />İnönü Mah.,
        Ada Cd. No: 273-9, Akyazı/Sakarya</a
      >
    </p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  transform: translate(-50%, -50%);
  width: fit-content;
  position: absolute;
  left: 50%;
  top: 50%;
}

.align-center {
  align-self: center;
}

@media screen and (max-width: 1024px) {
  .card {
    max-width: 300px;

    div.is-flex {
      place-content: center;
    }

    p {
      text-align: center;
    }
  }
}
</style>

<script>
import {
  UilPhoneVolume,
  UilWhatsapp,
  UilInstagram,
  UilFacebook,
  UilMap,
  UilYoutube,
} from "@iconscout/vue-unicons";

export default {
  components: {
    Phone: UilPhoneVolume,
    WhatsApp: UilWhatsapp,
    Instagram: UilInstagram,
    Facebook: UilFacebook,
    Map: UilMap,
    YouTube: UilYoutube,
  },
  head: {
    title: "İletişim",
  },
};
</script>