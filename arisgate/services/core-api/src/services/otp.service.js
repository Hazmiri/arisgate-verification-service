/**
 * Generates a simple 6-digit OTP code for verification.
 */
const generateOtpCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

module.exports = {
  generateOtpCode
};