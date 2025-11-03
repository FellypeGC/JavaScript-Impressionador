import React from 'react'
import styles from "./footer.module.css"

export const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} HashtagProfile. Todos os direitos reservados.</p>
    </footer>
  )
}
