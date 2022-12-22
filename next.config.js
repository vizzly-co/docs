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
      },
      {
        source: '/query-engines/self-hosted-query-engine',
        destination: '/query-engines/self-hosted',
        permanent: false
      }
    ]
  }
};

module.exports = withNextra(nextJsConfig);
