import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'native-base';
import {openModal} from '../redux/actions';

export default function SettingModal() {
    const modal = useSelector(state => state.todoList.modal);
    const dispatch = useDispatch();

    return(
        <Modal isOpen={modal} onClose={() => dispatch(openModal())}>
            <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>Settings</Modal.Header>
                <Modal.Body>
                    <Button>Save changes</Button>
                </Modal.Body>
            </Modal.Content>
        </Modal>
    )
}