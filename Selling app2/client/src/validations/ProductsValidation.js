import * as Yup from 'yup'

const ProductsSchema = Yup.object().shape({
    image: Yup.string().url().required(),
    title: Yup.string().min(4).required(),
    description: Yup.string().min(7).max(50),
});

export default ProductsSchema