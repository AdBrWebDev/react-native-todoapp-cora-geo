import React, {useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, KeyboardAvoidingView, Platform} from 'react-native'
import { NativeBaseProvider } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import List from './client/components/List';
import Nav from './client/components/Nav';
import { createDatabase } from './client/database/db';

export default function App() {
  useEffect(() => {
    createDatabase();
  } , [])

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <KeyboardAvoidingView enabled behavior={'height'} >
        <View style={{height: "12%"}}> 
          <Nav />
        </View>
        <View style={{height: "88%"}}>
          <List />
        </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
    </NativeBaseProvider>
  );
}