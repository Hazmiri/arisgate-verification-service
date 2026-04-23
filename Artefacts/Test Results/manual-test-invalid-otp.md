# Manual Test Note – Invalid OTP Handling

## Date
22 April 2026

## Project
ArisGate – Cash on Delivery Verification Microservice

## Feature tested
Rejection of an incorrect OTP code during simulated 2FA verification

## Test environment
- Local API running on `http://localhost:4000`
- Backend: Node.js, Express, MongoDB Atlas
- Testing tool: Postman
- Database checked in MongoDB Atlas under `arisgate > orders`

## Purpose of this test
This test was carried out to confirm that ArisGate does not verify an order when the submitted OTP code is incorrect.

## Test case

| Test ID | What was tested | Endpoint | Input | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|
| OTP-NEG-01 | Reject incorrect OTP | `POST /v1/orders/69e9b3176a9d21230cf6aa11/confirm-otp` | `{ "otpCode": "000000" }` | API should reject the OTP, return an invalid message, and keep `otpVerified` as `false` | API returned an invalid OTP response and the order remained unverified | Pass |

## Supporting verification
After the failed OTP confirmation attempt, the order was retrieved using:

`GET /v1/orders/69e9b3176a9d21230cf6aa11`

The order still showed:
- `status: "otp_sent"`
- `otpVerified: false`

This confirmed that the incorrect OTP did not change the verification state.

## Evidence files
- `otp_invalid_post_response.png`
- `otp_invalid_get_status_after_failure.png`

## Reflection on the result
This negative test is important because a verification system must reject incorrect codes as reliably as it accepts valid ones. The result shows that the ArisGate OTP workflow preserves system integrity when the user submits an invalid code.