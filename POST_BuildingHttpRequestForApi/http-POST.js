import http from 'k6/http';
import { check } from 'k6';

// Collection of HTTP and WebSocket APIs for experimentation with k6.That this is a shared testing environment 
export default function () {

    const body = JSON.stringify({
        username: 'test_' + Date.now(),
        password: 'test'
    });

    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    let res = http.post('https://test-api.k6.io/user/register/', body, params);
    const res_register = res.json();

    console.log(res_register);

    check(res, {
        'status is 201': (r) => r.status === 201
    });
}




// k6 run --http-debug="full"  http-POST.js 