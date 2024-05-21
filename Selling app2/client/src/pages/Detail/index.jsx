import { flexbox } from '@mui/system'
import { Button } from 'antd'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetOneQuery } from '../../services/ProductsApi'

const Detail = () => {
  const {id}=useParams()
  const {data:product}=useGetOneQuery(id)
  const navigate=useNavigate()
  return (
    <>
    {product && (
     <div style={{display:"flex", justifyContent:'center',alignItems:'center'}}>
        <div style={{marginTop:'150px'}}>
        <img style={{width:"400px",height:'400px'}} src={product.data?.image} alt={product.data?.title} />
      <h3>{product.data?.title}</h3>
      <p>{product.data?.description}</p>
      <Button onClick={()=>navigate(-1)}> Go Back</Button>
      </div>
     </div>
    )}
    </>
  )
}

export default Detail