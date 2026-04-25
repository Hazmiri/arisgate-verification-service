# ArisGate

**ArisGate** is a prototype Cash on Delivery (COD) verification microservice designed to reduce risky orders before fulfilment.

The project explores whether a platform-agnostic service can combine:

- rule-based risk scoring
- OTP / 2FA verification
- address-quality validation
- final decision logic

to improve trust and reduce uncertainty in COD transactions.

---

## Project Aim

The aim of ArisGate is to demonstrate a verification workflow that can assess COD orders before dispatch. The prototype is designed as a backend microservice that could later sit behind platforms such as Shopify or WooCommerce.

This project was developed as part of a Level 5 Research Project portfolio in Software Development and should be understood as a **working proof of concept**, not a finished commercial deployment.

---

## Current Features

The current prototype supports:

- **Order creation**
- **Rule-based risk scoring**
- **Simulated OTP generation**
- **OTP confirmation**
- **Invalid OTP rejection**
- **Order status lookup**
- **Mock address validation**
- **Location confidence scoring**
- **Final verification decision**
  - `approved`
  - `manual_review`
  - `rejected` (where applicable under current rules)

---

## Example Workflow

1. A COD order is submitted through the verification endpoint.
2. ArisGate calculates a risk score.
3. The address is classified for quality.
4. A simulated OTP is generated.
5. The OTP can be confirmed or rejected.
6. The system evaluates the order and assigns a final decision.

---

## Project Structure

```text
Cash-on-Delivery-COD-Check-out-Form-with-Verification-System-Location-Based-Services/
│
├── arisgate/
│   └── services/
│       └── core-api/
│           ├── server.js
│           ├── package.json
│           ├── package-lock.json
│           ├── .env
│           ├── .env.example
│           └── src/
│               ├── config/
│               ├── controllers/
│               ├── middleware/
│               ├── models/
│               ├── repositories/
│               ├── routes/
│               ├── services/
│               └── utils/
│
├── Artefacts/
│   ├── Analysis/
│   ├── Design & Diagrams/
│   ├── Project Management/
│   ├── Reflections/
│   ├── Research Papers/
│   ├── Screenshots and Logs/
│   ├── Test Results/
│   ├── User Feedback/
│   └── final-submission-index.md
│
├── postman/
├── _archive_accidental_node_setup/
├── Project Road Map.txt
└── README.md

