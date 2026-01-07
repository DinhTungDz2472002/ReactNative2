import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

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
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:16,
    }
})