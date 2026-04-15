/**
 * Calculates a simple rule-based risk score for an incoming COD order.
 * 
 * Current version:
 * - short / missing phone increases risk
 * - short / missing address increases risk
 * - short / suspicious name increases risk
 * 
 * This service is intentionally simple for now.
 * Later it can be extended with:
 * - LBS distance checks
 * - repeated phone number checks
 * - IP / country mismatch
 * - OTP failure history
 */

const calculateRiskScore = ({ name, phone, address }) => {
  let riskScore = 0;

  // Rule 1:
  // Missing or very short phone number suggests poor-quality or suspicious input
  if (!phone || phone.length < 10) {
    riskScore += 50;
  }

  // Rule 2:
  // Missing or very short address increases delivery uncertainty
  if (!address || address.length < 5) {
    riskScore += 30;
  }

  // Rule 3:
  // Very short names may indicate low-quality or fake order details
  if (!name || name.length < 3) {
    riskScore += 20;
  }

  return riskScore;
};

module.exports = {
  calculateRiskScore
};