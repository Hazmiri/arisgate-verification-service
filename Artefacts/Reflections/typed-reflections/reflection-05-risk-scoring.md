# Reflection 05 – Risk Scoring

## Date
Retrospective reflection written during final submission preparation

## Model
Rolfe et al. – What? So What? Now What?

## What?
I added a rule-based risk scoring system to ArisGate. A valid order returned a low score, while weak input such as a very short name, phone number, or address returned a higher score. I tested this through Postman and checked that MongoDB stored the results.

## So What?
This helped me understand how software can turn raw user input into a decision-support signal. The scoring system is simple, but it makes the prototype more meaningful because it does not treat every order as equally trustworthy. It also connects directly to the COD problem because poor-quality checkout data can increase delivery risk.

## Now What?
The next improvement would be to make the scoring model more realistic by using more rules, weights, or historical data. For this submission, I will explain honestly that the risk scoring is a proof of concept rather than a production fraud model.