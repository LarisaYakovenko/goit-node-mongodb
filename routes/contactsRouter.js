import express from "express";
import {
  getAllContacts,
  getContactById,
  deleteContact,
  createContact,
  updateContact,
} from "../controllers/contactsControllers.js";

import {validateBody, isValidId} from "../helpers/validateBody.js";
// import schemas from "../models/contact.js"
import { createContactSchema, updateContactSchema, updateFavoriteSchema }from "../schemas/contactsSchemas.js"

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:contactId", isValidId, getContactById);

contactsRouter.delete("/:contactId", isValidId, deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put("/:contactId", isValidId, validateBody(updateContactSchema), updateContact);

contactsRouter.patch("/:contactId/favorite", isValidId, validateBody(updateFavoriteSchema), updateFavorit);

export default contactsRouter;
