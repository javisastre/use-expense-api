const express = require("express");

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

let Expense = require("../models/Expense");

class Controller {
  async getAllExpenses(req, res) {
    try {
      const expenses = await Expense.find();
      res.json(expenses);
    } catch (error) {
      console.log(error);
    }
  }

  async getExpense(req, res) {
    const { id } = req.params;
    if (!ObjectId.isValid(id) && !id.match(/^[a-fA-F0-9]{24}$/)) {
      return res.status(404).send({
        success: "false",
        message: "expense does not exist",
      });
    }
    try {
      const expense = await Expense.findById(id);
      res.json(expense);
    } catch (error) {
      console.log(error);
    }
  }

  async createExpense(req, res) {
    let newExpense = new Expense(req.body);
    if (!req.body.amount || !req.body.category) {
      return res.status(400).send({
        success: "false",
        message: "amount and category are required",
      });
    }
    try {
      const expense = await newExpense.save();
      res.status(200).json(expense);
    } catch (error) {
      res.status(400).send({
        success: "false",
        message: "Unable to save expense to database",
      });
    }
  }

  async updateExpense(req, res) {
    const { id } = req.params;
    const data = req.body;

    if (!ObjectId.isValid(id) && !id.match(/^[a-fA-F0-9]{24}$/)) {
      return res.status(404).send({
        success: "false",
        message: "expense does not exist",
      });
    }
    if (!req.body.amount || !req.body.category) {
      return res.status(400).send({
        success: "false",
        message: "amount and category are required",
      });
    }

    try {
      const updated = await Expense.findByIdAndUpdate(id, data, { new: true });
      return res.status(200).json(updated);
    } catch (error) {
      res.json(error);
    }
  }

  async deleteExpense(req, res) {
    const { id } = req.params;
    if (!ObjectId.isValid(id) && !id.match(/^[a-fA-F0-9]{24}$/)) {
      return res.status(404).send({
        success: "false",
        message: "expense does not exist",
      });
    }
    try {
      const deleted = await Expense.findByIdAndRemove(id);
      return res.status(200).json(deleted);
    } catch (error) {
      res.status(400).send({
        success: "false",
        message: "Unable to delete expense from database",
      });
    }
  }
}

const ExpenseController = new Controller();
module.exports = ExpenseController;
