const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();

  res.status(200).json(contacts);
});
const createContact = asyncHandler(async (req, res) => {
  // console.log("create contect", req);

  const { name, age, phone } = req.body;
  if (!name || !age || !phone) {
    res.status(400);
    throw new Error("All fields are require");
  }
  // console.log("create contect", req.body);

  res.status(201).json({ message: "create contact" });
});
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
});
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update contacts for ${req.params.id}` });
});
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete contacts for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
