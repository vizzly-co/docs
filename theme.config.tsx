import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { frontMatter } = useConfig();
    return {
      titleTemplate: "%s – Vizzly",
      description:
        frontMatter.description || "Embed dashboards your users can customise",
    };
  },
  head: () => {
    const { asPath } = useRouter();
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/img/favicon.png" />
        <meta property="og:url" content={`https://docs.vizzly.co${asPath}`} />
      </>
    );
  },
  logo: <img src="/img/logo-white.png" style={{ width: "30px" }} />,
  project: {
    link: "https://github.com/vizzly-co/docs",
  },
  docsRepositoryBase: "https://github.com/vizzly-co/docs",
  footer: {
    component: null,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
};

export default config;
