import http from 'k6/http';

// Collection of HTTP and WebSocket APIs for experimentation with k6.That this is a shared testing environment 

export default function () {
    const res = http.get('https://test-api.k6.io/public/crocodiles/');

}

// k6 run http - GET.js
// k6 run --http-debug="full" http-GET.js