import React from 'react'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Profile } from './components/profile/Profile'
import "./global.css"

export const App = () => {
  return (
    <>
      <Header />
      <div className="app">
        <Profile
          avatar="https://randomuser.me/api/portraits/women/44.jpg"
          name="Anna Caroline Dias"
          bio="Desenvolvedora Full-Stack"
          phone="+55 11 98765-4321"
          email="ana.carol.dias@email.com"
          githubURL="https://github.com"
          linkedinURL="https://linkedin.com/login/pt"
          instagramURL="https://instagram.com/"
        />
        <Profile
          avatar="https://randomuser.me/api/portraits/men/32.jpg"
          name="João Paulo Souza"
          bio="Engenheiro Back-End"
          phone="+55 11 98765-4322"
          email="joao.paulo.souza@email.com"
          githubURL="https://github.com"
          linkedinURL="https://linkedin.com/login/pt"
          instagramURL="https://instagram.com/"
          theme="male"
        />
        <Profile
          avatar="https://randomuser.me/api/portraits/women/55.jpg"
          name="Mariana Duarte"
          bio="Designer UI/UX"
          phone="+55 11 98765-4323"
          email="mariana.duarte@email.com"
          githubURL="https://github.com"
          linkedinURL="https://linkedin.com/login/pt"
          instagramURL="https://instagram.com/"
        />
        <Profile
          avatar="https://randomuser.me/api/portraits/men/65.jpg"
          name="Diego Gonçalves"
          bio="Desenvolvedor Front-End"
          phone="+55 11 98765-4324"
          email="diego.goncalves@email.com"
          githubURL="https://github.com"
          linkedinURL="https://linkedin.com/login/pt"
          instagramURL="https://instagram.com/"
          theme="male"
        />
      </div>
      <Footer />
    </>
  )
}

// import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";