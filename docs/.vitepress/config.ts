import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'MineHint Docs',
    description: 'MineHint Documentation',
    base: '/docs/',
    vite: {
        server: {
            port: 80
        }
    },
    outDir: 'docs/.vitepress/dist',
    cleanUrls: true,
    rewrites: {
        '**/*.md': 'index.html'
    }
})
