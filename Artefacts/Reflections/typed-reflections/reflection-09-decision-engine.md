# Reflection 09 – Decision Engine

## Date
Retrospective reflection written during final submission preparation

## Model
Rolfe et al. – What? So What? Now What?

## What?
I added a decision engine that combines the different verification signals. It checks whether OTP has been verified, whether the risk score is acceptable, and whether the address is valid enough. The system can return outcomes such as `approved` or `manual_review`.

## So What?
This was one of the most important moments in the project because ArisGate stopped feeling like separate endpoints and started to feel like a workflow. A merchant does not only need raw values; they need an outcome that helps them decide what to do. The decision engine connects the technical work to the business problem.

## Now What?
The next step would be to make the decision rules more detailed and configurable. For the final submission, I will present this as a working decision-support layer that proves the main concept of the project.