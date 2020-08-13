import { StyleSheet } from 'react-native'

const GiveClassesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40
  },

  content: {
    flex: 1,
    justifyContent: 'center'
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },

  description: {
    marginTop: 24,
    color: '#d4c2ff',
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    maxWidth: 240,
    fontSize: 16
  },

  okButton: {
    marginVertical: 40,
    backgroundColor: '#04d361',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },

  okText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16
  }
})

export default GiveClassesStyles