import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        {
            duration: '5m',
            target: 10
        },
        {
            duration: '30m',
            target: 10
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
 * A Load test: we are testing the application under a typical load 
 * 
 * ?. When designing a load test using k6, which of the following statements best reflects the key considerations and practices for simulating a typical load?
 * - A typical average-load test has 3 stages: rump-up, steady load, and ramp-down. Fro a test lasting 30 minuntes, a 5-minute ramp-up period is recommended, followe by maintaining the desired load for 20 minutes, and then a 5-minute ramp-down period.
 * 
 * ?. Why is a ramp-up stage crucial in a load test?
 * - To give the system time to warm up or auto-scale, allowing fo a more realistic simulation of how users typically behave, increasing gradually rather than all at once.
 * 
 * ?. You are designing a load test with a total duration of 60 minutes using k6. Based on best practices for simulating typical load, how should you ideally distribute the duration for the ramp-up and ramp-down stages?
 * - Ramp-up for 5 minutes, maintain the load for 50 mionutes, and then ramp-down for 5 minutes.
 * 
 * ?. When designing a load test for an application, determining the target value for the number of concurrent users is crucial. How should you ideally establish this target value for simulating a typical load in your tests?
 * - Determine the target value by referencsing Application Performance Monitoring (APM) tools or analytic tools that provide information from the production environment, or use business-provided estimation if such tools are not accessible.
 * 
 * ?.In the context of load testing with k6, why is it recommended to run a load test on a pre-production environment that closely mimics the production environment?
 * - To avoid affecting real users and potentially degrading the performance of the applicaion for them, while also ensuring that test results reflect real-world performance as closelly as possible.
 * 
 */