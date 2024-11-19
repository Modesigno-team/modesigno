import Joi from "joi";

export interface LoginData {
  email: string;
  password: string;
}

export const LoginSchema = Joi.object<LoginData>({
  email: Joi.string().email({ tlds: false }).messages({
    "string.empty": "Email is required.",
    "string.email": "Email must be a valid email address.",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password is required.",
  }),
});