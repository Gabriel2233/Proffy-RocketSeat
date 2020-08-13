import React, { useState, useEffect } from 'react'
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeart from '../../assets/images/icons/purple-heart.svg'

import { Link } from 'react-router-dom'

import './styles.css'

import api from '../../services/api'

interface APIResponse {
  total: number
}

const Landing = () => {

  const [connections, setConnections] = useState<number>(0)

  useEffect(() => {
    api.get<APIResponse>('connection')
    .then(res => setConnections(res.data.total))
  }, [])

  return (
    <div id='page-landing'>
      <div id="page-landing-content" className='container'>
        <div className="logo-container">
          <img src={logoImg} alt="Proffy svg"/>
          <h2>Sua Plataforma de estudos online.</h2>
        </div>

        <img src={landingImg} alt="Hero svg" className="hero-image"/>

        <div className="buttons-container">
          <Link to="/study" className='study'>
            <img src={studyIcon} alt="Study Icon"/>
            Estudar
          </Link>

          <Link to="/give-classes" className='give-classes'>
            <img src={giveClassesIcon} alt="Give Classes Icon"/>
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {connections} conexões realizadas 
          <img src={purpleHeart} alt="Purple Heart"/>
        </span>
      </div>
    </div>
  )
}

export default Landing