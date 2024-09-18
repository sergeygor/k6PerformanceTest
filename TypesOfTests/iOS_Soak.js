import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        {
            duration: '5m',
            target: 1000
        },
        {
            duration: '12h', // usually between 12 and 24 hours
            target: 1000
        },
        {
            duration: '5m',
            target: 0
        }
    ]
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1);
    http.get('https://test.k6.io/contacts.php');
    sleep(2);
    http.get('https://test.k6.io/news.php');
    sleep(2);
}


// == REMEMEBER ==
/**
 * ?. the primary purpose of a soak test in the context of performance testing
 * - To identify issues like memory leaks and resource depletion that may only appear after prolonged periods of continuous use.
 * 
 * ?. Which statement correctly differentiates between a soak test and a load test?
 * - A load test examines the system's behavior under typical usage patterns, while a soak test extends the duration to identify potential long-term performance issue.
 * 
 * ?.How does the load applied to the application generally compare between a load test and a soak test in performance testing?
 * - The load applied in generally the same between a load test and a soak test
 * 
 */