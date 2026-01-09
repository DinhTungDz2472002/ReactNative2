import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const EmptyView = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.emtyView}>
      <Text>Dữ Liệu Trống</Text>
      <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Quay lại</Text>
      </Pressable>
    </View>
  );
};

export default EmptyView;

const styles = StyleSheet.create({
  emtyView: {
    margin: 'auto',
  },
  backBtn: {
    backgroundColor: '#0A84FF', // iOS style
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 24,
    elevation: 2,
    alignItems: 'center',
  },
  backText: {
    color: '#fff',
  },
});
