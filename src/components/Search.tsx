import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

interface Props {
  value: string;
  onChange: (text: string) => void;
}
const Search = ({ value, onChange }: Props) => {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.Search}
        placeholder="Search"
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  Search: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 16,
    width: width * 0.8,
  },
});
