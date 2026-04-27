# User Feedback Plan – ArisGate

## Date
27 April 2026

## Purpose
This document explains how user feedback would be collected for ArisGate if more time were available before final submission. At the current stage, the project is a working proof-of-concept backend tested mainly through Postman and MongoDB Atlas. No formal external user feedback has been collected yet, so this file is written as a future evaluation plan rather than as claimed completed feedback.

## Why user feedback matters
ArisGate is not only a technical system. It is intended to support merchants who use Cash on Delivery and who need to decide whether an order should be approved, reviewed, or rejected before fulfilment.

Because of this, user feedback would be important for checking whether the system is understandable, useful, and realistic from a merchant’s perspective. Technical success does not automatically mean the system solves the user’s problem. A merchant may need clearer decision labels, better explanations, or a simpler workflow before the system becomes practical.

## Target users

The most relevant feedback would come from:

1. small E-commerce sellers who use Cash on Delivery;
2. online store administrators;
3. fulfilment or delivery coordinators;
4. students or testers acting as merchants in a controlled academic test;
5. tutors or peers reviewing the prototype from a software development perspective.

## Feedback method

The proposed method would be a short guided demonstration followed by structured questions.

The user would be shown:

1. a normal order being created;
2. an OTP being generated;
3. a correct OTP being confirmed;
4. an invalid OTP being rejected;
5. an address validation result;
6. a final decision such as `approved` or `manual_review`.

The test would not require real customer data. Only sample test data would be used.

## Proposed feedback questions

### Understanding
1. Can you understand what ArisGate is trying to do?
2. Are the decision labels such as `approved` and `manual_review` clear?
3. Is the verification workflow easy to follow?

### Usefulness
4. Would this kind of verification help a merchant reduce risky Cash on Delivery orders?
5. Which part of the workflow seems most useful: risk score, OTP, address validation, or final decision?
6. Is there any information missing that a merchant would need before deciding whether to fulfil an order?

### Trust and confidence
7. Would you trust a system that gives a rule-based decision?
8. Would you prefer the system to explain more clearly why an order was approved or sent to manual review?
9. Does the system feel like it supports human decision-making, or does it feel too automatic?

### Improvements
10. What would you improve first?
11. Would a dashboard make the system easier to use?
12. Should the system send real SMS messages in the next version?

## Example feedback table

| Participant | Role | What they tested | Main feedback | Improvement suggested |
|---|---|---|---|---|
| Participant 1 | Small seller / peer tester | Order creation and OTP | To be completed after testing | To be completed after testing |
| Participant 2 | Student tester | Invalid OTP and decision result | To be completed after testing | To be completed after testing |
| Participant 3 | Tutor / reviewer | Full workflow | To be completed after testing | To be completed after testing |

## Ethical considerations

The feedback process should avoid collecting real customer information. Test users should only use sample names, test phone numbers, and fictional addresses. If real users were involved, they should be told what the test is for, what data is being collected, and that their feedback is for academic evaluation only.

The feedback should also be stored carefully and should not include unnecessary personal data. This connects to the data minimisation principle because only useful feedback should be collected, and personal identifiers should be avoided where possible.

## Current limitation

At the current submission stage, this project does not include formal user feedback. This is a limitation because the prototype has been evaluated mainly through technical testing rather than real user experience testing.

However, the plan above shows how user feedback could be collected in a controlled and ethical way during the next development stage.

## How feedback would affect future development

If feedback were collected, it would help prioritise future improvements. For example:

- if users found the workflow confusing, a merchant dashboard would become a priority;
- if users did not trust the decision result, the decision engine would need clearer explanations;
- if users wanted real customer verification, SMS integration would become more important;
- if users found address validation weak, a real geolocation API would be needed;
- if users worried about privacy, stronger security and data-retention rules would be required.

## Conclusion

User feedback would be essential before ArisGate could become a realistic commercial tool. The current prototype proves the technical workflow, but future user testing would be needed to check whether merchants understand, trust, and value the system.

For the final submission, this file documents the planned feedback approach honestly and identifies user evaluation as a future improvement rather than pretending that full user research has already been completed.