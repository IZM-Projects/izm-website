<template>
  <footer
    :class="{
      'has-background-white': !mobile && $colorMode.value === 'light',
      'has-background-black': mobile && $colorMode.value === 'dark',
      'footer px-0 has-text-centered': true,
      'mobile-footer py-5': mobile,
      'py-4': !mobile,
    }"
  >
    <nuxt-link
      v-for="(page, index) in getPages"
      :title="page.name.toLowerCase()"
      class="social-link"
      :to="page.to"
      :key="index"
    >
      <button
        :class="{
          button: true,
          'is-active': [$route.fullPath, $route.fullPath.slice(0, -1)].includes(
            page.to
          ),
          'is-black': mobile && $colorMode.value === 'dark',
          'is-dark': !mobile && $colorMode.value === 'dark',
          'is-white': $colorMode.value === 'light',
        }"
      >
        <Home v-if="page.icon === 'home'" size="24px" />
        <Info v-else-if="page.icon === 'info'" size="24px" />
        <Phone v-else-if="page.icon === 'phone'" size="24px" />
        <Picture v-else-if="page.icon === 'gallery'" size="24px" />
        <span class="ml-2">{{ page.name }}</span>
      </button>
    </nuxt-link>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;

  &.mobile-footer {
    margin-bottom: 2.5em;
  }
}

.social-link {
  .button {
    text-decoration: none;
    margin-bottom: 0.25em;
  }

  &:not(:last-child) {
    margin-right: 4px;
  }
}
</style>

<script>
import {
  UilHome,
  UilInfoCircle,
  UilPhoneVolume,
  UilScenery,
} from "@iconscout/vue-unicons";

export default {
  props: ["mobile"],
  components: {
    Home: UilHome,
    Info: UilInfoCircle,
    Phone: UilPhoneVolume,
    Picture: UilScenery,
  },
  data() {
    return {
      pages: [
        {
          icon: "home",
          name: "Ana Sayfa",
          to: "/",
        },
        {
          icon: "info",
          name: "Hakımızda",
          to: "/hakkimizda",
        },
        {
          icon: "gallery",
          name: "Galeri",
          to: "/galeri",
        },
        {
          icon: "phone",
          name: "İletişim",
          to: "/iletisim",
        },
      ],
    };
  },
  computed: {
    getPages() {
      if (!this.$device.isMobile && this.$route.fullPath === "/")
        return this.pages.slice(1);
      else if (this.$device.isMobile)
        return this.pages.filter((page) => page.to !== this.$route.fullPath);
      else return this.pages;
    },
  },
};
</script>