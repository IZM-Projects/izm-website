// Ayrı ayrı dosyalardan ayarları çekme
import buildModules from "./config/buildModules.js";
import modules from "./config/modules.js";
import head from "./config/head.js";
import css from "./config/css.js";
import build from "./config/build";

// Değişmeyen veriler
const components = true;
const target = "static";
const srcDir = "./src";
const rootDir = "./";
const ssr = true;

export default {
  srcDir,
  rootDir,
  target,
  ssr,
  head,
  components,
  modules,
  buildModules,
  css,
  build
};
