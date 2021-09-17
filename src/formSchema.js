import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required!')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'Size is required!'),
    sauce: yup
        .string()
        .oneOf(['original red', 'garlic ranch', 'bbq sauce', 'spinach alfredo'], 'Sauce is required!'),
    special: yup
        .string()
        .trim(),
    pepperoni: yup.boolean(),
    chicken: yup.boolean(),
    olives: yup.boolean(),
    onions: yup.boolean(),
    mushrooms: yup.boolean(),
    peppers: yup.boolean(),
})

export default formSchema;