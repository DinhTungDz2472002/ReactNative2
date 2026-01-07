import React from "react";
import { View,Text, StyleSheet, FlatList  } from "react-native";
import Card from "../component/Card";
import { Feather } from '@expo/vector-icons';

const Data = Array.from({ length: 30 }, (_, i) => ({
  id: i.toString(),
  image: `https://picsum.photos/seed/${i + 1}/400/300`,
  title: `Tiêu đề số ${i + 1}`,
  subtitle: `Đây là subtitle cho item số ${i + 1}`
}));

const List = () =>{
    return (
        <View style ={styles.List}>
            <FlatList
            data={Data}                   // 1. Nguồn dữ liệu (Mảng của bạn)
            renderItem={({ item }) => (   // 2. Cách hiển thị từng phần tử
                <Card {...item}/>
            )}
            keyExtractor={item => item.id} // 3. Định danh duy nhất cho mỗi dòng
            />
        </View>
    )
}

export default List;

const styles = StyleSheet.create({
    List:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
    },

})