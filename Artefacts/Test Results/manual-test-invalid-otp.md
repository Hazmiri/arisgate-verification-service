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

## Summary
The API correctly rejected the invalid OTP. The response confirmed that verification failed, and the order should remain unverified in the database.

---

## Test case

| Test ID | What was tested | Endpoint | Input | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|
| OTP-NEG-01 | Reject incorrect OTP | `POST /v1/orders/<orderId>/confirm-otp` | `{ "otpCode": "000000" }` | API should reject the OTP, return an invalid message, and keep `otpVerified` as `false` | API rejected the OTP and did not confirm verification | Pass |

---

## Evidence files
Suggested supporting screenshots:
- Postman screenshot showing invalid OTP request
- Postman screenshot showing invalid OTP response
- MongoDB screenshot showing order still not verified

---

## Reflection on the result
This negative test is important because a verification system is only credible if it rejects incorrect codes as well as accepting correct ones. It shows that the OTP logic is not only functional in the success path but also behaves correctly when invalid input is submitted.