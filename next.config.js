const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
});

const nextJsConfig = {
  async redirects () {
    return [
      {
        source: '/implement-vizzly',
        destination: '/get-started',
        permanent: false
      }
    ]
  }
};

module.exports = withNextra(nextJsConfig);
