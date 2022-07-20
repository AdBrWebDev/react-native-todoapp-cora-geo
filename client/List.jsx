import React from 'react';
import { Box, FlatList, Heading, Avatar, HStack, VStack, Text, Input, Spacer, Center, NativeBaseProvider, Button, Icon, Modal } from "native-base";
import {AntDesign, Entypo} from '@expo/vector-icons';
import Axios from 'axios'

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openEdit: false,
            openInfo: false,
            editedText: "",
            data: [],
        }
        this.delete = this.delete.bind(this);
        this.editItem = this.editItem.bind(this);
        this.showInfo = this.showInfo.bind(this);
        this.editText = this.editText.bind(this);
    }

    componentDidMount() {
        const {data: response} = Axios.get("http://localhost:5000/getTodos")
        this.setState({
            data: response
        })
    }

    showInfo = () => {
        this.setState({
            openInfo: !this.state.openInfo
        })
    }

    editItem = () => {
        this.setState({
            openEdit: !this.state.openEdit
        })
    }

    delete = () => {
        return;
    }

    editText = (e) => {
        this.setState({
            editedText: e.target.value
        })
    }

    render() {
        return (
            <Box>
      <Heading fontSize="xl" p="4" pb="3">
        Items
      </Heading>
      <FlatList data={this.state.data} renderItem={({
      item
    }) => <Box borderBottomWidth="1" _dark={{
      borderColor: "gray.600"
    }} borderColor="coolGray.200" pl="4" pr="5" py="2">
            <HStack space={3} justifyContent="space-between">
              <Text fontSize="xl">{item.fullName}</Text> 
              <Spacer />
              <Button  variant="ghost" onPress={this.delete} colorScheme="secondary" endIcon={<Icon as={AntDesign} name="delete" />}></Button>
              <Button variant="ghost" onPress={this.editItem} endIcon={<Icon as={Entypo} name="edit" />}></Button>
              <Button variant="ghost" onPress={this.showInfo} endIcon={<Icon as={Entypo} name="info" />}></Button>
            </HStack>
            <Modal isOpen={this.state.openInfo} onClose={this.showInfo} size="lg">
          <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>{item.fullName}</Modal.Header>
          <Modal.Body>
            <Text>{item.fullName}</Text>
          </Modal.Body>
    
        </Modal.Content>
      </Modal>
            <Modal isOpen={this.state.openEdit} onClose={this.editItem} size="lg">
          <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>{item.fullName}</Modal.Header>
          <Modal.Body>
            <Text>{item.fullname}</Text>
            <Input type="text" value={this.state.editedText} onChange={this.editText} /> 
          </Modal.Body>
          <Modal.Footer>
          <Button flex="1" onPress={() => {this.setState({ openInfo: false })}}>
              Continue
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
          </Box>} keyExtractor={item => item.id} />
    </Box>
        )
    }   
}