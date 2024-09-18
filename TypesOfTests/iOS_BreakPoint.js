import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        {
            duration: '2h',
            target: 100000
        },

    ]
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1);

}

//== REMEMEBER ==
/**
 * ?.  the primary purpose and nature of a breakpoint test
 * - A breakpoint test in k6 is performed to determine the maximum capacity of an application by gradually ramping up the load to a high value until the application starts breaking, and it usually needs to be stopped manually when issues arise.
 * 
 * ?. Why is it advisable to avoid running breakpoint tests in elastic cloud environments when using tools like k6?
 * - Running a breakpoint test in an elastic environment can lead to unlimited scaling, primarly determinimg the limits of you cloud billing,m rather than the actual application limits.
 * 
 * ?. the duration of a breakpoint test
 * - The duration of a breakpoint test is indefinite, often requiring manual interventionto stop based on application performancemetrics and behavior.
 * 
 * ?. Before conducting a breakpoint test, which of the following prerequisites should ideally be met to ensure accurate and meaningful results?
 * - Ensure that the application has already successfully undergone load and and stress testing to establish a performace baseline.
 * 
 * 
 * 
 */