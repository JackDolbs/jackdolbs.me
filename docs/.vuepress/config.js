module.exports = {
  title: 'Paul Copplestone',
  description: 'Techie and entrepreneur',
  dest: 'public',
  plugins: [
    '@vuepress/last-updated',
    ['@vuepress/google-analytics', { ga: 'UA-93673521-3' }],
    ['@vuepress/search', { searchHotkeys: [] }],
  ],
  // head: [
  //   [
  //     'link',
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://gitcdn.xyz/repo/kiwicopple/assets/master/public/css/circular.css',
  //     },
  //   ],
  // ],
  themeConfig: {
    nav: [
      { text: 'Blog', link: '/blog/' },
      { text: 'Knowledge', link: '/knowledge/' },
      { text: 'Subscribe', link: 'http://eepurl.com/dE68jj' },
      { text: 'Twitter', link: 'https://twitter.com/kiwicopple' },
    ],
    sidebar: {
      '/blog/': [
        'how-devtools-die',
        'friction-logs',
        'why-open-source',
        'profit-sharing',
        'realtime-user-store',
        'why-nations-succeed',
        'agile',
        'design',
        'how-to-learn',
        'nimbus-tech-2019-04',
        'augmented-reality',
        'email-to-a-friend',
        'dividing-equity',
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
            'chess',
            'climbing',
            'consciousness',
            'languages',
            'mathematics',
            'meditation',
            'mimetic-theory',
            'music',
            'physics',
            'public-speaking',
            'pyrolysis',
            'relationships',
            'soil',
            'space',
            'trees',
            'writing',
            'zoology',
          ],
        },
        {
          title: 'Tech',
          collapsable: false,
          children: [
            'tech/awesome-list',
            'tech/bash-profile',
            'tech/docker',
            'tech/html-cheatsheet',
            'tech/mental-models',
            'tech/postgresql',
            'tech/postgres-data',
            'tech/regex',
            'tech/secrets-management-sops',
            'tech/seo',
            'tech/today-i-learned',
            'tech/vscode-snippets',
          ],
        },
        {
          title: 'Business',
          collapsable: false,
          children: [
            'business/hiring',
            'business/management',
            'business/sales',
            'business/marketing',
            'business/fundraising',
            'business/resources',
          ],
        },
        {
          title: 'Levels',
          collapsable: false,
          children: ['levels/business', 'levels/life', 'levels/leadership', 'levels/learning'],
        },
        {
          title: 'Philosophy',
          collapsable: false,
          children: [
            'philosophy/ethics',
            'philosophy/buddhism',
            'philosophy/stoicism',
            'philosophy/desire',
          ],
        },
        {
          title: 'People',
          collapsable: false,
          children: [
            'people',
            'people/lee-kuan-yew',
            'people/marlon-brando',
            'people/nelson-mandela',
          ],
        },
        // {
        //   title: 'Physics',
        //   collapsable: false,
        //   children: ['time'],
        // },
      ],
    },
    docsRepo: 'https://github.com/kiwicopple/paul.copplest.one/',
    docsDir: 'docs',
    editLinks: true,
  },
}
