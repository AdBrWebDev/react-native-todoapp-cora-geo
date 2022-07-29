import React, {useState} from 'react';
import { Box, FlatList, Heading, HStack, Text, Input, Spacer, Button, Icon, Modal, Select, CheckIcon, Center } from "native-base";
import {AntDesign, Entypo, MaterialCommunityIcons} from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux'
import { handleDelete } from './redux/actions';
import { StyleSheet } from 'react-native';

export default function() {
  const [openEdit, setOpenEdit] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [editedText, setEditedText] = useState('');
  const [service, setService] = useState("");
  const data = useSelector(state => state.todoList.items)
  const dispatch = useDispatch()

        return (
            <Box>
      <Heading fontSize="xl" p="4" pb="3">
        Items
      </Heading>
      {data.length > 0 ? 
      <FlatList data={data} renderItem={({
      item
    }) => <Box borderBottomWidth="1" _dark={{
      borderColor: "gray.600"
    }} borderColor="coolGray.200" pl="4" pr="5" py="2">
            <HStack space={3} justifyContent="space-between">
              <Text fontSize="xl">{item.text}</Text> 
              <Spacer />
              <Button  variant="ghost" colorScheme="secondary" onPress={() => dispatch(handleDelete(item.id))}endIcon={<Icon as={AntDesign} name="delete" />}></Button>
              <Button variant="ghost" onPress={() => setOpenEdit(true)} endIcon={<Icon as={Entypo} name="edit" />}></Button>
              <Button variant="ghost" onPress={() => setOpenInfo(true)} endIcon={<Icon as={Entypo} name="info" />}></Button>
            </HStack>
            <Modal isOpen={openInfo} onClose={() => setOpenInfo(false)} size="lg">
          <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>{item.text}</Modal.Header>
          <Modal.Body>
            <Text>Created: {item.created}</Text>
            <Text>Status: {(item.status === 0) ? "Active" : (item.status === 1) ? "Done" : "Finished"}</Text>
          </Modal.Body>
    
        </Modal.Content>
      </Modal>
            <Modal isOpen={openEdit} onClose={() => setOpenEdit(false)} size="lg">
          <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>{item.text}</Modal.Header>
          <Modal.Body>
            <Input type="text" placeholder="Change text" value={editedText} onChangeText={(value) => setEditedText(value)} /> 

            <Box w="3/4" maxW="300">
        <Select selectedValue={service} minWidth="200" accessibilityLabel="Change status" placeholder="Change status" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Active" value={0} />
          <Select.Item label="Done" value={1} />
          <Select.Item label="Finished" value={2} />
        </Select>
      </Box>
          </Modal.Body>
          <Modal.Footer>
          <Button flex="1" onPress={() => {}}>
              Continue
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
          </Box>} /*keyExtractor={item => item.id}*/ /> : <Center>
          <MaterialCommunityIcons name="playlist-remove" style={styles.emptyList} size={160} color="black" />
            <Text style={styles.emptyListText}>No items</Text>
            </Center>}
    </Box>
        )  
}

const styles = StyleSheet.create({
  emptyList: {
    opacity: 0.3,
    marginTop: 50,
  },
  emptyListText: {
    fontSize: 20,
    marginTop: 20,
    opacity: 0.3,
    fontWeight: "bold",
  }
})