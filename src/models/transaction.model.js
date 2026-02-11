const mongoose = require("mongoose");

const transectionSchema = new mongoose.Schema(
  {
    fromAccount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "account",
      required: [true, "From account is required for creating transection"],
      index: true,
    },
    toAccount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "account",
      required: [true, "To Account is required for creating transection "],
      index: true,
    },
    status: {
      type: String,
      enum: {
        values: ["PENDING", "COMPLETED", "FAILED", "REVERSED"],
        message: "Status must be either PENDING, COMPLETED, FAILED or REVERSED",
      },
      default: "PENDING",
    },

    amount: {
      type: Number,
      required: [true, "Amount is required for creating transection"],
      min: [0, "Amount must be greater than or equal to 0"],
    },
    idempotencyKey: {
      type: String,
      required: [true, "Idempotency key is required for creating transection"],
      index: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

const transectionModel = mongoose.model("transection", transectionSchema);

module.exports = transectionModel;