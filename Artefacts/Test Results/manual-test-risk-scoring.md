# Manual Test – Risk Scoring

## Test 1 – Valid order
Input:
- name: John Doe
- phone: +97155555555
- address: Dubai Marina

Expected result:
- riskScore = 0

Actual result:
- riskScore = 0

Status:
- Pass

## Test 2 – Suspicious order
Input:
- name: A
- phone: 123
- address: X

Expected result:
- riskScore = 100

Actual result:
- riskScore = 100

Status:
- Pass

# Manual Test Note – OTP Workflow

## Date
22 April 2026

## Project
ArisGate – Cash on Delivery Verification Microservice

## Feature tested
Simulated OTP / 2FA workflow for order verification

## Test environment
- Local API running on `http://localhost:4000`
- Backend: Node.js, Express, MongoDB Atlas
- Testing tool: Postman
- Database checked in MongoDB Atlas under `arisgate > orders`

## Purpose of this test
This test was carried out to confirm that the ArisGate backend can:
1. create a new order verification record,
2. generate an OTP for that order,
3. verify the OTP correctly,
4. update the order record in MongoDB.

## Summary
The OTP workflow operated successfully from end to end. A new order was created, an OTP was generated, the OTP was confirmed correctly, and the MongoDB record was updated to show `otpVerified: true` and `status: "otp_verified"`.

---

## Test cases

| Test ID | What was tested | Endpoint | Input | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|
| OTP-01 | Create order verification record | `POST /v1/orders/verify` | `{ "name": "John Doe", "phone": "+97155555555", "address": "Dubai Marina" }` | API should create a new order, return `verification_started`, return an `orderId`, and set `riskScore` to `0` | API returned status `verification_started`, `orderId: 69e83f7ff20ddfa580e0b75d`, and `riskScore: 0` | Pass |
| OTP-02 | Generate OTP for created order | `POST /v1/orders/69e83f7ff20ddfa580e0b75d/send-otp` | No body required | API should generate a 6-digit OTP, store it against the order, and update status to `otp_sent` | API returned `otpCode: 547771` and `status: "otp_sent"` | Pass |
| OTP-03 | Confirm correct OTP | `POST /v1/orders/69e83f7ff20ddfa580e0b75d/confirm-otp` | `{ "otpCode": "547771" }` | API should mark OTP as verified and update status to `otp_verified` | API returned `otpVerified: true` and `status: "otp_verified"` | Pass |
| OTP-04 | Check database update in MongoDB Atlas | MongoDB Atlas – `arisgate > orders` | Open saved order record by `_id` | Record should contain OTP value, verified flag, and updated status | MongoDB record showed `otpCode: "547771"`, `otpVerified: true`, and `status: "otp_verified"` | Pass |

---

## Evidence files
The following screenshots support this test note:

- Postman screenshot showing successful order creation
- Postman screenshot showing OTP generation
- Postman screenshot showing OTP confirmation
- MongoDB Atlas screenshot showing updated order record

If kept with your current filenames, link them to this note in the same folder structure.

---

## Reflection on the result
This test shows that the OTP simulation layer is working as intended and that the ArisGate backend now supports a basic two-step verification process. This is important because the project proposal is based on reducing risky COD orders through extra verification before fulfilment. The test also showed that the order state changes correctly across the workflow, which makes the logic easier to analyse and explain in the final portfolio.