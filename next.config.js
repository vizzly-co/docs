const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
});

const nextJsConfig = {
  async redirects () {
    return [
      {
        source: '/tutorials/frontend/create-react-app',
        destination: '/get-started/frontend/create-react-app',
        permanent: false
      },
      {
        source: '/implement-vizzly',
        destination: '/get-started',
        permanent: false
      },
      {
        source: '/query-engines/self-hosted-query-engine',
        destination: '/query-engines/self-hosted',
        permanent: false
      },
      {
        source: '/vizzly-config-ci',
        destination: '/query-engines/self-hosted/github-actions-ci',
        permanent: false
      },
      {
        source: '/callbacks/identity',
        destination: '/dashboard/callbacks/identity',
        permanent: false
      },
      {
        source: '/callbacks/loadDataCallback',
        destination: '/dashboard/callbacks/loadDataCallback',
        permanent: false
      },
      {
        source: '/callbacks/loadDataSetsCallback',
        destination: '/dashboard/callbacks/loadDataSetsCallback',
        permanent: false
      },
      {
        source: '/callbacks/runQueriesCallback',
        destination: '/dashboard/callbacks/runQueriesCallback',
        permanent: false
      },
      {
        source: '/feature-toggles',
        destination: '/dashboard/feature-toggles',
        permanent: false
      },
      {
        source: '/react-component',
        destination: '/dashboard',
        permanent: false
      },
      {
        source: '/theme',
        destination: '/dashboard/theme',
        permanent: false
      },
      {
        source: '/manage-dashboards',
        destination: '/dashboard/management',
        permanent: false
      },
      {
        source: '/performance',
        destination: '/query-engines/self-hosted/performance',
        permanent: false
      },
      {
        source: '/dashboard/callbacks/identity',
        destination: '/dashboard/properties/identity',
        permanent: false
      },
      {
        source: '/dashboard/callbacks/runQueriesCallback',
        destination: '/dashboard/properties/runQueries',
        permanent: false
      },
      {
        source: '/dashboard/callbacks/loadDataCallback',
        destination: '/dashboard/properties/data',
        permanent: false
      },
      {
        source: '/dashboard/callbacks/loadDataSetsCallback',
        destination: '/dashboard/properties/dataSets',
        permanent: false
      }
    ]
  }
};

module.exports = withNextra(nextJsConfig);
