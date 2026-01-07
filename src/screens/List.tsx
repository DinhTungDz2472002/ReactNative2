import React from "react";
import { View,Text, StyleSheet, FlatList  } from "react-native";
import Card from "../component/Card";
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "../component/Search";

const Data = Array.from({ length: 30 }, (_, i) => ({
  id: i.toString(),
  image: `https://picsum.photos/seed/${i + 1}/400/300`,
  title: `Tiêu đề số ${i + 1}`,
  subtitle: `Đây là subtitle cho item số ${i + 1}`
}));

const List = () =>{
    return (
        
        <SafeAreaView style ={styles.List}>
            <Search/>
            <FlatList
            data={Data}                   // 1. Nguồn dữ liệu (Mảng của bạn)
            renderItem={({ item }) => (   // 2. Cách hiển thị từng phần tử
                <Card {...item}/>
            )}
            keyExtractor={item => item.id} // 3. Định danh duy nhất cho mỗi dòng
            />
        </SafeAreaView>
    )
}

export default List;

const styles = StyleSheet.create({
    List:{
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
    },

})