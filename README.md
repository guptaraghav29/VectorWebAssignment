# VectorWebAssignment
Hi! This is Raghav Gupta's web assignment for Vector.

# Steps to Run
1. In your local terminal, run `git clone https://github.com/guptaraghav29/VectorWebAssignment.git`
2. Navigate to the cloned folder and run `npm install`. This will install the node_modules within this directory and make sure it has all the latest dependencies. Make sure you are on the latest node and npm version.
3. To run the test suite within the terminal, run `npm run test-chrome`  OR  `npm run test-firefox`  OR  `npm run test-safari`. These allow you to run the test suite per browser.
4. To see a visual UI representation of these automation tests in real time, run `npx cypress open`. Alternatively, if you have yarn, you can even run `yarn cypress open`. Once the Cypress window pops up, select the `E2E Testing` option and choose the browser of your choice. Cypress displays browsers that are currently installed on your machine. Then to run the tests, click on the `Tests.cy.js` file in the specs panel, and the tests will begin to run!
5. HTML Reports and Screenshots are only viewable when running cypress locally in the terminal. To view these files, run cypress in the terminal using one of the commands above such as `npm run test-chrome`. Test reports are generated at the path `vectorwebassignment/cypress/reports/index.html`. You can view this file by opening it up on your local browser.   

**Note: Cypress doesn't currently include the option to run the tests on Safari, which is why I am testing using Chrome, Firefox, and Edge. 



# USPS Postage Calculator
Postage Calculator: `https://postcalc.usps.com/`

# References
Cypress Documentation: `https://docs.cypress.io`

# Test Case:
A client would like to ship `25 lbs` of devices equipment from `Austin (ZIP code 78727)` to `San Francisco (ZIP code 94107)`.

There are 3 types of Home Depot Moving boxes that can be used for shipping:
- Small - (16 in. L x 12 in. W x 12 in. D)
- Medium -  (22 in. L x 16 in. W x 15 in. D)
- Large - (28 in. L x 15 in. W x 16 in. D)

Using USPS Retail Postage Calculator, please `Calculate price based on Shape and Size` for the `USPS Retail Ground, Retail price` for each box type.

# Assignment Requirements:
1. If the price is higher than $80 - the test should fail. If the price is less than $80 - the test passes.

2. Also, validate that there are images present on the final “Mail Services” page.

3. Please run automation tests on at least 2 browsers.
(Chrome and IE/Edge for Windows, Chrome and Safari for Mac)

4. Please provide a report for each run in .html format.

5. Bonus points if your automation tests can grab a screenshot for failed tests.