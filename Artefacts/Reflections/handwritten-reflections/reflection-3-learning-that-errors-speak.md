# Reflection 13 – Learning That Errors Speak

## Date
Retrospective reflection based on backend debugging

## Model
Rolfe et al. – What? So What? Now What?

## What?

When I started the backend, the terminal became my teacher. At first, every error felt like a wall. I saw messages about missing modules, wrong package names, undefined functions and crashed servers. I remember feeling annoyed because I wanted to move forward, but Node.js kept stopping me.

Later, I noticed something important: the error messages were not random. They were pointing to the exact file and line. For example, when the database connector was not exported correctly, the terminal showed where `connectDatabase` was failing. When `Order.create` was not a function, the issue was not Postman; it was the model import or model export.

## So What?

This changed how I think about debugging. Before, I sometimes saw errors as proof that I was doing badly. Now I see them as evidence. The machine was telling me what it could not understand. My job was to slow down, read, and follow the path.

This matters for my professional development because a developer who panics at errors will waste time. A developer who reads errors carefully can move faster.

## Now What?

In future, when I see an error, I will first check the file path, line number and exact message. I will not change five files at once. I will fix one thing, test it, and then commit. That is slower for the ego, but faster for the project.