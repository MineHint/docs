import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'MineHint Docs',
  description: 'MineHint Documentation',
  base: '/',
  cleanUrls: true,
  outDir: './dist',
  lastUpdated: true,
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'author', content: 'MineHint' }],
    ['meta', { property: 'og:title', content: 'MineHint Docs' }],
    ['meta', { property: 'og:description', content: 'Documentation for Minecraft' }],
    ['meta', { property: 'og:image', content: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#32a877' }],
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    sidebar: [
      {
        text: 'Java Edition',
        collapsible: true,
        collapsed: true,
        items: [],
      },
      {
        text: 'Bedrock Edition',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Scripting API',
            items: [
              { text: 'Minecraft Module', link: '/MCBE/scripting-api/module.md' },
            ]
          },
        ]
      },
      {
        text: 'Education Edition',
        collapsible: true,
        collapsed: true,
        items: []
      }
    ],
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/kQWYfkeTrn' },
      { icon: 'github', link: 'https://github.com/MineHint/docs' }
    ],
    search: {
      provider: "local"
    },
    editLink: {
      pattern: 'https://github.com/MineHint/docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: '© 2025 MineHint'
    }
  }
})
