/**
 * Simulates a simple address quality check for the ArisGate prototype.
 * 
 * This is not yet connected to Google Maps or OpenStreetMap.
 * It provides a rule-based placeholder for future real LBS integration.
 */
const validateAddress = (address) => {
  if (!address || address.trim().length < 5) {
    return {
      addressValidation: "invalid",
      locationConfidence: 10
    };
  }

  if (address.trim().length < 10) {
    return {
      addressValidation: "unclear",
      locationConfidence: 50
    };
  }

  return {
    addressValidation: "valid",
    locationConfidence: 90
  };
};

module.exports = {
  validateAddress
};