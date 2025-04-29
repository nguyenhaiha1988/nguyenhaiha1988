module.exports = {
  title: 'NHH', // Tên website của bạn
  tagline: 'Sống Đam Mê - Học Tập Trọn Đời', // Tagline của bạn
  url: 'https://nguyenhaiha1988.github.io', // URL của GitHub Pages
  baseUrl: '/nguyenhaiha1988/', // Tên repo của bạn
  favicon: 'img/favicon.ico',
  organizationName: 'nguyenhaiha1988', // GitHub username của bạn
  projectName: 'nguyenhaiha1988', // Tên repo của bạn
  themeConfig: {
    navbar: {
      title: 'NHH', // Tên website hiển thị trên navbar
      items: [
        {to: 'docs/intro', label: 'Docs', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {href: 'https://github.com/nguyenhaiha1988/nguyenhaiha1988', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/intro',
            },
          ],
        },
      ],
    },
  },
};
