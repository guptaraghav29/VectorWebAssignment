# VectorWebAssignment
Hi! This is Raghav Gupta's web assignment for Vector.

# References
Cypress Documentation: `https://docs.cypress.io`

# Steps to Run
npm install cypress --save-dev
npm install -D @cypress/code-coverage
npm install --save-dev playwright-webkit

# USPS Postage Calculator
Postage Calculator: `https://postcalc.usps.com/`


# Test Case:
A client would like to ship `25 lbs` of devices equipment from `Austin (ZIP code 78727)` to `San Francisco (ZIP code 94107)`.

There are 3 types of Home Depot Moving boxes that can be used for shipping:
- Small - (16 in. L x 12 in. W x 12 in. D)
- Medium -  (22 in. L x 16 in. W x 15 in. D)
- Large - (28 in. L x 15 in. W x 16 in. D)

Using USPS Retail Postage Calculator, please `Calculate price based on Shape and Size` for the `USPS Retail Ground, Retail price` for each box type. (Choose any shipping date in March).



# Test Requirements:
1. If the price is higher than $80 - the test should fail. If the price is less than $80 - the test passes.

2. Also, validate that there are images present on the final “Mail Services” page.

3. Please run automation tests on at least 2 browsers.
(Chrome and IE/Edge for Windows, Chrome and Safari for Mac)

4. Please provide a report for each run in .html format.

5. Bonus points if your automation tests can grab a screenshot for failed tests.

6. Test cases/test scenarios/step definitions for the USPS calculator workflow.