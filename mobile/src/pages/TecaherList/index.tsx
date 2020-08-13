import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import api from '../../services/api'

const TeacherList = () => {

  const [favorites, setFavorites] = useState<Number[]>([])
  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [subject, setSubject] = useState<string>('')
  const [weekDay, setWeekDay] = useState<string>('')
  const [time, setTime] = useState<string>('')
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false)

  function handleToggleFilters() {
    setIsFilterVisible(!isFilterVisible)
  } 

  function loadFavorites() {
    AsyncStorage.getItem('favorites')
    .then(res => {
        if(res) {
          const favoritedItems = JSON.parse(res)
          const favoritedTeachersIds = favoritedItems.map((teacher: Teacher) => {
            return teacher.id
          })

          setFavorites(favoritedTeachersIds)
        }
    })
  }

  async function handleSubmit() {
    loadFavorites()

    const res = await api.get('classes', {
      params: {
        subject,
        week_day: weekDay,
        time
      }
    })

    setIsFilterVisible(false)
    setTeachers(res.data)
  }

  return (
    <View style={styles.container}>
      <PageHeader title='Proffys disponíveis' headerRight={(
        <BorderlessButton onPress={handleToggleFilters}>
          <Feather name='filter' size={20} color='#fff' />
        </BorderlessButton>
      )}>
        {isFilterVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput 
              value={subject}
              onChangeText={text => setSubject(text)}
              style={styles.input}
              placeholder='Qual é a matéria?'
              placeholderTextColor='#c1bccc'
          />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput 
                  value={weekDay}
                  onChangeText={text => setWeekDay(text)}
                  style={styles.input}
                  placeholder='Qual o dia?'
                  placeholderTextColor='#c1bccc'
                />

              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput 
                  value={time}
                  onChangeText={text => setTime(text)}
                  style={styles.input}
                  placeholder='Qual  horário?'
                  placeholderTextColor='#c1bccc'
                />

              </View>
            </View>

            <RectButton onPress={handleSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Buscar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {teachers.map((teacher: Teacher) => (
          <TeacherItem 
            key={teacher.id} 
            data={teacher} 
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default TeacherList