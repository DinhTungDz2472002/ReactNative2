import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  Dimensions,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getDetail } from '../services/posts';

const { width, height } = Dimensions.get('window');

const Detail = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>();
  const [data, setData] = useState<any | null>(null);
  const { id } = route.params;
  useFocusEffect(
    useCallback(() => {
      const controller = new AbortController();
      const { signal } = controller;
      fetchData();

      // polling 10s nhỡ may dữ liệu detail bị thay đổi
      const intervalId = setInterval(() => {
        fetchData();
        console.log('polling load lại detai sau mỗi 10s');
      }, 10000);
      return () => {
        controller.abort();
        clearInterval(intervalId);
      };
    }, [])
  );
  const fetchData = async () => {
    try {
      const res = await getDetail(id);
      console.log(res);
      setData(res);
    } catch (error: any) {
      console.log(error);
    } finally {
    }
  };
  if (!data) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: data.image }}
        style={{ width: 200, height: 200, borderRadius: 10 }}
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{data.title}</Text>
      <Text>{data.subtitle}</Text>

      {/* <Pressable onPress={() => navigation.navigate('HomeTab')
      }>
         <Text>Bấm vào đây</Text>
      </Pressable> */}
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    height: height * 0.6,
    margin: 'auto',
    padding: 20,
    gap: 20,

    backgroundColor: '#fff', // ❗ BẮT BUỘC CHO iOS
    shadowColor: '#000', // iOS shadow màu đen
    shadowOffset: { width: 0, height: 4 }, // bóng lệch xuống 4px
    shadowOpacity: 0.3, // độ mờ bóng
    shadowRadius: 6, // độ mờ bóng

    elevation: 8, // Android elevation (bóng)
    borderRadius: 16, // bo góc shadow container
  },
});
