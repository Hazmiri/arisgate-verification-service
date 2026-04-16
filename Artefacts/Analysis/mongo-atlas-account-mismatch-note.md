# MongoDB Atlas Account Mismatch Note

During validation of the ArisGate risk scoring feature, the API returned successful responses and MongoDB write operations appeared to succeed, but the expected records were not visible in Atlas. After checking the backend, controller, and model logic, the issue was traced to using the wrong MongoDB Atlas account when browsing the database.

This was not a software defect in the ArisGate backend. It was an environment and account-selection issue. The fix was to switch to the correct Atlas account and confirm the records in the correct `arisgate > orders` collection.

This debugging step was useful because it reinforced the importance of separating code failures from infrastructure, account, and configuration issues.