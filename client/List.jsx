import React, {useState} from 'react';
import { Box, FlatList, Heading, HStack, Text, Input, Spacer, Button, Icon, Modal } from "native-base";
import {AntDesign, Entypo} from '@expo/vector-icons';
import Axios from 'axios'
import {useSelector} from 'react-redux'

export default function() {
  const [openEdit, setOpenEdit] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [editedText, setEditedText] = useState('');
  const data = useSelector(state => state.todoList.items)

        return (
            <Box>
      <Heading fontSize="xl" p="4" pb="3">
        Items
      </Heading>
      <FlatList data={data} renderItem={({
      item
    }) => <Box borderBottomWidth="1" _dark={{
      borderColor: "gray.600"
    }} borderColor="coolGray.200" pl="4" pr="5" py="2">
            <HStack space={3} justifyContent="space-between">
              <Text fontSize="xl">{item.text}</Text> 
              <Spacer />
              <Button  variant="ghost" colorScheme="secondary" endIcon={<Icon as={AntDesign} name="delete" />}></Button>
              <Button variant="ghost" onPress={() => setOpenEdit(true)} endIcon={<Icon as={Entypo} name="edit" />}></Button>
              <Button variant="ghost" onPress={() => setOpenInfo(true)} endIcon={<Icon as={Entypo} name="info" />}></Button>
            </HStack>
            <Modal isOpen={() => openInfo} onClose={() => showInfo()} size="lg">
          <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>{item.fullName}</Modal.Header>
          <Modal.Body>
            <Text>{item.fullName}</Text>
          </Modal.Body>
    
        </Modal.Content>
      </Modal>
            <Modal isOpen={openEdit} onClose={() => setOpenEdit(false)} size="lg">
          <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>{item.fullName}</Modal.Header>
          <Modal.Body>
            <Text>{item.fullname}</Text>
            <Input type="text" /> 
          </Modal.Body>
          <Modal.Footer>
          <Button flex="1" onPress={() => {}}>
              Continue
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
          </Box>} /*keyExtractor={item => item.id}*/ />
    </Box>
        )  
}