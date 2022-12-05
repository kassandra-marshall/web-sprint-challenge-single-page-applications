import * as yup from 'yup';

const schema = yup.object().shape({
    pizzaName: yup.string().required('name is required').min(2,'name must be at least 2 characters'),
    size: yup.string().oneOf(['small', 'medium', 'large']).required('size is required'),
    toppings: yup.boolean().oneOf([true, false]),
    instructions: yup.string()
})

export default schema;