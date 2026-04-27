# Reflection 08 – Address Validation and LBS Thinking

## Date
Retrospective reflection written during final submission preparation

## Model
Rolfe et al. – What? So What? Now What?

## What?
I added a mock address validation service to represent the location-based part of the proposal. The system can classify an address as valid or invalid and return a location confidence score. This is not a real geolocation API yet, but it shows the logic of checking address quality before fulfilment.

## So What?
This helped me understand the difference between a prototype and a final product. At first, I wanted the system to be fully real, but then I understood that a proof of concept can still be valuable if it demonstrates the design clearly. The LBS idea is present, but it is simulated.

## Now What?
If I had more time, I would connect the system to a real geocoding or address validation API. For now, I will clearly explain the limitation and show that the architecture leaves space for a real LBS service later.