# ArisGate

**ArisGate** is a prototype Cash on Delivery (COD) verification microservice designed to reduce risky orders before fulfilment.

The project explores whether a platform-agnostic service can combine:

* rule-based risk scoring
* OTP / 2FA verification
* address-quality validation
* final decision logic

to improve trust and reduce uncertainty in COD transactions.

---

## Project Aim

The aim of ArisGate is to demonstrate a verification workflow that can assess COD orders before dispatch. The prototype is designed as a backend microservice that could later sit behind platforms such as Shopify or WooCommerce.

This project was developed as part of a Level 5 Research Project portfolio in Software Development and should be understood as a **working proof of concept**, not a finished commercial deployment.

---

## Current Features

The current prototype supports:

* **Order creation**
* **Rule-based risk scoring**
* **Simulated OTP generation**
* **OTP confirmation**
* **Invalid OTP rejection**
* **Order status lookup**
* **Mock address validation**
* **Location confidence scoring**
* **Final verification decision**

  * `approved`
  * `manual_review`
  * `rejected` (where applicable under current rules)

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
```

---

## Main Backend Location

The active backend service is located here:

```text
arisgate/services/core-api
```

This is the only active Node.js backend that should be used for development and testing.

---

## Technologies Used

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

### Testing and Tools

* Postman
* Nodemon
* Git and GitHub
* VS Code

### Prototype Service Modules

* Risk scoring service
* OTP service
* Address validation service
* Decision engine service

---

## How to Run the Backend

Open a terminal and move into the backend folder:

```bash
cd arisgate/services/core-api
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The server should run on:

```text
http://localhost:4000
```

---

## Main API Endpoints

### Start verification

```http
POST /v1/orders/verify
```

### Generate OTP

```http
POST /v1/orders/:id/send-otp
```

### Confirm OTP

```http
POST /v1/orders/:id/confirm-otp
```

### Get order status

```http
GET /v1/orders/:id
```

### Evaluate final decision

```http
POST /v1/orders/:id/evaluate
```

---

## Example Request

### Create order

```json
{
  "name": "John Doe",
  "phone": "+97155555555",
  "address": "Dubai Marina"
}
```

### Example response

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

---

## Evidence and Portfolio

This repository is accompanied by a structured `Artefacts` folder containing:

* manual test notes
* screenshots and logs
* analysis files
* reflections
* diagrams
* project management records

A submission index is also provided in:

```text
Artefacts/final-submission-index.md
```

This file explains where the main evidence is located and how the portfolio should be navigated.

---

## Current Limitations

The prototype currently has some important limitations:

* OTP delivery is simulated rather than connected to a live SMS provider
* address validation is mock logic rather than real geolocation lookup
* testing is mainly manual rather than automated
* no live merchant or customer testing has yet been completed
* frontend checkout integration is still limited

These limits are acknowledged as part of the project’s prototype status.

---

## Future Improvements

If more time were available, the next development steps would include:

* integrating a real SMS provider such as Twilio
* replacing mock address checks with a real geolocation API
* adding automated testing
* building a lightweight merchant dashboard
* collecting user feedback from realistic stakeholders

---

## Development Notes

This project was developed incrementally with Git-based version control, manual API testing, and evidence collection across the portfolio folders. The current implementation is intended to demonstrate the feasibility of a layered verification workflow rather than a full commercial launch version.

The strongest completed areas of the prototype are:

* modular backend structure
* MongoDB persistence
* visible verification state changes
* testable rule-based logic
* documented debugging and testing evidence

---

## Final Note

ArisGate should be assessed as a documented software development project and portfolio, not only as a piece of code. The submission includes both the working artefact and the supporting evidence showing how it was built, tested, analysed, and reflected upon.
