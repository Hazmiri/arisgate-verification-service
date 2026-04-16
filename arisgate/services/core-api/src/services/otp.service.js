/**
 * Generates a simple 6-digit OTP code for verification.
 * 
 * This is a simulation service for the research project.
 * It allows the OTP workflow to be demonstrated without
 * immediately depending on an external SMS provider.
 */
const generateOtpCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

module.exports = {
  generateOtpCode
};