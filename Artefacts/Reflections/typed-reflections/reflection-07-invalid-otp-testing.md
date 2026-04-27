# Reflection 07 – Invalid OTP Testing

## Date
Retrospective reflection written during final submission preparation

## Model
Rolfe et al. – What? So What? Now What?

## What?
When testing OTP verification, I realised I could not only test the correct code. I also needed to test what happened when the wrong code was submitted. I used Postman to send an invalid OTP and confirmed that the API returned an error and kept the order unverified.

## So What?
This was important because good testing is not only about proving that something works. It is also about proving that the system refuses incorrect or unsafe behaviour. A verification system that accepts every code would be useless. Testing the negative path made my evidence stronger and helped me think more like a developer.

## Now What?
In future projects, I will always include negative tests. I will ask: what should the system reject, block, or protect against? This will make my testing more realistic and more professional.