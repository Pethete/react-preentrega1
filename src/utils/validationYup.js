import { mixed, object, string } from "yup";

let userSchema = object({
  nombre: string().required(),
  telefono: mixed().required(),
  email: string().email().required(),
});

const validateForm = async (dataForm) => {
  try {
    await userSchema.validate(dataForm);
    return { status: "success" };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export default validateForm;
