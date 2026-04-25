# Analysis Against the Original Proposal – ArisGate

## Date
23 April 2026

## Purpose
This section compares the current ArisGate prototype against the original Semester 1 proposal. The aim is to evaluate how far the implemented system answers the original research problem, where it currently meets expectations, where it only partially meets them, and what still remains as future work.

---

## 1. Original project intention
The original proposal described ArisGate as a platform-agnostic Cash on Delivery verification system intended to reduce risky COD orders. The core idea was to create a microservice that could sit between an e-commerce checkout and the merchant’s fulfilment process, adding extra verification before the order was accepted.

The proposal emphasised three key ideas:

- risk reduction for COD orders
- location-based verification
- two-factor confirmation through OTP

The current prototype should therefore be judged against those three pillars rather than against the standards of a fully commercial product.

---

## 2. What the prototype now achieves

### 2.1 It successfully demonstrates the core workflow
The current version of ArisGate now performs a meaningful end-to-end verification sequence:

1. receive order details,
2. assign a risk score,
3. classify address quality,
4. generate and confirm an OTP,
5. reject invalid OTP submissions,
6. retrieve the live order state,
7. assign a final verification decision.

This means the project has moved beyond isolated endpoints and now behaves as a connected workflow. That is important because the proposal was never only about storing order data. It was about intervening in the order journey before fulfilment.

### 2.2 It already reflects the proposal’s platform-agnostic idea
The backend has been built as an API-first microservice rather than as a plugin tied to one single platform. This matches the proposal well. The service can in principle sit behind Shopify, WooCommerce, or another commerce frontend because the logic is exposed through routes rather than locked into one ecosystem.

### 2.3 It already reflects the two-factor verification idea
The OTP simulation feature is one of the clearest areas where the implemented prototype aligns with the original proposal. The system can now:
- generate an OTP,
- attach it to an order,
- verify the OTP,
- reject incorrect OTP submissions,
- keep the order unverified when the code is wrong.

This gives the project a genuine verification layer rather than simple form validation.

### 2.4 It partially reflects the LBS idea
The prototype now includes an address validation layer with:
- `addressValidation`
- `locationConfidence`

This means the system is no longer blind to address quality. However, the current implementation is still a mock rule-based service rather than a real geolocation lookup. So the LBS part of the proposal has been addressed in concept and architecture, but not yet fully realised through an external mapping service.

### 2.5 It adds an operational decision layer
One area where the prototype now goes beyond a basic student CRUD project is the final decision engine. The system does not merely collect data; it produces an operational recommendation such as:
- `approved`
- `manual_review`

This is significant because it makes ArisGate look closer to a real merchant-support tool. It demonstrates how verification signals can be combined into an actionable decision.

---

## 3. Where the prototype strongly meets the proposal

### 3.1 Verification before fulfilment
This is now clearly demonstrated. Orders are not treated as immediately trusted. Instead, they go through stages of assessment and verification before a final decision is made.

### 3.2 Focus on COD risk reduction
The project still remains faithful to the original business problem. COD orders are particularly exposed to delivery failure, fake addresses, and poor-quality checkout input. The current prototype directly addresses this through:
- risk scoring,
- OTP verification,
- address-quality checks,
- manual review decisions.

### 3.3 Service-oriented architecture
The use of separate services for:
- risk scoring,
- OTP,
- address validation,
- decision logic

shows that the project is following the architectural direction proposed in Semester 1. This makes the code more modular, easier to explain, and easier to extend.

---

## 4. Where the prototype only partially meets the proposal

### 4.1 Real SMS integration is not yet implemented
The OTP workflow is currently simulated inside the backend. That is acceptable for a prototype because it proves the control flow, but it is still weaker than a full Twilio or SMS gateway integration.

### 4.2 Real LBS integration is not yet implemented
The address validation layer is currently based on string-length and quality rules rather than live geolocation or address resolution. This means the prototype demonstrates the intended logic but not yet the real-world technical depth of full location-based services.

### 4.3 Frontend integration is not yet complete
The proposal imagined a system that could integrate cleanly into a commerce journey. At the moment, the prototype is being demonstrated mainly through Postman and MongoDB rather than a polished checkout-facing interface. This is acceptable for proof-of-concept work, but it means the user-facing side is still underdeveloped.

### 4.4 Evaluation is still mainly technical
The proposal suggested wider evaluation criteria such as user satisfaction, workflow performance, and practical usefulness. The current evaluation is strong technically, but still limited in terms of real users or external stakeholder feedback.

---

## 5. What the prototype currently proves
Even in its present form, the system proves several important things:

- a COD verification workflow can be represented as a modular microservice,
- multiple verification signals can be combined in one record,
- OTP confirmation can meaningfully change the trust state of an order,
- low-quality address input can be surfaced early,
- final decisions can be generated from verification signals rather than human guesswork alone.

These are meaningful findings because they show that the proposal was technically viable, at least at proof-of-concept level.

---

## 6. Limitations compared with the original ambition
The current prototype does not yet prove that ArisGate would work at production scale or in a live commerce environment. In particular, it does not yet demonstrate:

- real-time SMS delivery,
- live mapping or geocoding,
- large-scale data handling,
- live merchant dashboard integration,
- real customer usability testing,
- real fraud datasets.

These are important boundaries to acknowledge because they define the current system honestly as a prototype, not as a finished commercial product.

---

## 7. What would be the next logical development steps
If more time were available, the next steps should follow directly from the original proposal:

1. connect the OTP flow to a real SMS provider such as Twilio,
2. replace the mock address validation service with a live geolocation or geocoding API,
3. build a minimal front-end verification console or merchant dashboard,
4. add automated tests,
5. collect user or stakeholder feedback from potential merchants.

These steps would not change the concept of the project. They would deepen and validate the concept that has already been demonstrated.

---

## 8. Overall judgement against the proposal
The current ArisGate prototype does not fully implement every detail promised in the original proposal, but it does successfully realise the core research direction. It demonstrates that a COD verification microservice can combine risk scoring, OTP verification, and address-quality checks into a coherent workflow that produces meaningful outcomes.

In that sense, the proposal has been answered partially but convincingly. The prototype proves that the concept is technically workable and worth further development, even though some external integrations and user-facing elements remain unfinished.

---

## 9. Conclusion
When judged against the original proposal, the project should be understood as a successful proof of concept rather than a finished market-ready service. The most important achievement is that the system now behaves like a real verification pipeline and not just a set of disconnected API routes.

This matters because it shows the proposal was grounded in a realistic technical direction. The current prototype already captures the essential value of ArisGate: using layered verification to reduce the risk and uncertainty of Cash on Delivery orders.