# ArisGate Final Portfolio Report

## Title Page

**Project Title:** ArisGate – Cash on Delivery Verification Microservice  
**Student:** [Add your full name]  
**Course:** [Add course name]  
**Module:** Research Project / Final Portfolio  
**Institution:** [Add institution name]  
**Submission Date:** [Add final submission date]  
**Project Type:** Working proof-of-concept software artefact with supporting digital portfolio  

---

## 1. Introduction

ArisGate is a prototype Cash on Delivery (COD) verification microservice developed to reduce uncertainty before an order is accepted for fulfilment. The project responds to a practical E-commerce problem: COD can remain important in markets where trust, payment access, and buyer confidence shape purchasing behaviour, but it also creates risk for sellers when orders contain weak details, invalid addresses, or unconfirmed customer intent. Research on COD in emerging markets links COD adoption to trust, privacy, perceived value, and perceived risk, which supports the relevance of this project beyond a purely technical exercise (Hamed and El-Deeb, 2020). :contentReference[oaicite:0]{index=0}

The artefact developed for this portfolio is a backend-focused verification service. It receives COD order details, calculates a risk score, performs mock address validation, generates a simulated OTP, confirms or rejects OTP input, retrieves order status, and produces a final verification decision. The system is not presented as a commercial product. It is presented as a working proof of concept that demonstrates how layered verification could support merchants before dispatch.

**Evidence to insert here:**  
Add **Figure 1 – ArisGate high-level architecture diagram** from `Artefacts/Design & Diagrams`.

---

## 2. Project Aim and Research Context

The aim of ArisGate is to design, develop, and evaluate a modular COD verification prototype that combines risk scoring, OTP verification, address validation, and final decision logic. The research question behind the project can be expressed as:

**How can a platform-agnostic verification microservice reduce uncertainty in Cash on Delivery orders before fulfilment?**

The project is relevant because failed deliveries and failed return pickups increase last-mile distribution costs and wider operational costs (Rautela, Janjevic and Winkenbach, 2022). :contentReference[oaicite:1]{index=1} This links directly to COD risk: if weak or fraudulent orders are dispatched without verification, merchants may lose money through wasted fulfilment, support work, return handling, and repeated delivery effort.

The project also connects to checkout quality. Baymard’s checkout research notes that address validation can help avoid severe issues such as delivery delays or undelivered orders, although address validation can also create checkout friction if badly designed (Baymard Institute, 2024). :contentReference[oaicite:2]{index=2} For this reason, ArisGate treats address validation as one signal in a wider decision process rather than as a single automatic rejection mechanism.

The OTP element of ArisGate is based on the principle of adding a second verification layer. OWASP describes one-time password tokens as a possession-based authentication method where a user submits a changing numeric code (OWASP, 2026). :contentReference[oaicite:3]{index=3} NIST’s digital identity guidance also frames authentication as a structured assurance process rather than a casual form step (Temoshok et al., 2025). :contentReference[oaicite:4]{index=4}

---

## 3. Prototype Overview

The implemented prototype is located in:

`arisgate/services/core-api`

The backend was developed using Node.js, Express.js, MongoDB Atlas, Mongoose, Postman, Git, GitHub, and VS Code. The project follows a modular structure, with separate files for configuration, routes, controllers, models, and services.

The main implemented workflow is:

1. create order;
2. calculate risk score;
3. validate address quality;
4. generate OTP;
5. confirm OTP;
6. reject invalid OTP;
7. retrieve order status;
8. evaluate final decision.

The main service modules are:

- `risk.service.js` – calculates a simple rule-based risk score;
- `otp.service.js` – generates a simulated OTP code;
- `lbs.service.js` – performs mock address validation;
- `decision.service.js` – converts verification signals into a final decision.

**Evidence to insert here:**  
Add a screenshot of the `src` folder structure. Caption: **Figure 2 – ArisGate backend folder structure showing modular service design.**

The current prototype supports the following API endpoints:

| Function | Endpoint |
|---|---|
| Start verification | `POST /v1/orders/verify` |
| Send OTP | `POST /v1/orders/:id/send-otp` |
| Confirm OTP | `POST /v1/orders/:id/confirm-otp` |
| Get order status | `GET /v1/orders/:id` |
| Evaluate order | `POST /v1/orders/:id/evaluate` |

---

## 4. Development Process

The development process was incremental. Early work focused on setting up the backend server, Express routes, MongoDB connection, and Postman testing. Later stages added risk scoring, OTP workflow, invalid OTP handling, address validation, order status retrieval, and the final decision engine.

