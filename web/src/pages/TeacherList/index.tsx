import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import './styles.css'
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';


function TeacherList() {

  const [teachers, setTeachers] = useState([])
  const [subject, setSubject] = useState<string>('')
  const [weekDay, setWeekDay] = useState<string>('')
  const [time, setTime] = useState<string>('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const response = await api.get('classes', {
      params: {
        subject,
        week_day: weekDay,
        time,
      }
    })

    setTeachers(response.data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form onSubmit={handleSubmit} id="search-teachers">
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
           <Select
            value={weekDay}
            onChange={(e) => setWeekDay(e.target.value)} 
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
            type='time' 
            name='time' 
            label='Hora'
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button type='submit'>Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} data={teacher} />
        ))}
      </main>
    </div>
  );
}

export default TeacherList;