import React, {useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, KeyboardAvoidingView} from 'react-native'
import { NativeBaseProvider } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import Form from './client/components/Form';
import List from './client/components/List';
import Nav from './client/components/Nav';
import {Provider} from 'react-redux';
import store from './client/redux/store'
import {createDatabase} from './client/database/db'

export default function App() {

  useEffect(() => createDatabase())

  return (
    <Provider store={store}>
    <NativeBaseProvider>
      <SafeAreaView>
        <KeyboardAvoidingView>
        <View style={{height: "26%"}}> 
          <Nav />
          <Form />
        </View>
        <View style={{height: "74%"}}>
          <List />
        </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
    </NativeBaseProvider>
    </Provider>
  );
}