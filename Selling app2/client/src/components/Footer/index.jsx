import { Button } from 'antd'
import React from 'react'
import styles from './index.module.scss'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className={styles.footer}>
            <div className={styles.end}>
              <div className={styles.headingF}>
                <h3>About Us</h3>
                <p style={{ maxWidth: "300px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
              </div>

              <div className={styles.headingF}>
                <h3>QUICK LINKS</h3>
                <ul>
                  <a href=""><li>About Us</li></a>
                  <a href=""><li>Services</li></a>
                  <a href=""><li>Testimonials</li></a>
                  <a href=""><li>Contact Us</li></a>
                </ul>
              </div>

              <div className={styles.headingF}>
                <h3>FOLLOW US</h3>
                <div className={styles.icons}>
                  <a href=""> <i className="fa-brands fa-facebook-f"></i></a>
                  <a href=""> <i className="fa-brands fa-twitter"></i></a>
                  <a href=""> <i className="fa-brands fa-dribbble"></i></a>
                  <a href=""><i className="fa-brands fa-behance"></i></a>
                </div>
               

              </div>

              <div className={styles.headingF}>
                <h3>FEATURED PRODUCT</h3>
               <div>
                 <img style={{width:'300px'}} src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg" alt="" />
                 <h3>Leather Brown Shoe</h3>
                 <span>$60.00</span>
                 <Button>Add To Card</Button>
               </div>
              </div>
            </div>
            {/* <div className={styles.colorlib}>Copyright ©2024 All rights reserved | This template is made with <i class="fa-regular fa-heart"></i>  by <a href="#" style={{ color: "#f41068" }}>Colorlib</a></div> */}
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer