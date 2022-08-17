import { View, StyleSheet, Pressable } from 'react-native';
import { Heading } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import SettingModal from './SettingModal';

export default function Nav() {

        return(
        <View style={styles.nav}>
            <Heading style={styles.heading} size="xl">Todo-app</Heading>
            <View style={styles.settingBtn}>
                <Pressable>
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