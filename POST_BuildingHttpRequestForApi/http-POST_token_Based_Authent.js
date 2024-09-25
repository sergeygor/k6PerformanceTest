import http from 'k6/http';
import { check } from 'k6';

// Collection of HTTP and WebSocket APIs for experimentation with k6.That this is a shared testing environment 
export default function () {

    const credetials = {
        username: 'test_' + Date.now(),
        password: 'secret_' + Date.now(),
    }

    let res_reg = http.post(
        'https://test-api.k6.io/user/register/',
        JSON.stringify(credetials),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    check(res_reg, {
        'res_reg tatus is 201': (r) => r.status === 201
    });

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

    const accessToken = res_log.json().access
    console.log('accessToken' + accessToken)

    check(res_log, {
        'res_logs tatus is 200': (r) => r.status === 200
    });

    let res_croc = http.get(
        'https://test-api.k6.io/my/crocodiles/',
        {
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        }
    );

    check(res_croc, {
        'res_croc status is 200': (r) => r.status === 200
    });

    console.log(res_croc)


}






// k6 run --http-debug="full"  http-POST_token_Based_Authent.js 