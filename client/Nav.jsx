import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Box, FlatList, IconButton, Icon } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default class Nav extends  React.Component {
    
    render() {
        return(
            <Box flex={1} bg="white" style={styles.box} safeAreaBottom width="100%" maxW="300px" alignSelf="center">
                <FlatList numColumns={4}>
                    <IconButton m={'8px'} borderRadius="full" bg="emerald.500" variant="solid" 
                    p="3" icon={<Icon color="white" name="Name" as={MaterialIcons} size="sm" />} />;
                </FlatList>
            </Box>
        )
    }
} 

const styles = StyleSheet.create({
    box: {
        flex: 1,
        position: "absolute",
        bottom: 0,
        width: "100%",
    }
})