import { StyleSheet, Text, View, Image,ScrollView } from 'react-native'
import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/types';
const Detail = () => {
    const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>();
    const { id, title, image, subtitle } = route.params;

    return(
    <View style={styles.container}>
       <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 10 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{title}</Text>
      <Text>ID sản phẩm: {id}</Text>
      <Text>{subtitle}</Text>
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
