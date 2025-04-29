// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config = {
  title: 'Awesome Docusaurus',
  tagline: 'Dinosaurs thật tuyệt vời!',
  favicon: 'img/favicon.ico',

  // --- Cấu hình URL và BaseURL ---
  url: 'https://nguyenhaiha1988.github.io',  // Địa chỉ GitHub Pages
  baseUrl: '/nguyenhaiha1988/',              // Base URL theo tên repo

  // --- Thêm phần cần thiết để deploy từ nhánh main ---
  organizationName: 'nguyenhaiha1988', // GitHub username
  projectName: 'nguyenhaiha1988',       // Tên repo
  deploymentBranch: 'main',             // <- THÊM DÒNG NÀY

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    require.resolve('docusaurus-lunr-search'),
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cong-nghe',
        path: 'cong-nghe',
        routeBasePath: 'cong-nghe',
        sidebarPath: require.resolve('./sidebars-cong-nghe.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'phat-trien-ban-than',
        path: 'phat-trien-ban-than',
        routeBasePath: 'phat-trien-ban-than',
        sidebarPath: require.resolve('./sidebars-phat-trien-ban-than.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sach-hay',
        path: 'sach-hay',
        routeBasePath: 'sach-hay',
        sidebarPath: require.resolve('./sidebars-sach-hay.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'blog-hoc-tap',
        path: 'blog-hoc-tap',
        routeBasePath: 'blog-hoc-tap',
        showReadingTime: true,
        blogTitle: 'Học Tập Blog',
        blogDescription: 'A blog focused on educational content',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl:
            'https://github.com/nguyenhaiha1988/nguyenhaiha1988/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/nguyenhaiha1988/nguyenhaiha1988/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    announcementBar: {
      id: 'image_banner',
      content:
        '<a href="https://vnstocks.com/lp-khoa-hoc-python-chung-khoan"><img src="https://vnstocks.com/img/python_chung_khoan_banner.png" alt="Banner" class="announcement-bar-image" /></a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },

    image: 'img/docusaurus-social-card.jpg',

    mermaid: {
      theme: {light: 'neutral', dark: 'forest'},
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    navbar: {
      title: 'Awesome Docusaurus',
      logo: {
        alt: 'Awesome Docusaurus Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Hướng dẫn',
        },
        {to: '/markdown-page', label: 'Trang Markdown', position: 'left'},
        {
          label: 'Multi-Docs',
          position: 'left',
          items: [
            {label: 'Công Nghệ', to: '/cong-nghe/intro'},
            {label: 'Phát Triển Bản Thân', to: '/phat-trien-ban-than/intro'},
            {label: 'Sách Hay', to: '/sach-hay/intro'},
          ],
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/blog-hoc-tap', label: 'Blog Học Tập', position: 'left'},
        {
          href: 'https://github.com/nguyenhaiha1988/nguyenhaiha1988',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{label: 'Tutorial', to: '/docs/intro'}],
        },
        {
          title: 'Community',
          items: [
            {label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus'},
            {label: 'Discord', href: 'https://discordapp.com/invite/docusaurus'},
            {label: 'X', href: 'https://x.com/docusaurus'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Blog', to: '/blog'},
            {label: 'GitHub', href: 'https://github.com/nguyenhaiha1988/nguyenhaiha1988'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Awesome Docusaurus, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
