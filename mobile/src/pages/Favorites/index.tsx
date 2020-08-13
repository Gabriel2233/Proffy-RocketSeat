import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import AsyncStorage from '@react-native-community/async-storage'

const Favorites = () => {

  const [favorites, setFavorites] = useState([])
 
  function loadFavorites() {
    AsyncStorage.getItem('favorites')
    .then(res => {
        if(res) {
          const favoritedItems = JSON.parse(res)

          setFavorites(favoritedItems)
        }
    })
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  )

  return (
    <View style={styles.container}>
      <PageHeader title='Meus Proffys favoritos' />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {favorites.map((favorite: Teacher) => (
          <TeacherItem key={favorite.id} data={favorite} favorited />
        ))}
      </ScrollView>
    </View>
  )
}

export default Favorites