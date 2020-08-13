import React from 'react'
import { View, Text, ImageBackground } from 'react-native'

import giveClassesBg from '../../assets/images/give-classes-background.png'

import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const GiveClasses = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode='contain' 
        source={giveClassesBg} 
        style={styles.content}
       >
          
        <Text style={styles.title}>
          Quer ser um Proffy?
          <Text style={styles.description}>
            Para começar, você precisa se cadastrar como professor na nossa plataforma web.
          </Text>
        </Text>

        <RectButton onPress={() => navigation.goBack()} style={styles.okButton}>
          <Text style={styles.okText}>Tudo bem</Text>
        </RectButton>
      </ImageBackground>
    </View>
  )
}

export default GiveClasses