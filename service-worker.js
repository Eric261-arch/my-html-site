// Budget Mate Service Worker for Mobile Notifications
// Save this as: service-worker.js

self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated');
    event.waitUntil(self.clients.claim());
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
    console.log('Notification clicked:', event.notification.tag);
    event.notification.close();
    
    // Open/focus the app
    event.waitUntil(
        clients.openWindow('/')
    );
});
