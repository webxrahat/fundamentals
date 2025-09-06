const getContacts = (req, res) => {
 res.status(200).json({ message: "get all contacts" });
};
const createContact = (req, res) => {
 // console.log("create contect", req);

 const { name, age, phone } = req.body;
 if (!name || !age || !phone) {
  res.status(400);
  throw new Error("All fields are require");
 }
 console.log("create contect", req.body);

 res.status(201).json({ message: "create contact" });
};
const getContact = (req, res) => {
 res.status(200).json({ message: `get contact for ${req.params.id}` });
};
const updateContact = (req, res) => {
 res.status(200).json({ message: `update contacts for ${req.params.id}` });
};
const deleteContact = (req, res) => {
 res.status(200).json({ message: `delete contacts for ${req.params.id}` });
};

module.exports = {
 getContacts,
 createContact,
 getContact,
 updateContact,
 deleteContact,
};
