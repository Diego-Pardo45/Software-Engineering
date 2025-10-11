import Joi from "joi";

export const authUserBodyValidation = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "El email debe de estar en el formato correcto",
        "any.required": "El email es requerido",
        "string.empty": "El email no puede estar vacío"
    }),
    password: Joi.string()
    .min(8)
    .max(12)
    .pattern(/(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'"\\|,.<>\/?`~])/)
    .required()
    .messages({
        "string.min": "La contraseña debe de tener como mínimo 8 caracteres",
        "string.max": "La contraseña debe tener como máximo 12 caracteres",
        "string.pattern.base": "La contraseña debe de contener al menos una letra, un número y un carácter especial",
        "any.required": "La contraseña es obligatoria"
    }),
});