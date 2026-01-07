import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Detail from './src/screens/Detail';
import List from './src/screens/List';
import {SafeAreaView} from 'react-native-safe-area-context';
import Search from './src/component/Search';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/navigation/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';


const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function ListStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
   
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeTab" component={Home} />
        <Tab.Screen name="ListTab" component={ListStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});





