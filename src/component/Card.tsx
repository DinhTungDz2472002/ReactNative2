import { StyleSheet, Text, View, Image, Pressable, Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
const {width, height} = Dimensions.get('window');



const Card = (props: any) => {
  return (
    <View style={styles.card}>
        <View style={styles.mainCard}>
          <Image
                style={styles.logo}
               source={{uri: props?.image}}
            />
          <Text style={styles.title}>{props?.title}</Text>
          <Text style={styles.subtitle}>{props?.subtitle}</Text>
        
        <View style={styles.button}>
            <TouchableOpacity onPress={() => console.log('Liked')}>
              <AntDesign name="like" size={24} color="blue" />
            </TouchableOpacity>
             
             <TouchableOpacity onPress={() => console.log('Dislike')}>
                <AntDesign name="dislike" size={24} color="black" />
            </TouchableOpacity>
              
        </View>
        </View>

    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card:{
      flex:1,
      flexDirection:'column',
      alignItems: 'center',
      justifyContent:'center',
    }, 
    mainCard:{
      justifyContent:'flex-start',
      alignItems:'center',
      width: width*0.8,
      height: height*0.4,
      padding:30,
      
      shadowColor: '#000',            // iOS shadow màu đen
      shadowOffset: { width: 0, height: 4 },  // bóng lệch xuống 4px
      shadowOpacity: 0.3,             // độ mờ bóng
      shadowRadius: 6,                // độ mờ bóng
      elevation: 8,                  // Android elevation (bóng)
      borderRadius: 16,               // bo góc shadow container
    },

    logo: {width: 100, height: 100, marginTop:20, borderRadius: 20},
    title: {fontSize:16, fontWeight: 'bold', marginTop:10},
    subtitle:{marginTop:15},

    button:{
      flexDirection:'row',
      marginTop: 50,
      gap: 30,
    }
    

})