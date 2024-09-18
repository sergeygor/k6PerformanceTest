// Smoke test. Test with minimum load, just like BWT, good for base line 

import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 1,
    duration: '10s'
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1);
    http.get('https://test.k6.io/contacts.php');
    sleep(2);
    http.get('https://test.k6.io/news.php');
    sleep(2);
}

// == REMEMBER ==
/**
 * 
 * Question 1:
 * ?. Describe the purpose and characteristics of a smoke test when it comes to performance testing with k6
 * - A smoke test is run with a minimal load, typically using 1 to 3 virtual users(VUs) for a short duration (from 30 seconds to a few minutes) to verify that the test script and the application are funtioning and to establish baseline performace values.
 * 
 * ?. Goal of performing a smoke test using k6
 * - Verify basic functionality.
 * 
 * ?. When should a team consider running a smoke test using k6?
 * - Whenever a test script is updated.
 * 
 * ?. In the context of a smoke test using k6, how should throughput and duration typically be configured?
 * - Low throughput, brief duration.
 * 
 * ?. After running a smoke test using k6, what should be your next step if you observe script-related errors or poor performance?
 * - Correct the script or fix the environment and re-run the smoke test.
 * 
 */