import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: './src/index.js',
            name: 'Indicators',
            fileName: (format) => `indicators.${format}.js`,
            formats: ['es', 'umd']
        },
        rollupOptions: {
            external: []
        }
    }
});