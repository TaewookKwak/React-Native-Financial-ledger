import { StyleSheet } from 'react-native'

const commonStyles = StyleSheet.create({
  btnType1: {
    borderRadius: '50%',
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 60,
    height: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  btnType1Text: {
    color: 'white',
    fontSize: '30px',
    fontWeight: 'bold',
  },

  flexColFirstEnd: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },

  flexRowFirstCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})

export default commonStyles
