import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Detail from './src/screens/Detail';

export default function App() {
  return (
    <View style={styles.container}>
      <Detail/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

