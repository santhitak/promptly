import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Promptly',
        short_name: 'Promptly',
        description: 'Promptly prompts',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/pwa-icon.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/pwa-512-icon.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}