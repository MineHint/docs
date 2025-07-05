import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'MineHint Docs',
    description: 'MineHint Documentation',
    base: '/',
    vite: {
        server: {
            port: 80
        }
    },
    outDir: './dist',
    cleanUrls: true,
})
