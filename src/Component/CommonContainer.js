import { View, SafeAreaView } from 'react-native';
import React, { memo } from 'react';
import { moderateScale } from '../Config/Theme';

const CommonContainer = ({ children, customStyles }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', ...customStyles }}>
            <View style={{ flex: 1 }}>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default memo(CommonContainer);