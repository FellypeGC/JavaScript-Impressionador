import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import styles from "./profile.module.css";

export const Profile = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.avatar} alt={props.name} className={styles.avatar} />
      <h2 className={styles.name}>{props.name}</h2>
      <div className={styles.info}>{props.bio}</div>
      <div className={styles.info}>{props.phone}</div>
      <div className={styles.info}>{props.email}</div>
      <div className={styles.links}>
        <a 
          href={props.githubURL} 
          target='_blank' 
          rel='noreferrer' 
          className={props.theme === "male" ? styles.linkButtonMale : styles.linkButton}
        >
          <FaGithub className={styles.icon} />
          GitHub
        
        </a>
        <a 
          href={props.linkedinURL} 
          target='_blank' 
          rel='noreferrer' 
          className={props.theme === "male" ? styles.linkButtonMale : styles.linkButton}
        >
          <FaLinkedin className={styles.icon} />
          LinkedIn
        </a>
        <a 
          href={props.instagramURL} 
          target='_blank' 
          rel='noreferrer' 
          className={props.theme === "male" ? styles.linkButtonMale : styles.linkButton}
        >
          <FaInstagram className={styles.icon} />
          Instagram
        </a>
      </div>
    </div>
  )
}

// O atributo rel="noreferrer" impede que a página de destino receba 
// informações sobre de onde o usuário veio. Normalmente, quando clicamos em um link,
// o navegador envia um cabeçalho HTTP chamado "Referrer" (FaSimCard, com essa grafia)
// que informa à página de destino a URL da página original. Com rel="noreferrer",
// essa informação não é enviada, garantindo mais privacidade e segurança.

// avatar="https://randomuser.me/api/portraits/women/44.jpg"
//           name="Anna Caroline Dias"
//           bio="Desenvolvedora Full-Stack"
//           phone="+55 11 98765-4321"
//           email="ana.carol.dias@email.com"
//           githubURL="https://github.com"
//           linkedinURL="https://linkedin.com/login/pt"
//           instagramURL="https://instagram.com/"
//         />