The project also involved substantial debugging. Some issues were simple syntax or spelling mistakes, such as incorrect package names or wrong imports. Other issues were structural, such as accidentally creating `package.json` and `node_modules` in more than one folder. This was corrected by confirming `arisgate/services/core-api` as the only active backend and archiving accidental root-level npm files.

A major learning point was environment configuration. MongoDB connection problems occurred because of `.env` loading issues, an undefined database URI, and later confusion between MongoDB Atlas accounts. The final prototype now uses `.env` locally and `.env.example` for safe documentation. MongoDB documentation confirms that connection strings are the mechanism used to connect to a MongoDB deployment, and Atlas access also depends on configured database users. :contentReference[oaicite:5]{index=5}

**Evidence to insert here:**  
Add screenshot of Git commit history if available. Caption: **Figure 3 – Git history showing incremental development and portfolio commits.**

---

## 5. Testing and Evidence

Testing was carried out manually using Postman and MongoDB Atlas. The main evidence is stored in:

`Artefacts/Test Results`

The central summary file is:

`master-test-matrix.md`

The project includes manual tests for:

- risk scoring;
- OTP generation;
- OTP confirmation;
- invalid OTP rejection;
- order status retrieval;
- address validation;
- final technical health check;
- final decision evaluation.

The final health check confirmed that the prototype was operational before submission. The test created an order, generated an OTP, confirmed the OTP, and evaluated the order successfully.

**Evidence to insert here:**  
Add the four final health-check screenshots:

- `final_health_01_create_order.png`
- `final_health_02_send_otp.png`
- `final_health_03_confirm_otp.png`
- `final_health_04_evaluate_order.png`

Suggested caption: **Figure 4 – Final technical health check showing the complete verification workflow.**

The most important positive test showed that a valid order could be approved after OTP verification. The most important negative test showed that an invalid OTP returned `400 Bad Request` and did not mark the order as verified. This is important because a verification system must reject incorrect input as well as accept correct input.

---

## 6. Analysis of Results

The results show that ArisGate now behaves as a connected verification workflow rather than a set of disconnected API routes.

The risk scoring test showed that complete order data returned a low risk score, while weak input returned a higher score. This demonstrates that the prototype can interpret input quality and convert it into a measurable risk signal. The current risk logic is simple, but it proves the principle that not all COD orders should be treated equally.

The OTP workflow showed that order state changes correctly. A new order begins as `verification_started`, then changes to `otp_sent`, then `otp_verified` after successful confirmation. The invalid OTP test showed that the system preserves the unverified state when an incorrect code is entered. This strengthens the reliability of the evidence because it includes both positive and negative paths.

The address validation test showed that a realistic address is marked as `valid` with high confidence, while a weak address is marked as `invalid` with low confidence. This is currently a mock service rather than a live geolocation API, but it supports the LBS direction of the original proposal.

The final decision engine is one of the strongest parts of the prototype. It combines risk score, OTP verification, and address validation into an operational decision. For example, an unverified order can be returned as `manual_review`, while a verified acceptable order can be returned as `approved`.

**Evidence to insert here:**  
Add screenshot of decision outputs:

- `decision_manual_review.png`
- `decision_approved.png`

Caption: **Figure 5 – Decision engine outputs for manual review and approved orders.**

---

## 7. Synthesis Against the Original Proposal

The original proposal described ArisGate as a platform-agnostic COD verification system using LBS and 2FA to reduce order risk. The current artefact partially but convincingly answers that proposal.

The strongest match is the platform-agnostic backend design. The system is not built as a Shopify-only or WooCommerce-only plugin. It is an API-first microservice, which means a frontend, store connector, or dashboard could later call the verification endpoints.

The OTP side of the proposal is also strongly represented. The prototype does not send real SMS messages, but it demonstrates the OTP lifecycle clearly: generation, storage, confirmation, rejection, and state update. Twilio’s Verify API documentation shows that real-world verification services can support OTP over channels such as SMS, WhatsApp, email, TOTP, voice, and push, which makes Twilio a realistic future integration path for ArisGate. :contentReference[oaicite:6]{index=6}

The LBS side is partially represented. The current system uses mock address validation, not live geocoding. However, it already includes address validation and location confidence fields, which means the architecture leaves space for a real mapping or address validation API later.

Overall, the artefact should be understood as a successful proof of concept. It does not fully implement every commercial feature proposed originally, but it demonstrates the main verification logic and provides a clear pathway for future development.

---

## 8. Reflection on Learning

The reflection evidence is stored in:

`Artefacts/Reflections`

