const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Expense = new Schema(
  {
    amount: { type: Number },
    category: { type: String },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Expense", Expense);
