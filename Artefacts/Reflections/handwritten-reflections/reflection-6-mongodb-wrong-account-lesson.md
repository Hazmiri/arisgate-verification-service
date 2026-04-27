# Reflection 16 – The MongoDB Wrong Account Lesson

## Date
Retrospective reflection based on MongoDB Atlas testing

## Model
Rolfe et al. – What? So What? Now What?

## What?

One of the strangest moments was when Postman showed a successful response, but I could not see the data in MongoDB Atlas. I thought the database was not saving. I started questioning the backend, the model, the controller and the connection.

Then I realised I was looking in the wrong MongoDB Atlas account. The code was working. The data was being saved. I was checking the wrong place.

At first, I felt stupid. But after I calmed down, I saw that this was a real developer problem. Not every bug lives inside the code.

## So What?

This mattered because it taught me to check the whole system, not only the code. Modern software depends on accounts, cloud services, environment variables, permissions, network access and credentials. A developer needs to think across the full environment.

This also became good evidence for my portfolio because it showed real debugging. The mistake was embarrassing, but it was useful because I learned from it.

## Now What?

Next time I use a cloud service, I will check the account, project, cluster, database and collection before assuming the application is broken. I will also write down environment details more carefully so I do not lose time searching in the wrong place.