# Master Test Matrix – ArisGate

## Date
23 April 2026

## Purpose
This file provides a single overview of the main tests completed for the ArisGate prototype. It brings together the manual test notes, API responses, and MongoDB evidence so that an assessor can quickly understand what was tested, what the expected outcome was, what actually happened, and where the proof is stored.

---

## Test Summary Table

| Test ID | Feature | Test description | Expected result | Actual result | Status | Evidence files | Detailed note |
|---|---|---|---|---|---|---|---|
| RISK-01 | Risk scoring | Submit a valid order with complete details | `riskScore` should be `0` | API returned `riskScore: 0` | Pass | `postman_valid_order_riskscore_0.png`, `mongodb_orders_collection_with_riskscores.png` | `manual-test-risk-scoring.md` |
| RISK-02 | Risk scoring | Submit a suspicious order with short name, short phone, and short address | `riskScore` should be `100` | API returned `riskScore: 100` | Pass | `postman_valid_order_riskscore_100.png`, `mongodb_orders_collection_with_riskscores.png` | `manual-test-risk-scoring.md` |
| OTP-01 | OTP workflow | Create order before OTP is generated | API should create order and return `verification_started` | API returned status `verification_started` with valid `orderId` | Pass | `otp_01_create_order.png` | `manual-test-otp-workflow.md` |
| OTP-02 | OTP workflow | Generate OTP for created order | API should return a 6-digit OTP and status `otp_sent` | API returned OTP and `status: "otp_sent"` | Pass | `otp_04_send_order.png` | `manual-test-otp-workflow.md` |
| OTP-03 | OTP workflow | Confirm correct OTP | API should verify OTP and update status to `otp_verified` | API returned `otpVerified: true` and `status: "otp_verified"` | Pass | `otp_05_confirm_order.png`, `otp_07_mongodb_order.png` | `manual-test-otp-workflow.md` |
| OTP-NEG-01 | Invalid OTP handling | Submit an incorrect OTP code | API should reject request and keep order unverified | API returned `400 Bad Request`, `message: "Invalid OTP"`, `otpVerified: false` | Pass | `otp_invalid_response.png` | `manual-test-invalid-otp.md` |
| OTP-NEG-02 | Invalid OTP handling | Check order after failed OTP attempt | Order should remain `otp_sent` and `otpVerified: false` | GET endpoint showed order unchanged after failed verification | Pass | `mongodb_otp_not_verified.png`, `test_order_status_endpoint.png` | `manual-test-invalid-otp.md` |
| STATUS-01 | Status endpoint | Retrieve order by ID | API should return current order state and stored fields | API returned order details including `status`, `riskScore`, `otpVerified`, and `otpCode` | Pass | `test_order_status_endpoint.png`, `test_order_status_endpoint_1.png` | `manual-test-order-status-endpoint.md` |
| LBS-01 | Address validation | Submit a realistic address | API should classify address as `valid` with high confidence | API returned `addressValidation: "valid"` and `locationConfidence: 90` | Pass | `valid_address_validation_test.png` | `manual-test-address-validation.md` |
| LBS-02 | Address validation | Submit an invalid short address | API should classify address as `invalid` with low confidence | API returned `addressValidation: "invalid"` and `locationConfidence: 10` | Pass | `Invalid_address_validation_test.png` | `manual-test-address-validation.md` |
| DEC-01 | Decision engine | Evaluate order before OTP verification | API should not approve the order and should request review | API returned `verificationDecision: "manual_review"` with reason `OTP has not been verified` | Pass | `decision_manual_review.png` | `manual-test-decision-engine.md` |
| DEC-02 | Decision engine | Evaluate order after OTP verification and valid profile | API should approve the order | API returned `verificationDecision: "approved"` with acceptable risk explanation | Pass | `decision_approved.png` | `manual-test-decision-engine.md` |

---

## Notes on evidence quality
- All API tests were performed manually in Postman.
- Database persistence was checked in MongoDB Atlas.
- Tests include both positive and negative paths.
- The current test set covers order creation, scoring, OTP generation, OTP confirmation, invalid OTP rejection, order status retrieval, address validation, and final decision evaluation.

## Current limitations
- These tests are manual rather than automated.
- The OTP service is simulated rather than integrated with a live SMS provider.
- The address validation service is currently rule-based and not yet connected to a live geolocation API.

## Overall interpretation
The test matrix shows that the current ArisGate prototype is functional across its core verification workflow. The evidence demonstrates that the system can create orders, assign risk, generate and verify OTPs, reject incorrect OTPs, classify address quality, and produce a final verification decision. This gives a strong working base for the final portfolio even though some services remain prototype-level rather than production-ready.