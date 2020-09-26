<template>
  <div :class="{ container: true, 'py-4 px-4': $device.isMobile }">
    <div class="columns is-multiline is-marginless">
      <div
        class="column is-one-quarter"
        v-for="index in imageCount"
        :key="index"
        @click="
          imageModal.src = `/images/gallery/image${index}.jpeg`;
          imageModal.active = true;
        "
      >
        <img
          :src="`/images/gallery/image${index}.jpeg`"
          :alt="`image-${index}`"
        />
      </div>
    </div>

    <b-modal v-model="imageModal.active">
      <p class="image is-4by3">
        <img :src="imageModal.src" />
      </p>
    </b-modal>
  </div>
</template>

<style lang="scss" scoped>
.column img {
  transition: opacity 0.2s;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
}

@media screen and (max-width: 1024px) {
  .container {
    position: absolute;
    margin-top: 2em;
    margin-bottom: 3em;
    left: 0;
    top: 0;
  }
}
</style>

<script>
export default {
  head: {
    title: "Galeri",
  },
  data() {
    return {
      imageCount: 8,
      imageModal: {
        active: false,
        src: "",
      },
    };
  },
};
</script>