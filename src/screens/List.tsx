import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Card from '../component/Card';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Search from '../component/Search';
import { getList } from '../services/posts';
import ErrorView from '../component/ErrorView';
import EmptyView from '../component/EmptyView';
import { useFocusEffect } from '@react-navigation/native';

const List = () => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [isEmty, setIsEmty] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const controller = new AbortController();
      const { signal } = controller;
      //gọi data lần đầu
      fetchData(signal);
      console.log('FOCUS');

      //polling môi 10s
      const intervalId = setInterval(() => {
        fetchData(signal);
        console.log('poling list 10s');
      }, 10000);
      return () => {
        console.log('BLUR - Hủy yêu cầu mạng');
        controller.abort(); // Hủy gọi api khi blur ra tab khác
        clearInterval(intervalId); //dừng việc gọi lại polling để reload dữ liệu sau 10s
      };
    }, [])
  );

  const fetchData = async (signal?: AbortSignal) => {
    try {
      setError(false);
      const res = await getList(signal);
      setData(res);
      // res rỗng hoặc không có dữ liệu
      if (!res || res.length === 0) {
        setIsEmty(true);
        setData([]);
        return;
      }
      console.log('API call successful');
    } catch (error: any) {
      // Dòng console.log này sẽ xuất hiện khi API bị hủy bởi controller.abort()
      if (error.name === 'CanceledError' || error.name === 'AbortError') {
        console.log('Fetch cancelled thành công!'); //log nếu request chưa chạy xong mà chuyển tab sang tab khác
        return; // Dừng xử lý lỗi tiếp theo
      }
      setError(true);
    } finally {
      setRefreshing(false);
    }
  };

  if (error) {
    return <ErrorView onRetry={fetchData} />;
  }
  if (isEmty) {
    return <EmptyView />;
  }
  // 3. Hàm xử lý khi kéo xuống
  const onRefresh = useCallback(() => {
    setRefreshing(true); // Hiển thị biểu tượng loading

    // Mô phỏng gọi API mất 2 giây
    setTimeout(() => {
      //   const newData = [
      //     {
      //       id: Math.random().toString(),
      //       title: 'Danh sách mới cập nhật ' + new Date().getSeconds(),
      //     },
      //     ...data,
      //   ];
      //   setData(newData);
      fetchData();
      setData(data);
      setRefreshing(false); // Ẩn biểu tượng loading
    }, 2000);
  }, [data]);

  return (
    <SafeAreaView style={styles.List}>
      <Search />
      <FlatList
        data={data} // 1. Nguồn dữ liệu (Mảng của bạn)
        renderItem={(
          { item } // 2. Cách hiển thị từng phần tử
        ) => <Card {...item} />}
        keyExtractor={(item) => item.id} // 3. Định danh duy nhất cho mỗi dòng
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  List: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
