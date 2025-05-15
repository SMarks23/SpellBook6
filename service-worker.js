self.addEventListener("install", (event)=>{
    event.waitUntil(
        caches.open('pwa-cache').then((cache)=>{
            return caches.addAll([
                './',
                './index.html',
                './CSS/style_background.css',
                './CSS/style_feat.css',
                './CSS/style_general.css',
                './CSS/style_main.css',
                './CSS/style_modifier.css',
                './CSS/style_name.css',
                './CSS/style_species.css',
                './HTML/create_book.html',
                './JS/feat.js',
                './JS/modifier.js',
                './JS/species.js'
            ]);
        })
    );
});

self.addEventListener("fetch", (event)=>{
    event.respondWith(
        caches.match(event.request).then((response)=>{
            return response || fetch(event.request);
        })
    )
});