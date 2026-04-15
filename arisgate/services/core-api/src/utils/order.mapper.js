const mapInputToOrderDraft = (payload) => {
  const items = Array.isArray(payload.items) ? payload.items : [];
  const coordinates = payload.coordinates || {};

  return {
    customerName: String(payload.customerName || payload.name || "").trim(),
    phone: String(payload.phone || "").trim(),
    addressLine: String(payload.addressLine || payload.address || "").trim(),
    city: String(payload.city || "").trim(),
    country: String(payload.country || "Morocco").trim(),
    deliveryNotes: String(payload.deliveryNotes || "").trim(),
    preferredLanguage: payload.preferredLanguage === "ar" ? "ar" : "en",
    verificationMethod:
      payload.verificationMethod === "geolocation" ? "geolocation" : "manual_address",
    orderValue: Number(payload.orderValue || 0),
    items: items.map((item) => ({
      name: String(item.name || "").trim(),
      quantity: Number(item.quantity || 1),
      price: Number(item.price || 0),
    })),
    location: {
      lat: coordinates.lat !== undefined ? Number(coordinates.lat) : undefined,
      lng: coordinates.lng !== undefined ? Number(coordinates.lng) : undefined,
      accuracy:
        coordinates.accuracy !== undefined ? Number(coordinates.accuracy) : undefined,
      source: payload.verificationMethod === "geolocation" ? "browser" : "manual",
    },
  };
};

module.exports = {
  mapInputToOrderDraft,
};
