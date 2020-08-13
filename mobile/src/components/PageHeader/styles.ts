import { StyleSheet } from 'react-native'

const pageHeaderStyles = StyleSheet.create({
  container: {
    padding: 60,
    backgroundColor: '#8257e5'
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#8257e5'
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40
  }
})

export default pageHeaderStyles