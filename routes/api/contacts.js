const express = require("express");
const router = express.Router();
const contactsControllers = require("../../controllers/contacts");
const validate = require("../../validation/validation");
const validateId = require("../../validation/IdValidation");

router.get("/", contactsControllers.get);

router.get("/:id", validateId, contactsControllers.getById);

router.post("/", validate.createContact, contactsControllers.create);

router.delete("/:id", validateId, contactsControllers.remove);

router.patch(
  "/:id",
  validateId,
  validate.updateContact,
  contactsControllers.update
);

module.exports = router;
