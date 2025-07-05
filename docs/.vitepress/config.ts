import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'MineHint Docs',
    description: 'MineHint Documentation',
    base: '/',
    cleanUrls: true,
    outDir: './dist',
    lastUpdated: true,
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
    ],
    themeConfig: {
        logo: '/logo.png',
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
