import { StyleSheet, Text, View, Image,ScrollView } from 'react-native'
import React from 'react'

const Detail = () => {
    
  return (
    <View style={styles.container}>
      <Text>Detailllô</Text>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
  },
})
