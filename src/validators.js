import * as yup from "yup"

export const idValidator = yup.number().integer().min(1)

export const boolValidator = yup.bool()

export const emailValidator = yup.string().email()

export const stringValidator = yup.string()

export const intValidator = yup.number().integer()
