import { StyleSheet, Text, View, Modal, ActivityIndicator } from 'react-native'
import React, { memo } from 'react'
import { Colors } from '../Config/Theme';

const ScreenLoader = ({ isVisiable = false }) => {
    return (
        <View>
            <Modal
                visible={isVisiable}
                animationType={'fade'}
                transparent={true}
                statusBarTranslucent={true}
            >
                <View style={styles.container}>
                    <ActivityIndicator size={'large'} color={Colors.WHITE} />
                </View>
            </Modal>
        </View>
    )
}

export default memo(ScreenLoader);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    }
})