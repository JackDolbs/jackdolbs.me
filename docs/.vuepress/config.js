module.exports = {
  title: 'Jack Dolbs',
  description: 'I like to build things.',
  dest: 'public',
  plugins: [
    '@vuepress/last-updated',
    ['@vuepress/google-analytics', { ga: 'UA-93673521-3' }],
    ['@vuepress/search', { searchHotkeys: [] }],
  ],
  head: [
  [
  'link',
 {
rel: 'stylesheet',
href: 'styles/index.styl',
},
],
],
  themeConfig: {
    nav: [
      { text: 'Blog', link: '/blog/' },
      { text: 'Knowledge', link: '/knowledge/' },
      // { text: 'Subscribe', link: '#' },
      { text: 'X', link: 'https://x.com/jackdolbs' },
    ],
    sidebar: {
      '/blog/': [
        'hello-world',
      ],
      '/gists/': ['vscode-snippets', 'ecto-phoenix', 'kill-processes'],
      // '/levels/': ['business', 'life', 'leadership', 'learning', 'tech'],
      '/knowledge/': [
        // {
        //   title: 'Business Practices',
        //   collapsable: false,
        //   children: ['emyth', 'toyota-way'],
        // },
        {
          title: 'Miscellaneous',
          collapsable: false,
          children: [
            // list of name of md files here, formatted like this:
            //'chess',
           // 'climbing',
            //'consciousness',
           // 'languages',
            //'zoology',
          ],
        },
        {
          title: 'Business',
          collapsable: false,
          children: [
            // list of name of md files here, formatted like this:
            //'chess',
           // 'climbing',
            //'consciousness',
           // 'languages',
            //'zoology',
          ],
        },
        {
          title: 'Philosophy',
          collapsable: false,
          children: [
            // list of name of md files here, formatted like this:
            //'chess',
           // 'climbing',
            //'consciousness',
           // 'languages',
            //'zoology',
          ],
        },
        {
          title: 'People Of Interest',
          collapsable: false,
          children: [
            // list of name of md files here, formatted like this:
            //'chess',
           // 'climbing',
            //'consciousness',
           // 'languages',
            //'zoology',
          ],
        },
      ],
    },
    docsRepo: 'https://github.com/jackdolbs/jackdolbs.me/',
    docsDir: 'docs',
    editLinks: true,
  },
}
