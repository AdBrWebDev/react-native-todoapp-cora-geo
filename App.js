import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import Form from './client/Form';
import List from './client/List';
import Nav from './client/Nav';
import {Provider} from 'react-redux';
import store from './client/redux/store'

export default function App() {
  return (
    <Provider store={store}>
    <NativeBaseProvider>
      <SafeAreaView>
      <Nav />
      <Form />
      <List />
    </SafeAreaView>
    </NativeBaseProvider>
    </Provider>
  );
}
