import React from 'react'
import styles from './index.module.scss'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <>
    <header>
        <div id={styles.navbar}>
            <div className="container">
                <div className={styles.navbar}>
                    <div className={styles.logo}>
                        <h2>Selling.</h2>
                    </div>
                    <ul>
                       <a href="#"><Link  to={"/"}>Home</Link></a>
                       <a href="#"><Link to={"add-page"}>Add Page</Link></a>
                       <a href="#"><Link to={"basket"}>Basket</Link></a>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header