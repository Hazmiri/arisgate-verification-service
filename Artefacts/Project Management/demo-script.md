# ArisGate Demo Script

## Date
27 April 2026

## Purpose

This document prepares a short demonstration of the ArisGate prototype for assessment. It explains what I would show, what I would say, and how the current artefact demonstrates the main project idea.

The purpose of the demo is not to claim that ArisGate is a finished commercial product. It is to show that the prototype works as a proof of concept and that the main verification workflow can be demonstrated.

---

## 1. Opening Explanation

ArisGate is a Cash on Delivery verification microservice. The problem it responds to is that COD orders can be risky for merchants because customers may give weak information, wrong addresses, or may not genuinely intend to receive the order.

The aim of ArisGate is to reduce this uncertainty before fulfilment by using several verification signals:

- risk scoring
- OTP verification
- address validation
- final decision logic

The prototype is backend-focused and tested through Postman and MongoDB Atlas.

---

## 2. What the Prototype Currently Does

The current prototype can:

1. create a COD verification order;
2. calculate a risk score;
3. validate the address using mock address logic;
4. generate a simulated OTP;
5. confirm a correct OTP;
6. reject an incorrect OTP;
7. retrieve order status;
8. evaluate the order and return a final decision.

The final decision can return outcomes such as:

- `approved`
- `manual_review`

---

## 3. Demo Preparation

Before starting the demonstration, I need to run the backend from:

```bash
cd arisgate/services/core-api
npm run dev
```

The expected terminal output is:

```text
ArisGate API running on port 4000
MongoDB connected successfully
```

The API should then be tested through Postman at:

```text
http://localhost:4000
```

---

## 4. Demo Step 1 – Create an Order

### What I show

In Postman, I send a request to:

```http
POST /v1/orders/verify
```

Example request body:

```json
{
  "name": "Final Test",
  "phone": "+97155555555",
  "address": "Dubai Marina"
}
```

### What I say

This endpoint starts the verification process. It receives the customer’s basic COD order details and creates an order record in MongoDB.

The system also calculates a risk score and returns address validation information. This shows that the system is not only saving data, but also beginning to evaluate order quality.

### Expected result

The response should include:

```json
{
  "status": "verification_started",
  "orderId": "...",
  "riskScore": 0,
  "addressValidation": "valid",
  "locationConfidence": 90,
  "message": "ArisGate verification initiated"
}
```

### Evidence screenshot

`Artefacts/Screenshots and Logs/final_health_01_create_order.png`

---

## 5. Demo Step 2 – Send OTP

### What I show

In Postman, I send a request to:

```http
POST /v1/orders/:id/send-otp
```

### What I say

This endpoint simulates sending an OTP to the customer. In the current prototype, the OTP is returned in the response so I can test the workflow without using a paid SMS service.

In a production system, this would be replaced by an external SMS provider such as Twilio or a similar verification service.

### Expected result

The response should include:

```json
{
  "message": "OTP generated successfully",
  "orderId": "...",
  "otpCode": "...",
  "status": "otp_sent"
}
```

### Evidence screenshot

`Artefacts/Screenshots and Logs/final_health_02_send_otp.png`

---

## 6. Demo Step 3 – Confirm OTP

### What I show

In Postman, I send the OTP back to the system:

```http
POST /v1/orders/:id/confirm-otp
```

Example body:

```json
{
  "otpCode": "PASTE_REAL_OTP_HERE"
}
```

### What I say

This step proves that the backend can check whether the OTP submitted by the user matches the OTP stored against the order.

When the OTP is correct, the system changes the order status to `otp_verified`.

### Expected result

The response should include:

```json
{
  "message": "OTP verified successfully",
  "orderId": "...",
  "otpVerified": true,
  "status": "otp_verified"
}
```

### Evidence screenshot

`Artefacts/Screenshots and Logs/final_health_03_confirm_otp.png`

---

## 7. Demo Step 4 – Evaluate the Order

### What I show

In Postman, I send a request to:

```http
POST /v1/orders/:id/evaluate
```

### What I say

This is the decision stage. The system now looks at the available verification signals and gives an outcome.

If the OTP is verified and the risk profile is acceptable, the system approves the order. If there is uncertainty, the system can return `manual_review`.

### Expected result

For a valid test order, the response should include:

```json
{
  "orderId": "...",
  "verificationDecision": "approved",
  "decisionReason": "OTP verified and risk profile acceptable"
}
```

### Evidence screenshot

`Artefacts/Screenshots and Logs/final_health_04_evaluate_order.png`

---

## 8. Demo Step 5 – Show MongoDB Evidence

### What I show

In MongoDB Atlas, I open the `orders` collection and show that the order has been saved.

### What I say

This proves that the prototype is not only returning temporary API responses. It is also persisting the verification record in the database.

The stored record can include fields such as:

- customer name
- phone number
- address
- risk score
- OTP status
- address validation
- location confidence
- final verification status

### Evidence location

`Artefacts/Screenshots and Logs`

---

## 9. Demo Step 6 – Explain Invalid OTP Testing

### What I show

I refer to the invalid OTP test evidence rather than repeating it live unless requested.

### What I say

I also tested the negative path. This means I did not only test the system when everything was correct. I checked that the system rejects an invalid OTP.

This matters because verification systems must be able to refuse incorrect input. A system that accepts every OTP would not provide any real verification value.

### Evidence files

- `Artefacts/Test Results/manual-test-invalid-otp.md`
- `Artefacts/Screenshots and Logs/otp_invalid_response.png`
- `Artefacts/Screenshots and Logs/mongodb_otp_not_verified.png`

---

## 10. Demo Step 7 – Explain Limitations Honestly

The current prototype has several limitations:

- OTP delivery is simulated rather than sent by real SMS.
- Address validation uses mock logic rather than a real geolocation API.
- Testing is mostly manual rather than fully automated.
- There is no final merchant dashboard yet.
- Formal user feedback has not yet been collected.

These limitations do not make the artefact useless. They show that the current version is a proof of concept and that there is a clear path for future development.

---

## 11. Demo Step 8 – Explain Future Improvements

If I had more time, I would improve ArisGate by:

1. integrating a real SMS provider;
2. replacing mock address validation with a real geolocation API;
3. adding automated tests;
4. creating a merchant dashboard;
5. collecting real user feedback;
6. improving security with OTP expiry, rate limiting, and stronger secret management.

---

## 12. Closing Statement

ArisGate demonstrates that a COD verification workflow can be built as a modular backend service. The project combines order creation, risk scoring, OTP verification, address validation, database persistence, and final decision logic.

The most important learning from the project is that a software artefact is not only the code. It also needs testing, evidence, analysis, reflection, security awareness, and clear presentation.

For this submission, ArisGate should be assessed as a working proof of concept supported by a structured portfolio of evidence.

---

## 13. Quick Demo Order

If time is short, I will demonstrate only this sequence:

1. run backend;
2. create order;
3. send OTP;
4. confirm OTP;
5. evaluate order;
6. show MongoDB record;
7. explain limitations and future work.

---

## 14. Possible Assessor Questions and Answers

### Question 1: Is this a finished product?

No. It is a working proof of concept. The main verification workflow works, but real SMS delivery, real geolocation, automated testing, and a merchant dashboard would be future improvements.

### Question 2: Why did you simulate OTP?

I simulated OTP because the aim was to prove the verification logic without depending on a paid external SMS provider. A future version could integrate Twilio or another SMS API.

### Question 3: Why did you use MongoDB?

MongoDB was suitable for storing flexible order verification records during prototyping. It allowed me to store fields such as risk score, OTP status, address validation, and decision status in one document.

### Question 4: What was the biggest technical problem?

The biggest technical problems were environment configuration, MongoDB connection setup, npm folder structure, and debugging small syntax or import mistakes.

### Question 5: What did you learn?

I learned that development is not only about writing code. It is about structure, testing, debugging, documentation, reflection, and explaining technical decisions clearly.

### Question 6: What is the strongest part of the artefact?

The strongest part is that the system now behaves like a connected verification workflow rather than separate disconnected endpoints. An order can move from creation, to OTP, to verification, and finally to an operational decision.

### Question 7: What would you improve first?

The first improvement would be real SMS integration because OTP is currently simulated. After that, I would add real address validation through a mapping or geocoding API.

### Question 8: How does this connect to the original proposal?

The original proposal focused on reducing COD risk using LBS and 2FA. The current prototype demonstrates this direction through mock address validation, simulated OTP verification, risk scoring, and a final decision engine.

### Question 9: What evidence proves the system works?

The evidence is stored in the portfolio folders. The strongest evidence includes the final health-check screenshots, manual test notes, master test matrix, MongoDB screenshots, and analysis files.

### Question 10: What is the main limitation of the current submission?

The main limitation is that some external services are simulated. The system proves the logic and architecture, but it does not yet send real SMS messages or perform live geolocation checks.

---

## 15. Final Personal Note

This project helped me understand that software development is not one single action. It is a chain of decisions, tests, errors, corrections, and explanations.

At first, I was focused mainly on making the code run. Later, I understood that the portfolio also needs to show why the code matters, how it was tested, what failed, and what I learned. That is why the final submission includes the working prototype, evidence folders, analysis notes, reflection files, and this demonstration script.