import http from 'k6/http';
import { check } from 'k6';
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js'; // https://grafana.com/docs/k6/latest/javascript-api/jslib/utils/ 

// Collection of HTTP and WebSocket APIs for experimentation with k6.That this is a shared testing environment 

export const options = {
    vus: 5,
    duration: '20s'
}

export default function () {

    const credentials = {
        username: 'test_' + randomString(8),
        password: 'secret_' + randomString(8),
    }

    console.log(credentials);

    http.post(
        'https://test-api.k6.io/user/register/',
        JSON.stringify(credentials),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
}





// k6 run randomStringFunction.js 