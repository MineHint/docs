import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'docs',
    base: '/',
    vite: {
        server: {
            port: 80
        }
    }
})
