import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        {
            duration: '2m',
            target: 10000
        },

        {
            duration: '1m',
            target: 0
        }
    ]
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1);

}

// == REMEMBER ==
/**
 * ?. describes the typical duration of a spike test?
 * - A short duration with an abrupt increase in users to a peak level, followed by a swift decrease back to zero.
 * 
 * ?. Given the importance of preparing for sudden spikes in user traffic, which of the following best describes the purpose and characteristics of a spike test?
 * - To simulate a scenario where an application experiences a sudden and enormous increase in users, way beyond its normal traffic, without a significant ramp-up time. this test evalueates the system's ability to handle such abrupt load and how it recovers from it.
 * 
 * ?. configurations appears most realistic for simulating a sudden spike in users
 * -  {
            duration: '2m',
            target: 10000
        },

        {
            duration: '1m',
            target: 0
        }
 *
 * ?. describes the primary purpose of a spike test in performance testing?
 * - To assess the applications's vehavior and performance under sudden and massive surges in user traffic
 * 
 * ?. 
 *                   
 */