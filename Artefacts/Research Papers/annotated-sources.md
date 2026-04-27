# Annotated Sources – ArisGate

## Date
27 April 2026

## Purpose
This file records the main sources used to support the ArisGate project. The sources were selected because they connect directly to the project’s core ideas: Cash on Delivery risk, failed delivery problems, OTP verification, address validation, database configuration, security, privacy, and future development.

The purpose of this file is not only to list references, but also to explain how each source influenced the design and evaluation of the prototype.

---

## 1. Cash on Delivery and E-commerce Risk

### Source
Hamed, S. and El-Deeb, S. (2020) ‘Cash on Delivery as a Determinant of E-Commerce Growth in Emerging Markets’, *Journal of Global Marketing*, 33(4), pp. 242–265. DOI: 10.1080/08911762.2020.1738002.

### Annotation
This source helped justify why Cash on Delivery is a relevant project area. The article discusses COD in emerging markets and links COD to customer behaviour, trust, perceived risk, and online purchase intention. This supported my decision to frame ArisGate as a system that responds to a real E-commerce problem rather than a purely technical exercise.

### Link to ArisGate
ArisGate focuses on reducing uncertainty before fulfilment. The project uses risk scoring, address validation, and OTP verification because COD orders can create trust and reliability challenges for merchants.

---

## 2. Failed Deliveries and Last-mile Cost

### Source
Rautela, H., Janjevic, M. and Winkenbach, M. (2022) ‘Investigating the financial impact of collection-and-delivery points in last-mile E-commerce distribution’, *Research in Transportation Business & Management*, 45, Article 100681. DOI: 10.1016/j.rtbm.2021.100681.

### Annotation
This source supported the logistics side of the project. It shows that failed deliveries and failed return pickups can increase last-mile distribution costs. This helped me understand that COD verification is not only a payment issue, but also a delivery, cost, and operations issue.

### Link to ArisGate
ArisGate attempts to reduce risk before an order is dispatched. By checking order quality, OTP verification, and address confidence before fulfilment, the system aims to reduce avoidable delivery failure.

---

## 3. Address Validation and Checkout Usability

### Source
Baymard Institute (2024) ‘Address Validator Design Examples’. Available at: https://baymard.com/checkout-usability/benchmark/step-type/address-validator (Accessed: 27 April 2026).

### Annotation
This source helped support the address validation part of the project. Baymard explains that address validation can help avoid delivery delays and undelivered orders, but it can also create friction in the checkout flow if implemented badly. This was useful because ArisGate uses address validation as a risk signal, but the final system would need to balance verification with user experience.

### Link to ArisGate
The current prototype includes a mock address validation service. It returns `addressValidation` and `locationConfidence`, showing how an address-quality signal could be used before order fulfilment.

---

## 4. Multi-factor Authentication and OTP

### Source
OWASP (2026) ‘Multifactor Authentication Cheat Sheet’. Available at: https://cheatsheetseries.owasp.org/cheatsheets/Multifactor_Authentication_Cheat_Sheet.html (Accessed: 27 April 2026).

### Annotation
OWASP explains one-time passwords as a form of possession-based authentication, where the user must provide a changing numeric code. This supported the OTP part of ArisGate because OTP verification is used as a second layer of trust before an order can be considered more reliable.

### Link to ArisGate
The project includes simulated OTP generation and confirmation. This is not a full production MFA system, but it demonstrates the principle of adding a verification layer before approving a COD order.

---

## 5. Authentication Assurance and Digital Identity

### Source
Temoshok, D. et al. (2025) *Digital Identity Guidelines: Authentication and Authenticator Management*. NIST Special Publication 800-63B-4. National Institute of Standards and Technology. DOI: 10.6028/NIST.SP.800-63B-4.

### Annotation
NIST provides guidance on authentication and authenticator management. This source helped me think about authentication as a lifecycle issue, not just a one-time code. It also helped me understand that real systems need stronger controls than my prototype currently includes.

### Link to ArisGate
The current OTP service is simulated and stores the OTP in the order record. In a production version, this would need stronger security, including OTP expiry, rate limiting, hashing or secure token handling, and protection against replay or brute-force attempts.

---

## 6. SMS Verification as a Future Integration

### Source
Twilio (2026) ‘Verify API’. Available at: https://www.twilio.com/docs/verify/api (Accessed: 27 April 2026).

### Annotation
Twilio’s Verify API documentation shows how a real OTP verification service can be implemented using an external provider. This source is useful because ArisGate currently simulates OTP generation rather than sending a real SMS.

### Link to ArisGate
A future version of ArisGate could replace the mock OTP service with Twilio Verify or another SMS provider. This would make the prototype closer to a real commercial verification product.

---

## 7. Data Minimisation and Privacy

### Source
Information Commissioner’s Office (ICO) (2026) ‘Principle (c): Data minimisation’. Available at: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/data-minimisation/ (Accessed: 27 April 2026).

### Annotation
The ICO explains that organisations should collect only the minimum personal data needed for a specific purpose. This source was important because ArisGate handles personal information such as names, phone numbers, addresses, and OTP-related data.

### Link to ArisGate
The project must be careful not to collect unnecessary personal information. A production version would need a clear privacy notice, data retention policy, access control, and secure handling of customer details.

