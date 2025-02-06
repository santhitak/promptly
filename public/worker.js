const CACHE_NAME = "PROMPTLY_CACHE";

async function cacheCoreAssets() {
    const cache = await caches.open(CACHE_NAME);
    return cache.addAll([
        "/",
        "/pwa-icon.png",
        "/pwa-512-icon.png",
    ]);
}

self.addEventListener("install", (event) => {
    event.waitUntil(cacheCoreAssets());
    self.skipWaiting();
});

async function clearOldCaches() {
    const cacheNames = await caches.keys();
    return Promise.all(
        cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name))
    );
}

self.addEventListener("activate", (event) => {
    event.waitUntil(clearOldCaches());
    self.clients.claim();
});

async function dynamicCaching(request) {
    const cache = await caches.open(CACHE_NAME);

    try {
        const response = await fetch(request);
        const responseClone = response.clone();
        await cache.put(request, responseClone);
        return response;
    } catch (error) {
        console.error("Dynamic caching failed:", error);
        return caches.match(request);
    }
}

self.addEventListener("fetch", (event) => {
    const {request} = event;

    event.respondWith(dynamicCaching(request));
});