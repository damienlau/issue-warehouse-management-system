const themePluginConfig = require("./config/themePluginConfig");

module.exports = {
  purge: ["./index.html", "./website/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  important: true,
  theme: {
    extend: themePluginConfig,
  },
};
