import { StyleSheet, Text, View, TextInput,Dimensions } from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get('window');
const Search = () => {
  return (
    <View>
      <TextInput style={styles.Search} placeholder="Search" />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    Search:{
        height: 40,
        margin: 8,
        borderWidth: 1,
        padding: 10,
        borderRadius:16,
        width: width*0.8,
    }
})