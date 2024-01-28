import { Schema, model } from 'mongoose';
import Joi from "joi";

import  {handleMongooseError}  from '../helpers/handleMongooseError.js';

export const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
}, { versionKey: false, timestamps: true });



export const createContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
})

export const updateContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
})

export const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
})

contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);
export default Contact;
