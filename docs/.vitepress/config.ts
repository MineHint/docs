import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'docs',
    base: '/docs/'.
    vite: {
        server: {
            port: 80
        }
    }
})
