import React, { useEffect, useState } from "react";
import { View,Text, StyleSheet, FlatList  } from "react-native";
import Card from "../component/Card";
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "../component/Search";
import { getList } from "../services/posts";
import ErrorView from "../component/ErrorView";

const List = () =>{
    const[data, setData] = useState<any[]>([]);
    const [error, setError] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () =>{
        try{
            setError(false);
            const res = await getList();
            setData(res);
        }
        catch(error){
            setError(true);
        }finally{
            setRefreshing(false);
        }
    }
    if(error){
        return <ErrorView onRetry={fetchData} />;
    }

    return (
        
        <SafeAreaView style ={styles.List}>
            <Search/>
            <FlatList
            data={data}                   // 1. Nguồn dữ liệu (Mảng của bạn)
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