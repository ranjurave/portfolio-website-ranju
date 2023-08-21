import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
    return (
        <div>
            <footer>
                <div className={styles.container}>
                    <p>email: ranjurave@gmail.com</p>
                    <p>PH: +64-02102467215</p>
                    <Link to='/bb'> <p>&copy; 2023 Ranju Raveendran</p></Link>
                </div>
            </footer>
        </div>
    )
}

export default Footer