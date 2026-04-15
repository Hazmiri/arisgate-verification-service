const toPublicOrder = (order) => ({
  orderId: String(order._id),
  customerName: order.customerName,
  phone: order.phone,
  addressLine: order.addressLine,
  city: order.city,
  country: order.country,
  deliveryNotes: order.deliveryNotes,
  preferredLanguage: order.preferredLanguage,
  verificationMethod: order.verificationMethod,
  status: order.status,
  riskScore: order.riskScore,
  riskBand: order.riskBand,
  locationCheck: order.locationCheck,
  verificationSummary: order.verificationSummary,
  orderValue: order.orderValue,
  items: order.items || [],
  createdAt: order.createdAt,
  updatedAt: order.updatedAt,
});

module.exports = {
  toPublicOrder,
};
