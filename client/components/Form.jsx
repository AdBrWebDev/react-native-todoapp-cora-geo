import React, {useState} from 'react';
import { StyleSheet, Text} from 'react-native'
import {insertIntoTable} from '../database/db'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import {Input, Box, Button, Icon, Container, Center, useToast} from 'native-base'

export default function Form() {
    const toast = useToast();
    const [text, setText] = useState('');
    
    const hSubmit = () => {
        if(text === '') {
            toast.show({render: () => {
                return <Box style={styles.toaster} color="white" bg="secondary.300" px="2" py="1" rounded="lg" mb={5}><AntDesign style={styles.toasterIcon} name="warning" size={24} /> <Text style={styles.toastText}>Empty input</Text></Box>
            }});
        }else{
            setText('');
            insertIntoTable({text: text});
        }
    }

        return(
                <Center>
                    <Container style={{zIndex: 20}}>
                        <Input placeholder="What needs to be done?" value={text} onChangeText={(value) => setText(value)} my="3" />
                        <Box mx="auto">
                            <Button variant="subtle" onPress={() => hSubmit()} endIcon={<Icon as={FontAwesome} name="send" />} size="md"></Button>
                        </Box>
                    </Container>
                </Center>
        )
}

const styles = StyleSheet.create({
    toastText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "rgba(149, 19, 25, 0.8)",
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
        color: "rgba(149, 19, 25, 0.8)",
    }, 
})