# Reflection 04 – MongoDB and Environment Configuration

## Date
Retrospective reflection written during final submission preparation

## Model
Rolfe et al. – What? So What? Now What?

## What?
Connecting the backend to MongoDB Atlas was one of the most difficult parts of the project. I had errors where the database URI was `undefined`, then I had an invalid connection string, and later I was looking in the wrong MongoDB Atlas account. At one point I thought the system was not saving records, but the real issue was that I was checking the wrong place.

## So What?
This was a serious learning moment. I realised that not every problem is a code problem. Some problems come from environment variables, credentials, cloud accounts, or configuration. I also learned why `.env` files are powerful but dangerous if they are not handled carefully.

## Now What?
I will keep `.env` out of Git, use `.env.example` for safe documentation, and avoid exposing passwords in screenshots or reports. After marking, I will rotate the MongoDB password so the project remains secure.