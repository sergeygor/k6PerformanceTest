import http from 'k6/http';
import { check } from 'k6';

// Collection of HTTP and WebSocket APIs for experimentation with k6.That this is a shared testing environment 
export default function () {

    const credetials = {
        username: 'test_' + Date.now(),
        password: 'secret_' + Date.now(),
    }

    http.post(
        'https://test-api.k6.io/user/register/',
        JSON.stringify(credetials),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    let res_log = http.post
        ('https://test-api.k6.io/auth/token/login/',
            JSON.stringify
                (
                    {
                        username: credetials.username,
                        password: credetials.password
                    }
                ),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

    const accessToken = 'access Token : ' + res_log.json().access
    console.log(accessToken)

    check(res_log, {
        'status is 200': (r) => r.status === 200
    });


}






// k6 run --http-debug="full"  http-POST.js 