import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import Form from './client/Form';
import List from './client/List';
import Nav from './client/Nav';

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
      <Nav />
      <Form />
      <List />
    </SafeAreaView>
    </NativeBaseProvider>
  );
}
