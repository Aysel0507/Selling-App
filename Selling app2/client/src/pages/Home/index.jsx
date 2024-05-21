import React from 'react'
import { useDeleteOneMutation, useGetProductsByNameQuery } from '../../services/ProductsApi'
import styles from './index.module.scss'
import { Grid } from '@mui/material'
import { Button, Col,Row } from 'antd';
import { Link } from "react-router-dom"

const Home = () => {
  const { data: products, refetch } = useGetProductsByNameQuery()
  const [deleteOne] = useDeleteOneMutation()
  return (
    <>
      <section id={styles.banner}>
        <div className='container'>
          <div className={styles.banner}>
            <h3>Shop With Us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
            <div className={styles.btn}>
              <button type='submit' className={styles.btn1}>Shop Now</button>
              <button type='submit' className={styles.btn2}>Club Membership</button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '200px', marginBottom: '100px' }}>
        <div id={styles.products}>
          <div className="container">
            <div className={styles.products}>
              <div className={styles.headingP}>
                <h2>Our Products</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
              </div>
              <Grid container spacing={2}>
                {products && products.data.map((product) => {
                  return (
                    <Grid item xs={12} sm={8} md={6} lg={4} xl={4} key={product._id}>
                      <div className={styles.cards}>
                        <div className={styles.card} >
                          <img style={{ width: '300px', height: "300px" }} src={product.image} alt={product.title} />
                          <h3>{product.title}</h3>
                          <p>{product.description}</p>
                          <Button type='primary' danger onClick={async () => {
                            if (window.confirm('Are you sure delete this product?')) {
                              await deleteOne(product._id)
                              refetch()
                            }
                          }}>Delete</Button>
                          <Button><Link to={`/products/${product._id}`}>View</Link></Button>

                        </div>
                      </div>
                    </Grid>
                  )
                })}
              </Grid>
            </div>
          </div>
        </div>
      </section>


      <section id={styles.trusted}>
        <div className="container">
          <div className={styles.trusted}>
            <img style={{ width: '60%' }} src="https://preview.colorlib.com/theme/selling/images/about_1.jpg" />
            <div className={styles.about}>
              <h3>ABOUT US</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel
              </p>
              <Button style={{ background: 'black', color: 'white' }}>Learn More</Button>
            </div>
          </div>
        </div>
      </section>


      <section id={styles.leadership}>
        <div className="container">
          <div className={styles.leadership}>
            <div className={styles.headingL}>
              <h2>Leadership</h2>
            </div>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6} xs={24} md={12} lg={8}>
                  <div className={styles.card}>
                    <img   src="https://preview.colorlib.com/theme/selling/images/person_2.jpg" alt="" width={"100%"}/>
                    <h4>John Rooster</h4>
                    <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                  </div>
                </Col>

                <Col className="gutter-row" span={6} xs={24} md={12} lg={8}>
                  <div className={styles.card}>
                    <img src="https://preview.colorlib.com/theme/selling/images/person_3.jpg" alt="" width={"100%"}/>
                    <h4>Tom Sharp</h4>
                    <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                  </div>
                  </Col>

                <Col className="gutter-row" span={6} xs={24} md={12} lg={8}>
                  <div className={styles.card}>
                    <img src="https://preview.colorlib.com/theme/selling/images/person_4.jpg" alt="" width={"100%"}/>
                    <h4>Winston Hodson</h4>
                    <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                  </div>
                  </Col>
                
                </Row>
               
          </div>
        </div>
      </section>


      <section id={styles.services}>
        <div className="container">
          <div className={styles.services}>
            <div className={styles.headingS}>
            <h2>We Offer Services</h2>
            </div>

            <div className={styles.cards}>
                  <div className={styles.card}>
                    <h4>Business Consulting</h4>
                    <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                      <Button style={{color:'orange'}}  type="link">Learn More</Button>                      
                  </div>

                  <div className={styles.card}>
                    <h4>Market Analysis</h4>
                    <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                    <Button style={{color:'orange'}}  type="link">Learn More</Button>
                  </div>

                  <div className={styles.card}>                   
                    <h4>User Monitoring</h4>
                    <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                    <Button style={{color:'orange'}}  type="link">Learn More</Button>
                  </div>
                </div>

                <div className={styles.cards}>
                  <div className={styles.card}>
                    <h4>Business Consulting</h4>
                    <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                      <Button style={{color:'orange'}}  type="link">Learn More</Button>                      
                  </div>

                  <div className={styles.card}>
                    <h4>Market Analysis</h4>
                    <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                    <Button style={{color:'orange'}}  type="link">Learn More</Button>
                  </div>

                  <div className={styles.card}>                   
                    <h4>User Monitoring</h4>
                    <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                    <Button style={{color:'orange'}}  type="link">Learn More</Button>
                  </div>
                </div>


                

          </div>
        </div>

      </section>
    </>
  )
}

export default Home