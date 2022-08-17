import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import { Modal, Button, Switch, Icon, Box, useToast } from 'native-base';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

export default function SettingModal() {
    const toast = useToast();
    

    return(
        <Modal isOpen={false}>
            <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>Settings</Modal.Header>
                <Modal.Body>
                    <View>
                        <Text style={styles.darkMText}>Dark Mode</Text>
                        <Switch style={styles.switch} colorScheme="emerald" size="lg" />
                    </View>
                    <Box mx="auto" mt="3">
                        <Button variant="subtle" style={styles.saveSetBtn} 
                        onPress={() => { 
                            toast.show({render: () => {
                                return <Box style={styles.toaster} color="white" bg="tertiary.200" px="2" py="1" rounded="lg" mb={5}><AntDesign style={styles.toasterIcon} name="check" size={24} /> <Text style={styles.toastText}>Setting saved</Text></Box>
                            }});
                        }} 
                        endIcon={<Icon as={FontAwesome5} name="database" />} size="lg" />
                    </Box>
                </Modal.Body>
            </Modal.Content>
        </Modal>
    )
}

const styles = StyleSheet.create({
    saveSetBtn: {
        flex: 1,
        width: "auto",
    },
    toastText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "rgba(24, 77, 35, 0.8)",
        position: "absolute",
        left: 50,
    },
    toaster: {
        flex: 1,
        minWidth: 200,
        height: 50,
        justifyContent: "center",
        alignContent: "center",
    },
    toasterIcon: {
        position: "absolute",
        marginLeft: 20,
        color: "rgba(24, 77, 35, 0.8)",
    },  
    darkMText: {
        fontSize: 25,
    },
    switch: {
        flex: 1,
        position: "absolute",
        right: 10,
        marginTop: -10,
    }
})