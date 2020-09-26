const description =
  "Oyun geliştirme, yazılım, 3D modelleme, animasyon, fotoğrafçılık, e-ticaret ve çok daha fazlasını gençlere öğreten, bu alanda onlara her türlü desteği çıkmayı hedefleyen yazılım şirketi.";

export default {
  target: "static",
  srcDir: "./src",
  rootDir: "./",
  ssr: false,
  head: {
    title: "IZM Game Studios",
    titleTemplate: "%s - IZM Game Studios",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "keywords",
        content:
          "yazılım, akyazı, sakarya, izm, game studios, oyun stüdyosu, modelleme, aşçılık, youtuber, vlog, video",
      },
      {
        name: "description",
        content: description,
      },
      {
        name: "og:title",
        content: "IZM Game Studios",
      },
      {
        name: "og:description",
        content: description,
      },
      {
        name: "og:image",
        content: "/icon.png",
      },
      {
        name: "twitter:title",
        content: "IZM Game Studios",
      },
      {
        name: "twitter:description",
        content: description,
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:image",
        content: "/icon.png",
      },
      {
        name: "og:image",
        content: "/icon.png",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap",
      },
    ],
  },
  components: true,
  modules: [
    ["nuxt-buefy", { materialDesignIcons: false }],
    "@nuxtjs/pwa",
    "@nuxtjs/device",
  ],
  buildModules: ["@nuxtjs/color-mode"],
  css: ["@/stylesheets/root"],
};
