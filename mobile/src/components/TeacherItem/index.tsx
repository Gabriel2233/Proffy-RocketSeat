import React, { useState } from 'react'
import { View, Image, Text, Linking } from 'react-native'

import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'

import heartoutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import AsyncStorage from '@react-native-community/async-storage'
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
  data: Teacher;
  favorited: boolean
}

const TeacherItem: React.FC<Props> = ({ data, favorited }) => {

  const [isFavorite, setIsFavorite] = useState<boolean>(favorited)

  function handleLinkToWhatsApp() {
    api.post('connection', {
      user_id: data.id
    })
    Linking.openURL(`whatsapp://send?phone=${data.whatsapp}`)
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites')

    let favoritesArr = []

    if(favorites) {
      favoritesArr = JSON.parse(favorites)
    
    }
    if(isFavorite) {
      const favoriteIndex = favoritesArr.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === data.id
      })

      favoritesArr.splice(favoriteIndex, 1)

      setIsFavorite(false)
    } else {
     favoritesArr.push(data)
      
      setIsFavorite(true)
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArr))
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          style={styles.avatar} 
          source={{ uri: data.avatar }} 
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.subject}>{data.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        {data.bio}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'    '}
          <Text style={styles.value}>
            {data.cost}
          </Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton 
            onPress={handleToggleFavorite}
            style={[
              styles.favoriteBtn, 
              isFavorite ? styles.favorited : {},
            ]}>
            {
              isFavorite 
              ? <Image source={unfavoriteIcon} />
              : <Image source={heartoutlineIcon} />
            }          
          </RectButton>

          <RectButton onPress={handleLinkToWhatsApp} style={styles.contactBtn}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem