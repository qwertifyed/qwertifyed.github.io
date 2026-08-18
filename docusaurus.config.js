// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'qwertifyed Docs',
  tagline: 'Документация систем для Roblox',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://qwertifyed.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'qwertifyed', // Usually your GitHub org/user name.
  projectName: 'qwertifyed.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guard',
        path: 'systems/guard/docs',
        routeBasePath: 'guard',
        sidebarPath: './systems/guard/sidebars.js',
        editUrl: 'https://github.com/qwertifyed/qwertifyed.github.io/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'economy',
        path: 'systems/economy/docs',
        routeBasePath: 'economy',
        sidebarPath: './systems/economy/sidebars.js',
        editUrl: 'https://github.com/qwertifyed/qwertifyed.github.io/tree/main/',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'qwertifyed Docs',
        logo: {
          alt: 'qwertifyed Docs Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/', label: 'Главная', position: 'left'},
          {
            type: 'dropdown',
            label: 'Системы',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'guardSidebar',
                docsPluginId: 'guard',
                label: 'Guard',
              },
              {
                type: 'docSidebar',
                sidebarId: 'economySidebar',
                docsPluginId: 'economy',
                label: 'Economy',
              },
            ],
          },
          {
            href: 'https://github.com/qwertifyed/qwertifyed.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Системы',
            items: [
              {
                label: 'Guard',
                to: '/guard/',
              },
              {
                label: 'Economy',
                to: '/economy/',
              },
            ],
          },
          {
            title: 'Прочее',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/qwertifyed/qwertifyed.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} qwertifyed. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
