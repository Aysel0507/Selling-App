import React from 'react'
import styles from './index.module.scss'
import { useGetProductsByNameQuery } from '../../services/ProductsApi'
import {Row, Col} from 'antd'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Home = () => {
  const {data:products,refetch}=useGetProductsByNameQuery()
  console.log(products)
  return (
    <>
    <section id={styles.banner}>
        <div className="container">
          <div className={styles.banner}>
            <h3>Welcome to Villa resort</h3>
            <p>Discover our world-class hotel & restaurant resort.</p>
            <button className={styles.btn1}>EXPLORE THE BEAUTY</button>
            <button className={styles.btn2}>DOWNLOAD</button>
          </div>
        </div>
    </section>





    <section id={styles.slider}>
      <div className="container">
        <div className={styles.slider}>
          <div className={styles.headingS}>
            <h3>A gorgeous place to enjoy your life.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.</p>
          </div>

        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://preview.colorlib.com/theme/villa/img/slider-4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://preview.colorlib.com/theme/villa/img/slider-5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://preview.colorlib.com/theme/villa/img/slider-6.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://preview.colorlib.com/theme/villa/img/slider-4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://preview.colorlib.com/theme/villa/img/slider-5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://preview.colorlib.com/theme/villa/img/slider-6.jpg" alt="" /></SwiperSlide>
      </Swiper>
          
        </div>
      </div>
    </section>





    <section style={{marginTop:'150px'}} id={styles.products}>
        <div className="container">
          <div className={styles.headingP}>
            <h3>Recent Blog Post</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.</p>
          </div>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {products && products.data.map((product)=>{
            return (
            <Col className="gutter-row"  span={6} xs={24} md={12} lg={8}>
              <div className={styles.card}>
                <img style={{width:'300px', height:'200px'}} src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
              </div>
            </Col>
            )
          })}
        
        </Row>
        </div>
    </section>
    </>
  )
}

export default Home