import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {

  console.log('helo');
  return (
    <View style = {styles.Home}>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  Home:{
    margin:'auto',
  }
})
