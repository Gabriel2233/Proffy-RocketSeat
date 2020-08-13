import React from 'react'

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
import api from '../../services/api'

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
}

interface Props {
  data: Teacher
}

const TeacherItem: React.FC<Props> = ({ data }) => {

  function handleConnection() {
    api.post('connection', {
      user_id: data.id
    })
  }
  return (
    <article className="teacher-item">
        <header>
          <img src={data.avatar} alt={data.name} />
          <div>
            <strong>{data.name}</strong>
            <span>{data.subject}</span>

            <p>
              {data.bio}
            </p>
          </div>
        </header>
        <footer>
          <p>
            Preço/hora
            <strong>R$ {data.cost}</strong>
          </p>
          <a target='blank' href={`https://wa.me/${data.whatsapp}`} onClick={handleConnection}>
            <img src={whatsAppIcon} alt="Whatsapp"/>
            Entrar em contato
          </a>
        </footer>
      </article>
  )
}

export default TeacherItem