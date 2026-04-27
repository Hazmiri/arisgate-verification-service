# Reflection 17 – Postman Is Not Always the Problem

## Date
Retrospective reflection based on API testing

## Model
Rolfe et al. – What? So What? Now What?

## What?

When Postman returned errors, my first reaction was sometimes to blame Postman. I thought maybe the request was not sending properly or maybe Postman had a problem. Later, I realised Postman was usually doing exactly what I asked it to do.

If the route was wrong, the method was wrong, the server was not running, or the backend crashed, Postman only showed the result. The real problem was often in my server, route, controller or terminal state.

## So What?

This was important because it changed how I use tools. A tool is not magic. Postman is a mirror. It shows me whether my API can respond. If I send a request and the response fails, I need to check the whole chain: URL, method, body, server, route, controller, database and logs.

This made my testing more professional. I stopped pressing Send randomly and started reading the response properly.

## Now What?

In future API work, I will use Postman as part of a testing method. I will record the request, expected result, actual result and status. I will also save screenshots as evidence instead of only saying “it works”.