import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                album: resolve(__dirname, 'pages/album/index.html'),
                artists: resolve(__dirname, 'pages/artists/index.html'),
                profil: resolve(__dirname, 'pages/profil/index.html'),
                search: resolve(__dirname, 'pages/search/index.html'),
                signin: resolve(__dirname, 'pages/signin/index.html'),
                tracks: resolve(__dirname, 'pages/tracks/index.html')
            },
        },
    },
})