The reflections use Rolfe et al.’s model: **What? So What? Now What?** This model was suitable because the project involved uncertainty, debugging, practical mistakes, and professional learning.

The strongest learning point was that development is not only writing code. I learned that a software artefact also needs structure, testing, explanation, security awareness, and reflection. At first, I focused heavily on whether the server worked. Later, I understood that the portfolio also had to show why the artefact matters, what failed, what changed, and what I learned.

A second major learning point was debugging. Several problems looked like code failures but were actually environment issues. For example, the database appeared empty because I was checking the wrong MongoDB Atlas account. This taught me to separate code errors from account, configuration, and infrastructure errors.

A third learning point was testing. The invalid OTP test showed me that testing only the successful path is not enough. A verification system is only meaningful if it can reject invalid input.

**Evidence to insert here:**  
Reference `reflection-index.md` and the 10 typed reflections. If handwritten reflections are added, insert one photo as **Figure 6 – Example handwritten reflection evidence.**

---

## 9. Ethics, Security and Sustainability

ArisGate handles data that could be sensitive in a real system, including names, phone numbers, addresses, OTP values, and database credentials. This means privacy and data minimisation are important. The ICO explains that organisations should identify the minimum personal data required for a purpose and hold no more than necessary (ICO, 2026). :contentReference[oaicite:7]{index=7}

In the current prototype, test data is used and no real customer dataset is required. However, a production version would need stronger controls. These would include HTTPS, secure secret management, role-based access, OTP expiry, rate limiting, hashed or protected OTP storage, audit logs, and a data retention policy.

A security issue occurred during development when the real `.env` file was tracked by Git. This was corrected by removing `.env` from tracking and adding `.env.example` with placeholder values only. The MongoDB password should be rotated after marking.

The sustainability link is indirect but relevant. Failed deliveries can increase transport activity and operational waste. By reducing weak or suspicious COD orders before dispatch, a future version of ArisGate could support more efficient fulfilment and fewer unnecessary delivery attempts.

---

## 10. Limitations and Future Work

The prototype has several limitations.

First, OTP is simulated. It proves the workflow, but it does not yet send a real message. A future version should integrate Twilio Verify or a similar provider.

Second, address validation is mock logic. It uses rule-based checks rather than a real geolocation API. A future version should use a mapping, geocoding, or address validation service.

Third, testing is mainly manual. Manual Postman tests are useful for evidence, but a stronger system would include automated unit and integration tests.

Fourth, no full merchant dashboard has been built. The current version is backend-focused and demonstrated through Postman and MongoDB Atlas.

Fifth, formal user feedback has not yet been collected. A user feedback plan has been created, but actual merchant or stakeholder testing remains future work.

These limitations are not hidden. They define the current artefact honestly as a proof of concept.

---

## 11. Conclusion

ArisGate demonstrates that a COD verification workflow can be built as a modular backend microservice. The current prototype creates orders, stores them in MongoDB, calculates risk, generates and confirms OTPs, rejects invalid OTPs, validates address quality, retrieves order status, and produces a final verification decision.

The project is not a finished commercial platform. However, it successfully proves the central idea: layered verification can reduce uncertainty before COD fulfilment. The surrounding portfolio evidence strengthens the artefact by showing testing, analysis, synthesis, reflection, research grounding, and honest limitation reporting.

The final submission should therefore be assessed as a working proof-of-concept software artefact supported by a structured digital portfolio.

---

## References

Baymard Institute (2024) ‘Address Validator Design Examples’.  

Baymard Institute (2024) ‘Have an Address Validator’.  

Hamed, S. and El-Deeb, S. (2020) ‘Cash on Delivery as a Determinant of E-Commerce Growth in Emerging Markets’, *Journal of Global Marketing*, 33(4), pp. 242–265.  

Information Commissioner’s Office (ICO) (2026) ‘Principle (c): Data minimisation’.  

MongoDB (2026) ‘Connection Strings’.  

MongoDB (2026) ‘Connect to an Atlas Cluster’.  

NIST (2025) *Digital Identity Guidelines: Authentication and Authenticator Management*. Special Publication 800-63B-4.  

OWASP (2026) ‘Multifactor Authentication Cheat Sheet’.  

Rautela, H., Janjevic, M. and Winkenbach, M. (2022) ‘Investigating the financial impact of collection-and-delivery points in last-mile E-commerce distribution’, *Research in Transportation Business & Management*, 45.  

Rolfe, G., Freshwater, D. and Jasper, M. (2001) *Critical Reflection for Nursing and the Helping Professions: A User’s Guide*. Basingstoke: Palgrave Macmillan.  

Twilio (2026) ‘Verify API’.  