process.env.MOCK_SERVICES = "true";

const request = require("supertest");
const app = require("../src/app");

describe("ArisGate order verification routes", () => {
  it("starts a verification flow with geolocation", async () => {
    const response = await request(app).post("/v1/orders/verify/start").send({
      customerName: "Salahdine Test",
      phone: "+212600123456",
      addressLine: "12 Avenue Hassan II",
      city: "Casablanca",
      country: "Morocco",
      orderValue: 120,
      preferredLanguage: "en",
      verificationMethod: "geolocation",
      coordinates: {
        lat: 33.5731,
        lng: -7.5898,
        accuracy: 42,
      },
      items: [{ name: "Phone case", quantity: 1, price: 120 }],
    });

    expect(response.statusCode).toBe(201);
    expect(response.body.status).toBe("otp_pending");
    expect(response.body.order.locationCheck.confidence).toBeGreaterThan(0.8);
    expect(response.body.otpPreview).toHaveLength(6);
  });

  it("rejects confirmation when the OTP is incorrect", async () => {
    const start = await request(app).post("/v1/orders/verify/start").send({
      customerName: "Salahdine Test",
      phone: "+212600123456",
      addressLine: "12 Avenue Hassan II",
      city: "Casablanca",
      country: "Morocco",
      verificationMethod: "manual_address",
      preferredLanguage: "en",
    });

    const response = await request(app).post("/v1/orders/verify/confirm").send({
      orderId: start.body.orderId,
      otpCode: "000000",
    });

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toMatch(/incorrect/i);
  });

  it("confirms the order when the OTP matches", async () => {
    const start = await request(app).post("/v1/orders/verify/start").send({
      customerName: "Salahdine Test",
      phone: "+212600123456",
      addressLine: "12 Avenue Hassan II",
      city: "Casablanca",
      country: "Morocco",
      verificationMethod: "manual_address",
      preferredLanguage: "ar",
    });

    const response = await request(app).post("/v1/orders/verify/confirm").send({
      orderId: start.body.orderId,
      otpCode: start.body.otpPreview,
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.order.status).toBe("verified");
    expect(response.body.message).toMatch(/التحقق|verified/i);
  });
});
