import { StyleSheet, Text, View, Image,ScrollView, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const {width, height} = Dimensions.get('window');


const Detail = () => {
    const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>();
    const { id, title, image, subtitle } = route.params;
    // const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return(
    <View style={styles.container}>
      <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 10 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{title}</Text>
      <Text>{subtitle}</Text>

      {/* <Pressable onPress={() => navigation.navigate('HomeTab')
      }>
         <Text>Bấm vào đây</Text>
      </Pressable> */}
    </View>
    
    )
}

export default Detail

const styles = StyleSheet.create({
container: {
   
    alignItems: 'center',
    justifyContent:'center',
    width: width*0.9,
    height: height*0.6,
    margin:'auto',
    padding: 20,
    gap: 20,
    
    backgroundColor: '#fff', // ❗ BẮT BUỘC CHO iOS
    shadowColor: '#000',            // iOS shadow màu đen
    shadowOffset: { width: 0, height: 4 },  // bóng lệch xuống 4px
    shadowOpacity: 0.3,             // độ mờ bóng
    shadowRadius: 6,                // độ mờ bóng
    
    elevation: 8,                  // Android elevation (bóng)
    borderRadius: 16,               // bo góc shadow container
  },
})
