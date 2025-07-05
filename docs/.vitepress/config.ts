import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'MineHint Docs',
    description: 'MineHint Documentation',
    base: '/',
    outDir: './dist',
    cleanUrls: true,
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
        }
    }
})
