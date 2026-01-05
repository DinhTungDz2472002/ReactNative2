import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Detail = () => {
    
  return (
    <View style={styles.container}>
      <Text>Detail</Text>
      {/* <Image source  = {require('./assets/images/logo.png')} /> */}

      <Image
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
        // source={{
        //   uri:'https://tse4.mm.bing.net/th/id/OIP.qDvAlhidTBzXiGyDfq_O0gHaE7?rs=1&pid=ImgDetMain&o=7&rm=3'
        // }}
      />
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
container: {
    flex: 1,
    textAlign: 'center',
    alignItems:'center'
  },
  logo: {
    width: 50,
    height: 50,
    margin: 'auto',
  },
})
