import { StyleSheet } from 'react-native'
import { useFonts } from '@expo-google-fonts/archivo'

const teacherItemStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e6ebf0',
    borderRadius: 8 ,
    marginBottom: 16,
    overflow: 'hidden'
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee'
  },

  profileInfo: {
    marginLeft: 16
  },

  name: {
    color: '#32264d',
    fontFamily: 'Archivo_700Bold',
    fontSize: 20
  },

  subject: {
    fontFamily: 'Poppins_400Regular',
    color: '#32264d',
    fontSize: 12,
    marginTop: 4
  },

  bio: {
    marginHorizontal: 24,
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    lineHeight: 24,
    color: '#6a6180'
  },

  footer: {
    backgroundColor: '#fafafc',
    padding: 24,
    alignItems: 'center',
    marginTop: 24
  },

  price: {
    fontFamily: 'Poppins_400Regular',
    color: '#6a6180',
    fontSize: 14
  },

  value: {
    fontFamily: 'Archivo_700Bold',
    color: '#8257e5',
    fontSize: 16,
    marginLeft: 16
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16
  },

  favoriteBtn: {
    height: 56,
    width: 56,
    backgroundColor: '#8257e5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  },

  favorited: {
    backgroundColor: '#e33d3d'
  },

  contactBtn: {
    flex: 1,
    height: 56,
    backgroundColor: '#04d361',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  },

  contactText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    marginLeft: 16
  }
})

export default teacherItemStyles