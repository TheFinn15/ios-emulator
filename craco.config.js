const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@icons": path.join(path.resolve(__dirname, "src/assets/icons")),
      "@": path.join(path.resolve(__dirname, "src")),
    },
  },
};
