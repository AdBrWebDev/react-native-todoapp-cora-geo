import React from 'react';
import {View} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import {Input, Box, Button, Icon, Container, Center, Divider, Text} from 'native-base'

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.textChange = this.textChange.bind(this);
    }

    textChange = (e) => {
        this.setState({value: e.target.value});
    }

    render() {
        return(
            <View>
                <Center>
                    <Container>
                        <Input placeholder="What needs to be done?" value={this.props.value} onChange={this.textChange} my="3" />
                        <Box mx="auto">
                            <Button variant="subtle" onPress={this.handleSubmit} endIcon={<Icon as={FontAwesome} name="send" />} size="md"></Button>
                        </Box>
                        <Divider my="2" thickness="2" bg="emerald.600" />
                </Container>
                    </Center>
            </View>
        )
    }
}