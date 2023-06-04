import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import CommonContainer from '../Component/CommonContainer';
import { moderateScale, Fonts, Colors } from '../Config/Theme';
import { SearchIcon, MoreIcon, LeftChevronIcon, RightChevronIcon, SmallOutlineIcon, CafeIcon, TransportationIcon, HealthIcon, GiftIcon, GroceriesIcon, ElectronicsIcon, DownloadIcon } from '../Assets/Icons/index';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationKeys } from '../Navigation/NavigationKeys';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';

const HeaderComponent = ({ navigation }) => {
    return (
        <View style={styles.headerComponentContainer}>
            <View style={{ flex: 0.9 }}>
                <Text style={styles.headerNameStyle}>Statistics</Text>
            </View>
            <View style={{ flex: 0.1, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    style={styles.headerIconContainer}
                    activeOpacity={0.8}
                    accessibilityRole={'button'}
                    onPress={() => navigation.navigate(StackNavigationKeys.Search)}
                >
                    <SearchIcon />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const ReportScreen = () => {

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const navigation = useNavigation();
    const [cartPercentage, setCartPercentage] = useState([
        { flex: 0.32, bgColor: '#B2EBF2' },
        { flex: 0.25, bgColor: '#F8BBD0' },
        { flex: 0.18, bgColor: '#C8E6C9' },
        { flex: 0.12, bgColor: '#E1BEE7' },
        { flex: 0.08, bgColor: '#FFCDD2' },
        { flex: 0.05, bgColor: '#FFECB3' }
    ]);

    const [listData, setListData] = useState([
        {
            icon: TransportationIcon,
            label: 'Transportation',
            numOfTransaction: 36,
            amount: 5300,
            percentage: 32
        },
        {
            icon: HealthIcon,
            label: 'Health',
            numOfTransaction: 16,
            amount: 3100,
            percentage: 25
        },
        {
            icon: GroceriesIcon,
            label: 'Grocery',
            numOfTransaction: 36,
            amount: 2320,
            percentage: 18
        },
        {
            icon: GiftIcon,
            label: 'Gifts',
            numOfTransaction: 18,
            amount: 1440,
            percentage: 12
        },
        {
            icon: ElectronicsIcon,
            label: 'Elecronics',
            numOfTransaction: 12,
            amount: 800,
            percentage: 8
        },
        {
            icon: CafeIcon,
            label: 'Cafe & Bar',
            numOfTransaction: 10,
            amount: 240,
            percentage: 5
        }
    ])

    const listContainer = ({ item }) => {

        const Icon = item.icon;

        return (
            <View style={styles.listContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.82 }}>
                    <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 0.17 }}>
                        <Icon />
                    </View>
                    <View style={{ flex: 0.83 }}>
                        <Text style={styles.listCategoryName}>{item.label}</Text>
                        <Text style={styles.listTransactionNumber}>{item.numOfTransaction} transactions</Text>
                    </View>
                </View>
                <View style={{ flex: 0.18, alignItems: 'flex-end' }}>
                    <Text style={styles.listAmount}>{Number(item.amount).toLocaleString('en', { currency: 'INR', style: 'currency', maximumFractionDigits: 1, minimumFractionDigits: 1 })}</Text>
                    <Text style={styles.listPercentage}>{item.percentage}%</Text>
                </View>
            </View>
        )
    }

    const onChange = (event, selectedDate) => {
        setShowDatePicker(false)
        setSelectedDate(selectedDate);
    };

    return (
        <CommonContainer
            customStyles={{ paddingHorizontal: moderateScale(10) }}
        >
            <HeaderComponent navigation={navigation} />

            <ScrollView
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: moderateScale(48) }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                    >
                        <LeftChevronIcon />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.calendarContainer}
                        activeOpacity={0.8}
                        accessibilityRole={'tab'}
                        onPress={() => setShowDatePicker(true)}
                    >
                        <SmallOutlineIcon />
                        <Text style={styles.selectedDateStyle}>{dayjs(selectedDate).format('MMM YYYY')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                    >
                        <RightChevronIcon />
                    </TouchableOpacity>
                </View>

                <View style={{ marginVertical: moderateScale(4) }}>
                    <Text style={styles.overviewLabelStyle}>OVERVIEW</Text>
                    <View style={styles.spendDashboardContaienr}>
                        {
                            cartPercentage.map((element, index) => {
                                return (
                                    <View key={index} style={{ height: '100%', backgroundColor: element.bgColor, flex: element.flex }} />
                                )
                            })
                        }
                    </View>
                </View>

                <View style={{ marginTop: moderateScale(5) }}>
                    <Text style={styles.overviewLabelStyle}>DETAILS</Text>

                    <View>
                        <FlatList
                            data={listData}
                            keyExtractor={(_, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            legacyImplementation={true}
                            maxToRenderPerBatch={10}
                            nestedScrollEnabled={true}
                            renderItem={listContainer}
                        />
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity
                style={styles.buttonContainer}
                activeOpacity={0.9}
                accessibilityRole={'button'}
                onPress={() => console.log('ADD NEW')}
            >
                <DownloadIcon />
                <Text style={styles.buttonContainerText}>Download Report</Text>
            </TouchableOpacity>

            {
                showDatePicker &&
                <DateTimePicker
                    testID="dateTimePicker"
                    value={selectedDate}
                    maximumDate={new Date()}
                    mode={'date'}
                    is24Hour={true}
                    onChange={onChange}
                />
            }
        </CommonContainer>
    )
}

export default ReportScreen

const styles = StyleSheet.create({
    headerComponentContainer: {
        height: moderateScale(48),
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerNameStyle: {
        fontFamily: Fonts.Bold,
        fontSize: moderateScale(20),
        color: Colors.GREY_800,
        textTransform: 'capitalize'
    },
    headerIconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    calendarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: moderateScale(34),
        width: '35%',
        borderRadius: moderateScale(50),
        backgroundColor: '#F5F5F5'
    },
    selectedDateStyle: {
        fontFamily: Fonts.Medium,
        fontSize: moderateScale(14),
        color: Colors.GREY_800,
        textTransform: 'capitalize',
        marginLeft: moderateScale(8)
    },
    overviewLabelStyle: {
        fontFamily: Fonts.Medium,
        fontSize: moderateScale(10),
        color: Colors.GREY_800,
        letterSpacing: 1.4
    },
    spendDashboardContaienr: {
        height: moderateScale(36),
        flexDirection: 'row',
        borderRadius: moderateScale(7),
        overflow: 'hidden',
        marginVertical: moderateScale(8)
    },
    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: moderateScale(56)
    },
    listAmount: {
        fontFamily: Fonts.Regular,
        fontSize: moderateScale(14),
        color: Colors.RED_600
    },
    listPercentage: {
        fontFamily: Fonts.Regular,
        fontSize: moderateScale(12),
        color: Colors.GREY_900
    },
    listCategoryName: {
        fontFamily: Fonts.Regular,
        fontSize: moderateScale(14),
        color: Colors.GREY_800,
        textTransform: 'capitalize'
    },
    listTransactionNumber: {
        fontFamily: Fonts.Regular,
        fontSize: moderateScale(12),
        color: Colors.GREY_700,
        textTransform: 'capitalize'
    },
    buttonContainer: {
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.BLUE_500,
        height: moderateScale(48),
        width: '48%',
        borderRadius: moderateScale(44),
        bottom: moderateScale(22),
        elevation: 3,
        shadowColor: Colors.BLACK
    },
    buttonContainerText: {
        fontFamily: Fonts.Medium,
        fontSize: moderateScale(14),
        color: Colors.WHITE,
        marginLeft: moderateScale(8)
    }
})