import mongoose from "mongoose";

const karmaRequestSchema = new mongoose.Schema(
  {
    fromUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    toUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    offeredSkill: { type: String, required: true },
    requestedSkill: { type: String, required: true },

    status: {
      type: String,
      enum: ["Pending", "Accepted", "Declined"],
      default: "Pending",
    },

    isEmailShared: { type: Boolean, default: false },
    sharedEmail: { type: String },
  },
  { timestamps: true }
);

export const Karma = mongoose.model("Karma", karmaRequestSchema);
