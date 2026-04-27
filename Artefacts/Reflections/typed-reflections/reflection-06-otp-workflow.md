# Reflection 06 – OTP Workflow

## Date
Retrospective reflection written during final submission preparation

## Model
Rolfe et al. – What? So What? Now What?

## What?
I built an OTP workflow where the system generates a code, stores it against an order, and then checks whether the submitted code matches. When the correct OTP is entered, the order status changes to `otp_verified`.

## So What?
This stage made the system feel more like a real verification service. Before OTP, the prototype could score an order, but it could not prove that the customer controlled the phone number. OTP added a second layer of trust. I also saw how important state changes are in backend systems because the same order moves through different stages.

## Now What?
In a real version, I would connect the OTP process to an SMS provider and avoid storing OTPs in plain text. For this academic prototype, the simulated OTP is useful because it demonstrates the logic clearly without needing paid external services.