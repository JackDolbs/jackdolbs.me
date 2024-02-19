module.exports = {
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://gitcdn.xyz/repo/kiwicopple/assets/master/public/css/circular.css',
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
      '/knowledge/': [
        {
          title: 'Miscellaneous',
          collapsable: false,
          children: [
            // list of name of md files here, formatted like this:
            //'chess',
            //'climbing',
            //'consciousness',
            //'languages',
            //'zoology',
          ],
        },
        {
          title: 'Business',
          collapsable: false,
          children: [
            // list of name of md files here, formatted like this:
            //'chess',
            //'climbing',
            //'consciousness',
            //'languages',
            //'zoology',
          ],
        },
        {
          title: 'Philosophy',
          collapsable: false,
          children: [
            // list of name of md files here, formatted like this:
            //'chess',
          ],
        },
      ],
    },
    docsRepo: 'https://github.com/JackDolbs/jackdolbs.me/tree/main/docs',
    docsDir: 'docs',
    editLinks: true,
  },
};