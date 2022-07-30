import React, {useState} from 'react';
import { Fab, Actionsheet, Box, Center, Text, View, Icon} from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {filterItems} from '../redux/actions';

export default function Filter(){
    const [isOpen, onOpen] = useState(false)
    const dispatch = useDispatch();
    const data = useSelector(state => state.todoList.items);

    return(
        <View>
            {(data.length === 0) ? null :
            <Fab onPress={() => onOpen(!isOpen)} bg="primary.600" style={styles.fab} renderInPortal={false} shadow={2} size="sm" icon={<Icon color="white" as={FontAwesome5} name="filter" />} />
            }
        <Center>
      <Actionsheet isOpen={isOpen} onClose={() => onOpen(!isOpen)}>
        <Actionsheet.Content mx="auto">
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{
            color: "gray.300"
          }}>
              <FontAwesome5 name="filter" size={24} color="black" /> Filter Items
            </Text>
          </Box>
          <Actionsheet.Item onPress={() => {dispatch(filterItems(0));  onOpen(!isOpen)}}>Active</Actionsheet.Item>
          <Actionsheet.Item onPress={() => {dispatch(filterItems(1));  onOpen(!isOpen)}}>In Progress</Actionsheet.Item>
          <Actionsheet.Item onPress={() => {dispatch(filterItems(2));  onOpen(!isOpen)}}>Done</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
    </View>
    )
}

const styles = StyleSheet.create({
    fab: {  
        position: 'absolute',
        bottom: 0,
        right: 20
    }
})