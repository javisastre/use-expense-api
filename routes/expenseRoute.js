const express = require("express");
const ExpenseController = require("../controller/expenses");

const router = express.Router();

router.get("/expenses", ExpenseController.getAllExpenses);
router.get("/expenses/:id", ExpenseController.getExpense);
router.post("/expenses", ExpenseController.createExpense);
router.put("/expenses/:id", ExpenseController.updateExpense);
router.delete("/expenses/:id", ExpenseController.deleteExpense);

module.exports = router;
