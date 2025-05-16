// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gowall Docs',
  tagline: 'A bunch of cool image processing features',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://Achno.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/gowall-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Achno', // Usually your GitHub org/user name.
  projectName: 'gowall-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',

        },
        blog: {
          showReadingTime: true,
          postsPerPage: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Gowall',
        logo: {
          alt: 'My Site Logo',
          src: 'img/go-sticker.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/Achno/gowall',
            alt: 'github Logo',
            className: 'header-github-link',
            position: 'right',
          },
          {
            to: 'blog', label: 'Blog', position: 'left'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview of Features',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'You can only find me on github',
                href: 'https://github.com/Achno',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'See my other projects',
                to: 'https://github.com/Achno/gocheat',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Achno',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} gowall, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash'],
      },
    }),
};

export default config;
