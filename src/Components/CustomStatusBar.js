import { View, StatusBar, SafeAreaView } from 'react-native'
import React, { memo } from 'react';
import { Colors } from '../Config/Theme';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const { GREY_700 } = Colors;

const CustomStatusBar = ({ bgColor = '#fff', barStyle = 'dark-content' }) => {
    return (
        <View style={{ height: STATUSBAR_HEIGHT, backgroundColor: bgColor }}>
            <SafeAreaView>
                <StatusBar barStyle={barStyle} translucent backgroundColor={bgColor} />
            </SafeAreaView>
        </View>
    )
}

export default memo(CustomStatusBar);