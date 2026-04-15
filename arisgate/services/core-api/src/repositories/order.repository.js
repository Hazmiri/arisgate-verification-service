const mongoose = require("mongoose");
const crypto = require("crypto");
const Order = require("../models/order.model");

const memoryStore = new Map();

const clone = (value) => JSON.parse(JSON.stringify(value));

const normalizeId = (value) => String(value);

const buildMemoryRecord = (payload) => {
  const now = new Date().toISOString();

  return {
    ...clone(payload),
    _id: crypto.randomUUID(),
    createdAt: now,
    updatedAt: now,
  };
};

const isDatabaseReady = () => mongoose.connection.readyState === 1;

const createOrder = async (payload) => {
  if (isDatabaseReady()) {
    return Order.create(payload);
  }

  const record = buildMemoryRecord(payload);
  memoryStore.set(record._id, record);
  return record;
};

const findOrderById = async (orderId) => {
  if (isDatabaseReady()) {
    return Order.findById(orderId);
  }

  return memoryStore.get(normalizeId(orderId)) || null;
};

const updateOrderById = async (orderId, updates) => {
  if (isDatabaseReady()) {
    return Order.findByIdAndUpdate(orderId, updates, { new: true });
  }

  const existing = memoryStore.get(normalizeId(orderId));

  if (!existing) {
    return null;
  }

  const merged = {
    ...existing,
    ...clone(updates),
    updatedAt: new Date().toISOString(),
  };

  memoryStore.set(normalizeId(orderId), merged);
  return merged;
};

module.exports = {
  createOrder,
  findOrderById,
  updateOrderById,
  isDatabaseReady,
};
