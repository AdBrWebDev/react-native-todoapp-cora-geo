import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Box, FlatList, IconButton, Heading, Switch, Icon, Button } from 'native-base';
import { SimpleLineIcons } from '@expo/vector-icons';

export default class Nav extends React.Component {
    
    render() {
        return(
        <View style={styles.nav}>
            <Heading style={styles.heading} size="xl">Todo-app</Heading>
            <View style={styles.switch}>
            <Switch colorScheme="primary" />
            </View>
        </View>
        )
    }
} 

const styles = StyleSheet.create({
    nav:{
        backgroundColor: 'blueGray.800',
        padding: 10,
        display: 'flex',
        width: '100%',
    },
    switch:{
        position: 'absolute',
        right: 20,
        top: 6,
        display: 'flex',
        width: '50%',
    },
    heading:{
      left: 10,
    }
})