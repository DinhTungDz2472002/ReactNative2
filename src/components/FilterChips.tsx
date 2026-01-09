import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FILTERS = ['All', 'Fav', 'Recent'];

interface Props {
  active: string;
  onChange: (value: string) => void;
}

const FilterChips = ({ active, onChange }: Props) => {
  return (
    <View style={styles.container}>
      {FILTERS.map((filter) => {
        const isActive = active === filter;

        return (
          <TouchableOpacity
            key={filter}
            onPress={() => onChange(filter)}
            style={[styles.chip, isActive && styles.activeChip]}
          >
            <Text style={isActive ? styles.activeText : styles.text}>
              {filter}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default FilterChips;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // xếp chip theo hàng ngang
    marginBottom: 12, // cách list phía dưới
  },

  chip: {
    paddingHorizontal: 14, // khoảng cách trái/phải chữ
    paddingVertical: 8, // khoảng cách trên/dưới chữ
    borderRadius: 20, // bo tròn → đúng kiểu "chip"
    backgroundColor: '#eee', // màu nền mặc định
    marginRight: 8, // khoảng cách giữa các chip
  },

  activeChip: {
    backgroundColor: '#007AFF', // màu xanh iOS khi active
  },

  text: {
    color: '#333', // chữ khi chưa chọn
    fontSize: 14,
  },

  activeText: {
    color: '#fff', // chữ trắng khi active
    fontSize: 14,
    fontWeight: '600', // đậm hơn chút
  },
});
