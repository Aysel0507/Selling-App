import React from 'react'
import { useFormik } from 'formik';
import { useGetProductsByNameQuery, usePostOneMutation } from '../../services/ProductsApi';
import { useNavigate } from 'react-router-dom';
import ProductsSchema from '../../validations/ProductsValidation';
import { Button,Form, Input } from 'antd';

const AddPage = () => {
    
  const [postOne]=usePostOneMutation()
  const{refetch}=useGetProductsByNameQuery()
  const navigate=useNavigate()
 
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: async (values,actions) => {
      console.log(values)
      await postOne(values)
      navigate('/')
      refetch()
      actions.resetForm()
    },
    validationSchema: ProductsSchema
  })


  return (
    <>
    <Form style={{marginTop:'200px'}} onSubmit={formik.handleSubmit}>
      <Input name='image' value={formik.values.image} onChange={formik.handleChange} type="url" placeholder='Enter image url'/>
      {formik.errors.image && formik.touched.image && <span style={{color:'red'}}>{formik.errors.image}</span>}

      <Input name='title' value={formik.values.title} onChange={formik.handleChange} type="text" placeholder='Enter image title' />
      {formik.errors.title && formik.touched.title && <span style={{color:'red'}}>{formik.errors.title}</span>}

      <Input name='description' value={formik.values.description} onChange={formik.handleChange} type="text" placeholder='Enter image description' />
      {formik.errors.description && formik.touched.description && <span style={{color:'red'}}>{formik.errors.description}</span>}
      <Button>Add</Button>
    </Form>


    </>
  )
}
 export default AddPage