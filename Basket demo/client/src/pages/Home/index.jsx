import React, { useContext } from 'react'
import styles from "./index.module.scss"
import { useGetProductsByNameQuery } from '../../services/ProductsApi'
import {Row, Col, Button} from 'antd'
import { BasketContext } from '../../context/BasketContext'

const Home = () => {
  const {data:products, refetch}=useGetProductsByNameQuery()
  const {basket, setBasket}=useContext(BasketContext)
  console.log(products)
  return (
    <>
    <section id={styles.products}>
      <div className="container">
        <div className={styles.products}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {products && products.data?.map((product)=>{
            return <Col className="gutter-row" span={6} xs={24} md={12} lg={8} key={product._id}>
             <div className={styles.cards}>
              <img style={{width:'230px'}} src={product.image} alt={product.title} /> 
              <h3>{product.title}</h3>
              <h5>{product.price}</h5>
              <h5>{product.discountedPrice}</h5>
              <Button onClick={() => {
                            const dublicateItem = basket.find(
                              (x) => x._id == product._id
                            );
                            if (dublicateItem) {
                              dublicateItem.count += 1;
                              setBasket([...basket]);
                              localStorage.setItem(
                                "basket",
                                JSON.stringify([...basket])
                              );
                            } else {
                              const newBasket = { ...product };
                              newBasket.count = 1;
                              setBasket([...basket, newBasket]);
                              localStorage.setItem(
                                "basket",
                                JSON.stringify([...basket, newBasket])
                              );
                            }
                          }} variant='outlined'>Basket</Button>
              </div>
              </Col>
          })}
          </Row>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home