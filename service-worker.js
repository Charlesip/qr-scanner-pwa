self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('qr-scanner').then(cache => cache.addAll([
            '/',
            '/index.html',
            'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js'
        ]))
    );
});