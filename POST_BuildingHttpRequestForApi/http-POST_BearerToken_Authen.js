import http from 'k6/http';
import { check } from 'k6';

// Collection of HTTP and WebSocket APIs for experimentation with k6.That this is a shared testing environment 
export default function () {

    const credetials = {
        username: 'test_1727223579464',
        password: 'secret_1727223579464',
    }

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
    console.log('accessToken : ' + accessToken)

    check(res_log, {
        'res_logs tatus is 200': (r) => r.status === 200
    });

    let res_croc = http.post(
        'https://test-api.k6.io/my/crocodiles/',
        JSON.stringify
            (
                {
                    "name": "Random croc",
                    "sex": "M",
                    "date_of_birth": "1900-10-28"
                }
            ),
        {
            headers: {
                Authorization: 'Bearer ' + accessToken,
                'Content-Type': 'application/json'
            }
        }
    );


    const mycrocodil = res_croc.json();
    const mycrocodileId = mycrocodil.id;
    console.log(res_croc)
    console.log(mycrocodileId)


    check(res_croc, {
        'res_croc status is 201': (r) => r.status === 201

    });


    let res_my_croc = http.get(
        `https://test-api.k6.io/my/crocodiles/${mycrocodileId}/`,
        {
            headers:
            {
                Authorization: 'Bearer ' + accessToken
            }
        }
    );
    check(res_my_croc, {
        'res_croc status is 200': (r) => r.status === 200,
        'Crocodile is Random croc': (r) => r.json().name === 'Random croc'

    });



}






// k6 run --http-debug="full"  http-POST_BearerToken_Authen.js 