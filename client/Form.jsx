import React, {useState} from 'react';
import {View} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import {handleSubmit} from './redux/actions'
import {Input, Box, Button, Icon, Container, Center, Divider} from 'native-base'
import { useDispatch } from 'react-redux';

export default function Form() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const hSubmit = () => {
        if(text === '') {
            alert('Please enter a task')
        }else{
            dispatch(handleSubmit(text));
            setText('');
        }
    }

        return(
            <View>
                <Center>
                    <Container>
                        <Input placeholder="What needs to be done?" value={text} onChangeText={(value) => {setText(value); console.log(value)}} my="3" />
                        <Box mx="auto">
                            <Button variant="subtle" onPress={() => hSubmit()} endIcon={<Icon as={FontAwesome} name="send" />} size="md"></Button>
                        </Box>
                        <Divider my="2" thickness="2" bg="emerald.600" />
                </Container>
                    </Center>
            </View>
        )
}