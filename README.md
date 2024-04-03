# API Test Suite

This repository contains test scripts for testing the RESTful API endpoints using Postman.

## Testing Observations

### CreateBooking API
- **totalprice:** Negative numbers are accepted without error. Empty string results in a successful request, treated as null.
- **depositpaid:** Leaving the field empty defaults to false and the request is successful. Non-boolean numeric values (e.g., 6) are accepted and treated as true.
- **checkin and checkout:** Accepts different date formats but results in "NaN" if not in the expected format (year-month-day).

### UpdateBooking API
- Observations for UpdateBooking API are similar to those for CreateBooking API.

## Test Cases

Test cases for CreateBooking, UpdateBooking, and DeleteBooking APIs are available in the attached file for download. Please refer to the provided file for detailed test cases.

[Download Test Cases] Tasks_1_and_2_+_Bonus_Tasks.zip - file name: Task1 TestCases

## Bonus Task
- Verify that the API has successfully created a new booking with valid input data for all fields.
- Verify that the API successfully updates a booking with valid input data for all fields.
- Verify that the API returns a successful response confirming the deletion of the booking.

Automating these test cases ensures that core functionalities of creating, updating, and deleting bookings are working as expected.

## Prerequisites
- Postman installed on your machine.

## Running the Tests
1. Download the ZIP file containing the test scripts - Tasks_1_and_2_+_Bonus_Tasks.zip
2. Extract the contents of the ZIP file.
3. Import the extracted collection into Postman - file name: Bookings collection
4. Run the collection in Postman to execute the tests.

## Smoke Tests and bugs
To ensure basic functionality and stability, smoke tests and bugs for https://pulse.eco/ are available.
[Download Smoke Tests and bugs] Tasks_1_and_2_+_Bonus_Tasks.zip - file name: Task2 SmokeTests Bugs

## Playwright UI Tests
This repository contains UI tests for https://pulse.eco/ using Playwright.

### Prerequisites
- Visual Studio installed on your machine
- Node.js installed on your machine.
- Playwright installed globally (`npm install -g playwright`).

### Running the Tests
1. Navigate to the `tests` directory containing Playwright test scripts.
2. Run the Playwright tests using the command line (npx playwright test) or your preferred test runner.

### CI Pipeline
1. Navigate to Actions from the navigation bar.
2. A new run is available after a new commit.
3. You can view the results by clicking on the last commit, clicking on test, expand Run Playwright tests.
