export default [
  ["nuxt-buefy", { materialDesignIcons: false }],
  [
    "@nuxtjs/pwa",
    {
      manifest: {
        name: "IZM Game Studios",
        short_name: "IZM",
        theme_color: "#c0392b"
      }
    }
  ],
  "@nuxtjs/device"
];
