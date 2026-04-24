/**
 * Produces a simple verification decision for an ArisGate order.
 * 
 * The goal is to convert technical signals into an operational outcome.
 */
const evaluateOrderDecision = ({ riskScore, otpVerified, addressValidation }) => {
  if (!otpVerified) {
    return {
      verificationDecision: "manual_review",
      decisionReason: "OTP has not been verified"
    };
  }

  if (addressValidation === "invalid") {
    return {
      verificationDecision: "rejected",
      decisionReason: "Address failed validation"
    };
  }

  if (riskScore >= 50) {
    return {
      verificationDecision: "manual_review",
      decisionReason: "Order risk score is elevated"
    };
  }

  return {
    verificationDecision: "approved",
    decisionReason: "OTP verified and risk profile acceptable"
  };
};

module.exports = {
  evaluateOrderDecision
};