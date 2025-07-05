import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'MineHint Docs',
    description: 'MineHint Documentation',
    base: '/',
    outDir: './dist',
    cleanUrls: true,
    themeConfig: {
        logo: '/logo.png',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/MineHint/docs' },
            { icon: 'discord', link: 'https://discord.gg/kQWYfkeTrn' }
        ]
    }
})
