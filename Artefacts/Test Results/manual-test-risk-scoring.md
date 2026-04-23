# Manual Test – Risk Scoring

## Test 1 – Valid order

Input:

- name: John Doe
- phone: +97155555555
- address: Dubai Marina

Expected result:

- riskScore = 0

Actual result:

- riskScore = 0

Status:

- Pass

## Test 2 – Suspicious order

Input:

- name: A
- phone: 123
- address: X

Expected result:

- riskScore = 100

Actual result:

- riskScore = 100

Status:

- Pass
