# Final Submission Index – ArisGate

## Student project
**ArisGate** – Cash on Delivery Verification Microservice

## Date
23 April 2026

## Purpose of this document
This file acts as the navigation guide for the ArisGate submission. It is intended to help an assessor understand:
- what the project is,
- what the working prototype currently does,
- where the key evidence is stored,
- how the submission is organised,
- and which files are most important for evaluation.

---

## 1. Project summary
ArisGate is a prototype verification microservice designed to reduce risk in Cash on Delivery orders. The project explores whether a platform-agnostic service can combine multiple verification signals before an order is accepted for fulfilment.

The current prototype includes:
- order creation,
- rule-based risk scoring,
- simulated OTP generation,
- OTP confirmation,
- invalid OTP rejection,
- order status retrieval,
- mock address validation,
- final verification decision logic.

This version should be understood as a **working proof of concept**, not a fully production-ready commercial system.

---

## 2. Recommended assessor reading order
The submission can be read in many ways, but the clearest route is:

1. **Proposal PDF**  
   Read the original project intention and research direction.

2. **Project showcase PDF**  
   View the main summary of the implemented artefact.

3. **Test Results**  
   Review the evidence that the prototype was tested.

4. **Analysis**  
   Read the interpretation of results, bugs, and comparison against the proposal.

5. **Design & Diagrams**  
   Review diagrams, architecture, and visual explanation of the system.

6. **Reflections**  
   Read the development reflections and learning outcomes.

7. **README and repository structure**  
   Review how the project is organised and how the prototype is run.

---

## 3. Main folder structure

### `Artefacts/Analysis`
Contains interpretation of outputs, bug analysis, and comparison with the original proposal.

Key files:
- `analysis-results-and-bugs.md`
- `analysis-against-proposal.md`
- `mongo-atlas-account-mismatch-note.md`

### `Artefacts/Design & Diagrams`
Contains architecture diagrams, workflow diagrams, and other visual artefacts used to explain the system design.

### `Artefacts/Project Management`
Contains project planning and overview material.

Key file:
- `ArisGate_Project_Showcase.pdf`

### `Artefacts/Reflections`
Contains reflective writing about development, mistakes, lessons learned, and professional growth.

Key file currently present:
- `Proposal_submit.pdf`

### `Artefacts/Research Papers`
Contains reference materials, research documents, and supporting sources used during project development.

### `Artefacts/Screenshots and Logs`
Contains screenshots of:
- Postman API tests,
- MongoDB Atlas evidence,
- verification flow outputs,
- decision engine results,
- debugging evidence.

### `Artefacts/Test Results`
Contains written manual test notes and the master test matrix.

Key files:
- `master-test-matrix.md`
- `manual-test-risk-scoring.md`
- `manual-test-otp-workflow.md`
- `manual-test-invalid-otp.md`
- `manual-test-address-validation.md`
- `manual-test-order-status-endpoint.md`

### `Artefacts/User Feedback`
Reserved for user or stakeholder evaluation material.

---

## 4. Core technical project location
The active backend service for this project is located at:

`arisgate/services/core-api`

This folder contains:
- `server.js`
- `package.json`
- `.env`
- `src/`
- `test/`

Within `src/`, the main structure is:

- `config/` – database configuration
- `controllers/` – request-handling logic
- `models/` – Mongoose schemas
- `routes/` – API route definitions
- `services/` – risk, OTP, address validation, and decision logic
- `repositories/` – repository layer
- `utils/` – mapping and response helpers

---

## 5. Main implemented features
The prototype currently supports the following workflow:

### A. Order verification start
An order can be submitted through the verification API.

### B. Risk scoring
The system assigns a rule-based risk score based on input quality.

### C. OTP generation
The system generates a simulated OTP and stores it against the order.

### D. OTP confirmation
The system verifies the OTP and updates the verification state.

### E. Invalid OTP rejection
The system rejects incorrect OTP submissions and preserves the unverified state.

### F. Address validation
The system classifies the submitted address as valid, unclear, or invalid, and assigns a location confidence score.

### G. Final decision engine
The system evaluates order signals and produces an operational outcome such as:
- `approved`
- `manual_review`

---

## 6. Key evidence files by feature

### Risk scoring
- `Artefacts/Test Results/manual-test-risk-scoring.md`
- `Artefacts/Screenshots and Logs/postman_valid_order_riskscore_0.png`
- `Artefacts/Screenshots and Logs/postman_valid_order_riskscore_100.png`

### OTP workflow
- `Artefacts/Test Results/manual-test-otp-workflow.md`
- `Artefacts/Screenshots and Logs/otp_01_create_order.png`
- `Artefacts/Screenshots and Logs/otp_04_send_order.png`
- `Artefacts/Screenshots and Logs/otp_05_confirm_order.png`

### Invalid OTP handling
- `Artefacts/Test Results/manual-test-invalid-otp.md`
- `Artefacts/Screenshots and Logs/otp_invalid_response.png`
- `Artefacts/Screenshots and Logs/mongodb_otp_not_verified.png`

### Order status retrieval
- `Artefacts/Test Results/manual-test-order-status-endpoint.md`
- `Artefacts/Screenshots and Logs/test_order_status_endpoint.png`

### Address validation
- `Artefacts/Test Results/manual-test-address-validation.md`
- `Artefacts/Screenshots and Logs/valid_address_validation_test.png`
- `Artefacts/Screenshots and Logs/Invalid_address_validation_test.png`

### Decision engine
- `Artefacts/Screenshots and Logs/decision_manual_review.png`
- `Artefacts/Screenshots and Logs/decision_approved.png`

---

## 7. What the prototype currently proves
The current state of the project proves that a COD verification workflow can be implemented as a modular backend microservice. It shows that risk scoring, OTP verification, address quality checks, and final decision logic can all be combined within one operational pipeline.

This means the project already demonstrates the technical viability of the core research idea, even though some external integrations are still simulated.

---

## 8. Current prototype limitations
The current submission should be read honestly as a prototype. The main limitations are:

- OTP delivery is simulated rather than connected to a live SMS provider
- address validation is mock logic rather than real geolocation lookup
- testing is mainly manual rather than fully automated
- no real merchant or customer feedback has yet been collected
- frontend / checkout integration is limited compared with a production system

These limits are acknowledged in the analysis and synthesis sections and are part of the project’s future development path.

---

## 9. How to run the prototype
The backend should be run from:

`arisgate/services/core-api`

Typical commands:

```bash
npm install
npm run dev