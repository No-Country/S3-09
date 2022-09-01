import { defineConfig } from 'vite';
import path from "node:path"
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@styles': path.resolve(__dirname, './src/styles'),
            '@components': path.resolve(__dirname, './src/components'),
            '@containers': path.resolve(__dirname, './src/containers'),
            '@icons': path.resolve(__dirname, './src/assets/icons'),
            '@pages': path.resolve(__dirname, './src/pages'),
        },
    },
    plugins: [react()],
});
