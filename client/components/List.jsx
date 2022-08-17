import React, {useState, useEffect} from 'react';
import { Box, FlatList, Heading, HStack, Text, Input, Spacer, Button, Icon, Modal, Select, CheckIcon, Center } from "native-base";
import {AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import Filter from './Filter';
import { deleteFromTable, editItem } from '../database/db';
import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.todoDb')

export default function List() {
  const [openEdit, setOpenEdit] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [editedText, setEditedText] = useState('');
  const [values, setValues] = useState([])
  const [status, setStatus] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM items', null,
        (txObj, resultSet) => setData(resultSet.rows._array),
        (txObj, error) => console.log('Error ', error)
        )
    });
  })

        return (
            <Box style={styles.list}>
      <Box><Heading fontSize="xl" p="4" pb="3">
        Items
      </Heading>
      <Filter items={data?.length} />
      </Box>
      {data?.length > 0 ? 

      <FlatList style={styles.list} data={data} renderItem={({
      item
    }) => <Box bg={(item.status === 0) ? "muted.50" : (item.status === 1) ? "secondary.300" : "tertiary.300"} borderBottomWidth="1" _dark={{
      borderColor: "gray.600"
    }} borderColor="coolGray.200" pl="4" pr="5" py="2">
            <HStack space={3} justifyContent="space-between">
              <Text style={styles.itemText} fontSize="xl">{item.text}</Text> 
              <Spacer />
              <Button style={styles.listBtn} variant="ghost" colorScheme="secondary" onPress={() => deleteFromTable({id: item.id})} endIcon={<Icon as={AntDesign} name="delete" />}></Button>
              <Button style={styles.listBtn} variant="ghost" onPress={() => {setOpenEdit(true); setValues({id: item.id, text: item.text, status: item.status, created: item.created})}} endIcon={<Icon as={Entypo} name="edit" />}></Button>
              <Button style={styles.listBtn} variant="ghost" onPress={() => {setOpenInfo(true); setValues({id: item.id, text: item.text, status: item.status, created: item.created, updated: item.updated})}} endIcon={<Icon as={Entypo} name="info" />}></Button>
            </HStack>
            <Modal isOpen={openInfo} onClose={() => setOpenInfo(false)} size="lg">
          <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>{values.text}</Modal.Header>
          <Modal.Body>
            <Text>Created: {values.created}</Text>
            <Text>{(values.updated) ? `Updated: ${values.updated}` : null}</Text>
            <Text>Status: {(values.status === 0) ? "Active" : (item.status === 1) ? "Done" : "Finished"}</Text>
          </Modal.Body>
    
        </Modal.Content>
      </Modal>
            <Modal isOpen={openEdit} onClose={() => setOpenEdit(false)} size="lg">
          <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>{values.text}</Modal.Header>
          <Modal.Body>
            <Input type="text" placeholder="Change text" value={editedText} onChangeText={(value) => setEditedText(value)} /> 

            <Box w="3/4" maxW="300">
        <Select selectedValue={status} minWidth="200" accessibilityLabel="Change status" placeholder="Change status" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setStatus(itemValue)}>
          <Select.Item label="Active" value={0} />
          <Select.Item label="In progress" value={1} />
          <Select.Item label="Done" value={2} />
        </Select>
      </Box>
          </Modal.Body>
          <Modal.Footer>
            <Box mx="auto">
          <Button onPress={() => {
            editItem({status: (status === null) ? status : values.status, text: (editedText === "") ? values.text : editedText, id: values.id  }); 
            setOpenEdit(false)
            setStatus("")
            setEditedText("")
            }}>
              <MaterialIcons name="published-with-changes" size={28} color="white" />
            </Button>
            </Box>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
          </Box>} keyExtractor={item => item.id} /> : <Center>
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
  },
  listBtn: {
    zIndex: 5,
    justifyContent: "center",
    },
  itemText: {
    maxWidth: "47%",
  },
  list: {
    marginTop: 10,
    height: "100%",
    overflow: "scroll",
  }
})