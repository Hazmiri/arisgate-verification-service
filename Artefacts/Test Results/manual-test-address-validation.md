# Manual Test Note – Address Validation Workflow

## Date
23 April 2026

## Project
ArisGate – Cash on Delivery Verification Microservice

## Feature tested
Mock LBS-based address quality validation during order verification

## Test environment
- Local API running on `http://localhost:4000`
- Backend: Node.js, Express, MongoDB Atlas
- Testing tool: Postman
- Database checked in MongoDB Atlas under `arisgate > orders`

## Purpose of this test
This test was carried out to confirm that ArisGate can classify submitted addresses by quality and attach a confidence score during order verification.

## Summary
The address validation service behaved correctly. A detailed address was marked as valid with high confidence, while a very short address was marked as invalid with low confidence.

---

## Test cases

| Test ID | What was tested | Endpoint | Input | Expected result | Actual result | Status |
|---|---|---|---|---|---|---|
| LBS-01 | Valid address classification | `POST /v1/orders/verify` | `{ "name": "John Doe", "phone": "+97155555555", "address": "dubai marina" }` | API should return `addressValidation: "valid"` and `locationConfidence: 90` | API returned `addressValidation: "valid"` and `locationConfidence: 90` | Pass |
| LBS-02 | Invalid short address classification | `POST /v1/orders/verify` | `{ "name": "John Doe", "phone": "+97155555555", "address": "x" }` | API should return `addressValidation: "invalid"` and `locationConfidence: 10` | API returned `addressValidation: "invalid"` and `locationConfidence: 10` | Pass |

---

## Interpretation
The mock LBS validation layer is functioning as intended. It provides a simple but useful prototype mechanism for identifying low-quality addresses before dispatch. This supports the wider ArisGate objective of reducing problematic COD orders by combining address quality checks with risk scoring and OTP verification.

## Evidence files
- `address_validation_valid_response.png`
- `address_validation_invalid_response.png`

## Reflection on the result
This test strengthens the project because it adds a location-quality dimension to the verification flow. Although this version is rule-based and not yet linked to a real mapping API, it demonstrates how ArisGate could use LBS concepts in practice and gives a clear pathway for future expansion.