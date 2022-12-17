// vite.config.js
import { ghPages } from "vite-plugin-gh-pages";

/** @type {import('vite').UserConfig} */
export default {
  base: "/Megamania-Atari-Game-In-The-Web/",
  plugins: [ghPages()],
};
