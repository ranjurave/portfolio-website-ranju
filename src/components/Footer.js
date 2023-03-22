import React from 'react'
import styles from './Footer.module.css'

function Footer() {
    return (
        <div>
            <footer>
                <div className={styles.container}>
                    <p>email: ranjurave@gmail.com</p>
                    <p>PH: +64-02102467215</p>
                    <p>&copy; 2023 Ranju Raveendran</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer