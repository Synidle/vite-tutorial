import { defineConfig } from 'vite';


export default defineConfig({
    base: "https://synidle.github.io/vite-tutorial/",
    build: {
        outDir: '../docs',
        emptyOutDir: true,
    }
})