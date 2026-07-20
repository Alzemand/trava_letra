'use strict';

const CACHE_NAME = 'trava-letra-v1';
const ASSETS = [
    './',
    './index.html',
    './help.html',
    './manifest.webmanifest',
    './icons/icon-512.png',
    './font/LOVE-YOU.woff2',
    './font/LOVE-YOU.woff',
    './media/TICTAC.mp3',
    './media/ALARM.mp3',
    './media/BUTTON.mp3'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
            ))
            .then(() => self.clients.claim())
    );
});

// Cache primeiro (o jogo funciona 100% offline); atualiza o cache em segundo
// plano quando há rede.
self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    event.respondWith(
        caches.match(event.request).then(cached => {
            const fetched = fetch(event.request)
                .then(response => {
                    if (response.ok && new URL(event.request.url).origin === location.origin) {
                        const copy = response.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
                    }
                    return response;
                })
                .catch(() => cached);
            return cached || fetched;
        })
    );
});
