# Reflection 19 – Security After Seeing the .env Risk

## Date
Retrospective reflection based on final security cleanup

## Model
Rolfe et al. – What? So What? Now What?

## What?

One serious moment was realising that the real `.env` file could expose the MongoDB connection string. Before this project, I knew passwords should be private, but seeing it inside a real project made the lesson more serious.

The `.env` file was not just a technical detail. It contained access to the database. If that file is pushed publicly, the project becomes unsafe. This made me stop and think about security as something practical, not only something written in theory.

## So What?

This mattered because ArisGate handles data that could be sensitive in a real system: names, phone numbers, addresses and verification states. Even in a prototype, I have a responsibility to think about privacy and access.

I also learned that security is not only about hackers. Sometimes the biggest risk is the developer making a mistake and publishing something that should stay private.

## Now What?

From now on, I will check `.gitignore` early in every project. I will use `.env.example` for safe documentation and keep real credentials local. After marking, I will rotate the MongoDB password because the safest action is not only to hide the file now, but also to replace the old secret.