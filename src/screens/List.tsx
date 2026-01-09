import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Card from '../components/Card';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Search from '../components/Search';
import { getList } from '../services/posts';
import ErrorView from '../components/ErrorView';
import EmptyView from '../components/EmptyView';
import { useFocusEffect } from '@react-navigation/native';
import FilterChips from '../components/FilterChips';

const List = () => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [isEmty, setIsEmty] = useState(false);
  const [loading, setLoading] = useState(false);

  const [filtered, setFiltered] = useState<any[]>([]);
  const [keyword, setKeyword] = useState('');
  const [filterChips, setFilterChips] = useState('All');

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

      const timer = setTimeout(() => {
        if (keyword) {
          const result = data.filter((item) =>
            item.title?.toLowerCase().includes(keyword.toLowerCase())
          );
          setFiltered(result);
          console.log('Đã lọc xong');

          //Khi đang Search Hủy Poling
          clearInterval(intervalId);
          console.log('Hủy Polling vì đang searh');
        }
      }, 300);
      return () => {
        console.log('BLUR - Hủy yêu cầu mạng');
        controller.abort(); // Hủy gọi api khi blur ra tab khác
        clearTimeout(timer);
        clearInterval(intervalId); //dừng việc gọi lại polling để reload dữ liệu sau 10s
      };
    }, [keyword])
  );

  const fetchData = async (signal?: AbortSignal) => {
    try {
      setError(false);
      setIsEmty(false);
      setLoading(true);
      const res = await getList(signal);
      // res rỗng hoặc không có dữ liệu
      if (!res || res.length === 0) {
        setIsEmty(true);
        setData([]);
      } else {
        setData(res);
        setIsEmty(false);
        setError(false); // Chỉ tắt lỗi khi đã lấy được data thành công
      }

      if (!keyword) {
        setFiltered(res);
      }
      console.log('API call successful');
    } catch (error: any) {
      console.log('LỖI RỒI:', error);
      setError(true);
      // Dòng console.log này sẽ xuất hiện khi API bị hủy bởi controller.abort()
      if (error.name === 'CanceledError' || error.name === 'AbortError') {
        console.log('Fetch cancelled thành công!'); //log nếu request chưa chạy xong mà chuyển tab sang tab khác
        return; // Dừng xử lý lỗi tiếp theo
      }
    } finally {
      setRefreshing(false);
    }
  };

  if (isEmty) {
    return <EmptyView />;
  }
  if (error) {
    return <ErrorView onRetry={fetchData} />;
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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 122 : 0} // Điều chỉnh theo Header của bạn
      >
        <FilterChips active={filterChips} onChange={setFilterChips} />
        <Search value={keyword} onChange={setKeyword} />
        <FlatList
          data={filtered} // 1. Nguồn dữ liệu (Mảng của bạn)
          renderItem={(
            { item } // 2. Cách hiển thị từng phần tử
          ) => <Card {...item} />}
          keyExtractor={(item) => item.id} // 3. Định danh duy nhất cho mỗi dòng
          onRefresh={onRefresh}
          refreshing={refreshing}
          keyboardShouldPersistTaps="never"
        />
      </KeyboardAvoidingView>
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
