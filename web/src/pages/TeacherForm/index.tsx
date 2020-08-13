import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader'

import './styles.css'
import Input from '../../components/Input'

import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/TextArea'
import Select from '../../components/Select'
import api from '../../services/api'

import { useHistory } from 'react-router-dom'

const TeacherForm = () => {

  const history = useHistory()

  const [name, setName] = useState<string>('')
  const [avatar, setAvatar] = useState<string>('')
  const [whatsapp, setWhatsapp] = useState<string>('')
  const [bio, setBio] = useState<string>('')
  const [subject, setSubject] = useState<string>('')
  const [cost, setCost] = useState<string>('')

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ])

  function addNewScheduleItem(e: FormEvent) {
    e.preventDefault()

    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ])
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault()
    
    const newClassData = {
      name, 
      avatar, 
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }

    api.post('classes', newClassData)
    .then(() => alert('Success!'))
    .catch(err => console.log(err))

    history.push('/')
  }

  function setScheduleItemValue(position: number, fieldName: string, value: string) {
    const updatedScheduleArr = scheduleItems.map((item, index) => {
      if(index === position) {
        return { ...item, [fieldName]: value}
      }

      return item
    })

    setScheduleItems(updatedScheduleArr)
  }

  return (
    <div id='page-teacher-form' className='container'>
      <PageHeader 
        title='Que incrível que você quer dar aulas' 
        description='O primeiro passo é preencher esse formulário de inscrição'
      />

      <main>
        <form onSubmit={handleCreateClass}>
        <fieldset>
          <legend>Seus dados</legend>

            <Input 
              label='Nome completo' 
              name='name' 
              value={name} 
              onChange={(e) => 
              setName(e.target.value)}  
            />
            <Input 
              label='Avatar' 
              name='avatar' 
              value={avatar} 
              onChange={(e) => 
              setAvatar(e.target.value)} 
            />
            <Input 
              label='Whatsapp' 
              name='whatsapp' 
              value={whatsapp} 
              onChange={(e) => 
              setWhatsapp(e.target.value)}  
            />
            <Textarea 
              label='Bio' 
              name='bio' 
              value={bio} 
              onChange={(e) => 
              setBio(e.target.value)} 
            />

        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select 
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            label='Matéria'
            name='subject' 
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
              { value: 'Redação', label: 'Redação' },
            ]}
          />
          <Input 
            label='Custo por aula' 
            name='cost' 
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />

        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>

          {scheduleItems.map((item, index) => (
            <div key={item.week_day} className="schedule-item">
              <Select 
                value={item.week_day}
                onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)}
                label='Dia da semana'
                name='week_day' 
                options={[
                  { value: '0', label: 'Domingo' },
                  { value: '1', label: 'Segunda-feira' },
                  { value: '2', label: 'Terça-feira' },
                  { value: '3', label: 'Quarta-feira' },
                  { value: '4', label: 'Quinta-feira' },
                  { value: '5', label: 'Sexta-feira' },
                  { value: '6', label: 'Sábado' },
                ]}
              />
              <Input 
                name='from' 
                label='Das' 
                type='time'
                value={item.from}
                onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)}
               />
              <Input 
                name='to' 
                label='Até' 
                type='time'
                value={item.to}
                onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)} 
              />
            </div>
          ))}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Warning"/>
            Importante <br />
            Preencha todos os dados
          </p>

          <button type='submit'>
            Salvar cadastro
          </button>
        </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm