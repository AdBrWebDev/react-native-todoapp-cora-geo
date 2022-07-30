import { View, StyleSheet, Pressable } from 'react-native';
import { Heading } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import SettingModal from './SettingModal';
import { openModal } from '../redux/actions';

export default function Nav() {
        const dispatch = useDispatch()

        return(
        <View style={styles.nav}>
            <Heading style={styles.heading} size="xl">Todo-app</Heading>
            <View style={styles.settingBtn}>
                <Pressable onPress={() => dispatch(openModal())}>
                <AntDesign name="setting" size={24} color="black" />
                </Pressable>
            </View>
            <SettingModal />
        </View>
        )
} 

const styles = StyleSheet.create({
    nav:{
        backgroundColor: 'blueGray.800',
        padding: 10,
        display: 'flex',
        width: '100%',
    },
    settingBtn: {
        position: 'absolute',
        right: 20,
        top: 15,
    },
    heading:{
      left: 10,
    }
})