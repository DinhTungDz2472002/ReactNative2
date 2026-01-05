import React from "react";
import { View,Text, StyleSheet  } from "react-native";

const List = () =>{
    return (
        <View style ={styles.List}>
            <Text>List</Text>
        </View>
    )
}

export default List;

const styles = StyleSheet.create({
    List:{
        backgroundColor: '#fff',
    },
})