import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { getList } from '../services/posts';

type Props = {
    onRetry:()=>void;
}
const {width, height} = Dimensions.get('window');
const ErrorView = ({onRetry}:Props) => {
  return (
    <View style={styles.error}>
      <Text>Lỗi không tải được dữ liệu</Text>
      <Pressable style= {styles.retryBtn} onPress= {onRetry}>
          <Text style= {styles.retryText}>Thử lại</Text>
        </Pressable>
    </View>
  )
}

export default ErrorView

const styles = StyleSheet.create({
    error:{
        height:height*0.8,
        margin:'auto',
        justifyContent:'center',
        gap:20,
    },
    retryBtn: {
      backgroundColor: '#0A84FF', // iOS style
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 24,
    elevation: 2,
    alignItems:'center',
  },
  retryText:{
    color:'#fff', 
  }
})