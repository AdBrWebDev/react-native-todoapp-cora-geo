import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import {handleSubmit} from '../redux/actions'
import {Input, Box, Button, Icon, Container, Center, Divider, useToast} from 'native-base'
import { useDispatch } from 'react-redux';

export default function Form() {
    const toast = useToast();
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    
    const hSubmit = () => {
        if(text === '') {
            toast.show({render: () => {
                return <Box style={styles.toaster} color="white" bg="secondary.300" px="2" py="1" rounded="lg" mb={5}><AntDesign style={styles.toasterIcon} name="warning" size={24} /> <Text style={styles.toastText}>Empty input</Text></Box>
            }});
        }else{
            dispatch(handleSubmit(text));
            setText('');
        }
    }

        return(
            <View>
                <Center>
                    <Container style={styles.form}>
                        <Input placeholder="What needs to be done?" value={text} onChangeText={(value) => setText(value)} my="3" />
                        <Box mx="auto">
                            <Button variant="subtle" onPress={() => hSubmit()} endIcon={<Icon as={FontAwesome} name="send" />} size="md"></Button>
                        </Box>
                        <Divider my="2" thickness="2" bg="emerald.600" />
                </Container>
                    </Center>
            </View>
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
    form: {
        zIndex: 20,
    }
})