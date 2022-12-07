import React from 'react'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <>

        <footer className={styles.footer}>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <span>
                <img  src="/vercel.svg" alt="Vercel Logo" />
            </span>
            </a>
        </footer>
    
    
    </>
  )
}

export default Footer