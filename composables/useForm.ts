import Joi from "joi";
import type { Schema } from "joi";
import { reactive, ref } from "vue";

export function useForm<T>(form: T, schema: Schema<T>) {
  const errors = reactive<Record<string, string>>({});
  const isValid = ref(false);

  const validate = (): { valid: boolean; formData: T | null } => {
    const { error, value } = schema.validate(form, { abortEarly: false });

    if (error) {
      error.details.forEach((detail) => {
        errors[detail.path.join(".")] = detail.message;
      });
      isValid.value = false;
      return { valid: false, formData: null };
    }

    Object.keys(errors).forEach((key) => delete errors[key]);
    isValid.value = true;
    return { valid: true, formData: value as T };
  };

  return { validate, errors, isValid };
}
