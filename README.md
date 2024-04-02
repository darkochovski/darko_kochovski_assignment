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

## Bonus Tasks
- Verify that the API has successfully created a new booking with valid input data for all fields.
- Verify that the API successfully updates a booking with valid input data for all fields.
- Verify that the API returns a success response confirming the deletion of the booking.

Automating these test cases ensures that core functionalities of creating, updating, and deleting bookings are working as expected.

## Prerequisites
- Postman installed on your machine.

## Running the Tests
1. Download the ZIP file containing the test scripts - Tasks_1_and_2_+_Bonus_Tasks.zip
2. Extract the contents of the ZIP file.
3. Import the extracted collection into Postman - file name: Bookings collection
4. Run the collection in Postman to execute the tests.