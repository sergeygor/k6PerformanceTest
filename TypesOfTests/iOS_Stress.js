import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        {
            duration: '5m',
            target: 20
        },
        {
            duration: '30m',
            target: 20
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



// == REMEMBER ==
/**
 * ?. What is the primary purpose of stress testing an application?
 * - To assess its performance under-than-usial loads
 * 
 * ?. In the context of performance testing, especially when using tools like k6, which of the following statements best describes a stress test?
 * - Stress testing assesses how the application performs when loads are heavier than usual, often using increased virtual users (VUs) and mimicking real-word rush-hour or surge situations.
 * 
 * ?. What differentiates between smoke, load, and stress tests?
 * - A smoke test verifies the basic functionality of an application without going in-depth, while a load test measures the system's performance under expected load, and a stress test assesses the application's behavior under heavier than usual or peak load conditions.
 * 
 * ?. differentiates between smoke, load, and stress tests?
 * - A stress test has a higher load compared to a load test.
 * 
 * ?. when should a stress test be executed in relation to a smoke test and a load test?
 * - After both the smoke test and the load test to assess performance under above-average conditions.
 */