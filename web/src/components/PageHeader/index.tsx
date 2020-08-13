import React from 'react'

import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'

import './styles.css'

import { Link } from 'react-router-dom'

interface Props {
  title: string;
  description?: string;
}

const PageHeader:React.FC<Props> = ({ title, description, children }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to='/'>
          <img src={backIcon} alt="Go Back" />
        </Link>

        <img src={logoImg} alt="Proffy" className='proffy-img' />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        { description && <p>{description}</p> }
        { children }
      </div>

    </header>
  )
}

export default PageHeader