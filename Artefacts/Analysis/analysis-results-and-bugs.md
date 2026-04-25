# Analysis of Results and Bugs – ArisGate

## Date
23 April 2026

## Purpose
This section analyses the performance of the current ArisGate prototype and records the main technical issues encountered during development. The intention is not only to show that the prototype works, but also to explain what the outputs mean, where problems appeared, how they were resolved, and what this says about the quality and limitations of the current system.

---

## 1. Overview of tested functionality
The current prototype was tested across the main stages of the verification workflow:

- order creation
- risk scoring
- OTP generation
- OTP confirmation
- invalid OTP rejection
- order status retrieval
- address validation
- final decision evaluation

The results show that the prototype now performs a complete verification cycle from initial order submission to decision outcome.

---

## 2. Analysis of successful results

### 2.1 Risk scoring
The risk scoring feature behaved as expected in both positive and negative cases. A complete and realistic order returned a `riskScore` of `0`, while a weak input containing a short name, short phone number, and short address returned a `riskScore` of `100`.

This result is important because it shows that ArisGate does not treat all orders equally. Instead, it applies a simple rule-based interpretation of input quality. Although the current scoring model is basic, it demonstrates the core principle behind the project: suspicious or low-quality input should be treated as higher risk.

### 2.2 OTP verification
The OTP workflow also worked successfully. The system was able to:
- generate an OTP,
- attach it to a specific order,
- verify the correct OTP,
- reject an invalid OTP,
- preserve the unverified state when the wrong code was submitted.

This is a meaningful result because the OTP stage acts as the second layer of trust. It shows that verification is not based only on the address or risk score, but also on whether the user can confirm possession of the phone number associated with the order.

### 2.3 Address validation
The address validation service classified addresses correctly under the current mock LBS rules:
- realistic address → `valid`
- very short address → `invalid`

This matters because COD fulfilment depends heavily on reliable location information. Even though the current implementation does not yet connect to a live geolocation API, it still demonstrates how address quality can become a measurable factor in order verification.

### 2.4 Decision engine
The final decision engine produced logically consistent outputs:
- `manual_review` when OTP had not been verified
- `approved` when OTP was verified and the risk profile was acceptable

This is one of the strongest parts of the prototype because it transforms several technical signals into an operational decision. In other words, the prototype now moves beyond data storage and begins to act like a real verification service.

---

## 3. Analysis of bugs and technical issues

### 3.1 Wrong project folder / duplicate npm setup
One of the first major development problems was confusion around multiple `package.json`, `package-lock.json`, and `node_modules` folders. This happened because npm commands were accidentally run in more than one directory.

#### Impact
This created uncertainty about which folder contained the real backend and increased the risk of running commands in the wrong place.

#### Resolution
The real backend was confirmed as:

`arisgate/services/core-api`

The accidental root npm manifest files were archived, and the project structure was cleaned so that development could continue from a single active backend folder.

#### What this means
This bug was not about programming syntax. It was a workflow and environment management issue. It showed the importance of repository discipline and correct project structure.

---

### 3.2 Missing dependencies and broken local dev environment
At one point the server would not start because required packages such as `nodemon`, `cors`, and other dependencies were missing or incorrectly installed.

#### Impact
The API could not run locally, which meant Postman testing and MongoDB integration could not continue.

#### Resolution
Dependencies were reinstalled in the correct backend directory and the scripts inside `package.json` were checked and standardised.

#### What this means
This issue reinforced the idea that software development is not only writing code. Environment setup and dependency management are also part of professional practice.

---

### 3.3 Database connection issues
There were several MongoDB setup problems during development, including:
- undefined connection string
- invalid URI scheme
- confusion between database names and collection names
- looking in the wrong MongoDB Atlas account

#### Impact
These problems made it appear that the system was failing to save data, even when the API logic was correct.

#### Resolution
The `.env` file was checked, the URI format was corrected, and the correct MongoDB Atlas account and database path were confirmed. Additional debug logging was used to prove which database and collection were actually being used.

#### What this means
This was an important lesson in separating application logic errors from infrastructure or account errors. The final issue was not a coding failure but an environment and account-selection mistake.

---

### 3.4 Controller and route syntax issues
During the OTP feature build, the server stopped running because of syntax problems in the controller and route wiring.

#### Impact
When the server failed to start, Postman returned `ECONNREFUSED`, which could easily be mistaken for an API logic error.

#### Resolution
The `order.controller.js` file was rewritten carefully, the route definitions were corrected, and the server was restarted successfully.

#### What this means
This demonstrated that when Postman shows connection refusal, the problem may be that the server never started at all. The correct response is to inspect the terminal output before changing the API request.

---

### 3.5 Invalid OTP test design mistake
A testing mistake also occurred during the invalid OTP case. Initially, a GET request was used while placing an `otpCode` in the request body.

#### Impact
That request did not actually test invalid OTP handling, because GET does not perform OTP confirmation in this workflow.

#### Resolution
The test was redesigned correctly using:

`POST /v1/orders/:id/confirm-otp`

with an incorrect OTP value.

#### What this means
This was a valuable testing lesson. It showed that a test only counts when the request method, endpoint, and payload genuinely exercise the feature being evaluated.

---

## 4. What the results mean overall
The current prototype is not production-ready, but the results show that it is already capable of demonstrating the central research idea behind ArisGate. It can receive orders, classify risk, validate address quality, use OTP-based confirmation, and translate those signals into a verification decision.

The most important analytical conclusion is that the project now behaves like a real workflow rather than a collection of unrelated endpoints. Each step changes the meaning of the order record, and those changes are visible both in the API responses and in MongoDB.

---

## 5. Current limitations
Despite the successful results, the current implementation still has important limits:

- risk scoring is rule-based and not data-driven
- OTP is simulated and not connected to a live SMS provider
- address validation is mock logic rather than real geolocation lookup
- testing is manual rather than fully automated
- no real user feedback has yet been collected

These limitations do not invalidate the prototype, but they do define it clearly as an academic proof of concept rather than a deployable commercial system.

---

## 6. Conclusion
The testing and debugging evidence shows that ArisGate has developed into a meaningful prototype with multiple working verification layers. The issues encountered during development were useful because they improved both the technical stability of the system and the developer's understanding of debugging, project structure, testing design, and infrastructure configuration.

The overall result is that the prototype now provides a credible foundation for the final portfolio, especially because its functionality is supported by documented tests, visible evidence, and a clear record of how major bugs were identified and resolved.