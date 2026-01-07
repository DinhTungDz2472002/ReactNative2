import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EmptyView = () => {
  return (
    <View style = {styles.emtyView}>
        <Text>Không lấy được dữ liệu</Text>
    </View>
  )
}

export default EmptyView

const styles = StyleSheet.create({
    emtyView:{
        margin:'auto',
    }
})