---

## 8. MongoDB Connection Configuration

### Source
MongoDB (2026) ‘Connection Strings’. Available at: https://www.mongodb.com/docs/manual/reference/connection-string/ (Accessed: 27 April 2026).

### Annotation
MongoDB documentation helped support the database configuration part of the project. During development, I had errors caused by an undefined URI, an invalid connection string, and confusion between accounts. The documentation helped me understand that the connection string is a critical part of the backend configuration.

### Link to ArisGate
ArisGate uses MongoDB Atlas to store order verification records. The project now uses `.env` for the real connection string and `.env.example` for safe documentation.

---

## 9. MongoDB Atlas Database Users

### Source
MongoDB (2026) ‘Configure Database Users’. Available at: https://www.mongodb.com/docs/atlas/security-add-mongodb-users/ (Accessed: 27 April 2026).

### Annotation
This source is useful for the security side of the project because it explains database users, roles, and authentication in MongoDB Atlas. It connects to the security problem I discovered when the real `.env` file was tracked by Git.

### Link to ArisGate
The project now removes the real `.env` from Git tracking and uses `.env.example` as a safe template. After marking, the database password should be rotated so the project can be secured properly.

---

## 10. Checkout Form Design and Friction

### Source
Baymard Institute (2024) ‘Checkout Optimization: Minimize Form Fields’. Available at: https://baymard.com/blog/checkout-flow-average-form-fields (Accessed: 27 April 2026).

### Annotation
This source helped me think about the balance between verification and user experience. Adding too many checks to checkout can create friction, but too few checks can create risk. This is important for ArisGate because the system must verify orders without making the checkout journey too difficult.

### Link to ArisGate
The current prototype is backend-focused and tested through Postman. A future frontend or merchant dashboard would need to apply the verification process carefully so users are not confused or discouraged.

---

# Summary of How the Sources Influenced the Project

| Project Area | Supporting Sources | Influence on ArisGate |
|---|---|---|
| COD problem | Hamed and El-Deeb (2020) | Helped justify the project topic and COD relevance |
| Failed delivery / logistics | Rautela, Janjevic and Winkenbach (2022) | Supported the idea that failed deliveries create operational cost |
| Address validation | Baymard Institute (2024) | Supported the address validation and checkout-quality logic |
| OTP / authentication | OWASP (2026), NIST (2025), Twilio (2026) | Supported simulated OTP and future SMS integration |
| Privacy / ethics | ICO (2026) | Supported data minimisation and secure handling of personal data |
| Database configuration | MongoDB (2026) | Supported database connection and environment configuration |
| UX / checkout friction | Baymard Institute (2024) | Supported future frontend and usability considerations |

---

# Reflection on Source Use

These sources helped me understand that ArisGate is not only a coding task. It sits between several real-world areas: E-commerce, logistics, authentication, data protection, usability, and backend engineering. The prototype does not fully implement every industry-level recommendation, but the sources helped me identify what a future production version would need.

The most important learning point is that a verification system must balance several things at the same time: fraud prevention, customer experience, privacy, operational cost, and technical reliability.

---

# Full Reference List

Baymard Institute (2024) ‘Address Validator Design Examples’. Available at: https://baymard.com/checkout-usability/benchmark/step-type/address-validator (Accessed: 27 April 2026).

Baymard Institute (2024) ‘Checkout Optimization: Minimize Form Fields’. Available at: https://baymard.com/blog/checkout-flow-average-form-fields (Accessed: 27 April 2026).

Hamed, S. and El-Deeb, S. (2020) ‘Cash on Delivery as a Determinant of E-Commerce Growth in Emerging Markets’, *Journal of Global Marketing*, 33(4), pp. 242–265. DOI: 10.1080/08911762.2020.1738002.

Information Commissioner’s Office (ICO) (2026) ‘Principle (c): Data minimisation’. Available at: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/data-minimisation/ (Accessed: 27 April 2026).

MongoDB (2026) ‘Configure Database Users’. Available at: https://www.mongodb.com/docs/atlas/security-add-mongodb-users/ (Accessed: 27 April 2026).

MongoDB (2026) ‘Connection Strings’. Available at: https://www.mongodb.com/docs/manual/reference/connection-string/ (Accessed: 27 April 2026).

OWASP (2026) ‘Multifactor Authentication Cheat Sheet’. Available at: https://cheatsheetseries.owasp.org/cheatsheets/Multifactor_Authentication_Cheat_Sheet.html (Accessed: 27 April 2026).

Rautela, H., Janjevic, M. and Winkenbach, M. (2022) ‘Investigating the financial impact of collection-and-delivery points in last-mile E-commerce distribution’, *Research in Transportation Business & Management*, 45, Article 100681. DOI: 10.1016/j.rtbm.2021.100681.

Temoshok, D. et al. (2025) *Digital Identity Guidelines: Authentication and Authenticator Management*. NIST Special Publication 800-63B-4. National Institute of Standards and Technology. DOI: 10.6028/NIST.SP.800-63B-4.

Twilio (2026) ‘Verify API’. Available at: https://www.twilio.com/docs/verify/api (Accessed: 27 April 2026).