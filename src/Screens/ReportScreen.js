import { Image, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react';
import CommonContainer from '../Components/CommonContainer';
import { moderateScale, Fonts, Colors } from '../Config/Theme';
import { SearchIcon, MoreIcon, LeftChevronIcon, RightChevronIcon, SmallOutlineIcon, CafeIcon, TransportationIcon, HealthIcon, GiftIcon, GroceriesIcon, ElectronicsIcon, DownloadIcon } from '../Assets/Icons/index';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationKeys } from '../Navigation/NavigationKeys';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import ScreenLoader from '../Components/ScreenLoader';
import { getIncomeExpenseReport } from '../Redux/Actions/IncomeExpense/GetIncomeExpenseReport';
import CategoryIcon from '../Components/CategoryIcon';
import { EMPTY } from '../Assets/Images/index';

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

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const { userDetails } = useSelector((state) => state.AuthenticationReducer);
    const { incomeExpenseReportData, incomeExpenseReportLoading } = useSelector((state) => state.IncomeExpenseReportReducer);

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [cartPercentage, setCartPercentage] = useState([
        { flex: 0.32, bgColor: '#B2EBF2' },
        { flex: 0.25, bgColor: '#F8BBD0' },
        { flex: 0.18, bgColor: '#C8E6C9' },
        { flex: 0.12, bgColor: '#E1BEE7' },
        { flex: 0.08, bgColor: '#FFCDD2' },
        { flex: 0.05, bgColor: '#FFECB3' }
    ]);


    useEffect(() => {
        getReportData();
    }, []);

    const listContainer = ({ item }) => {

        return (
            <View style={styles.listContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 0.82 }}>
                    <View style={{ alignItems: 'flex-start', justifyContent: 'center', flex: 0.17 }}>
                        <CategoryIcon type={item.category} />
                    </View>
                    <View style={{ flex: 0.83 }}>
                        <Text style={styles.listCategoryName}>{item.category}</Text>
                        <Text style={styles.listTransactionNumber}>{item.noOfTxn} transactions</Text>
                    </View>
                </View>
                <View style={{ flex: 0.18, alignItems: 'flex-end' }}>
                    <Text style={styles.listAmount}>{Number(item.amount).toLocaleString('en', { currency: 'INR', style: 'currency', maximumFractionDigits: 1, minimumFractionDigits: 1 })}</Text>
                    <Text style={styles.listPercentage}>{item?.percentage}%</Text>
                </View>
            </View>
        )
    }

    const getReportData = () => {
        dispatch(getIncomeExpenseReport(userDetails?.user_id));
    }

    const onChange = (event, selectedDate) => {
        setShowDatePicker(false)
        setSelectedDate(selectedDate);
    };

    const renderBodyData = () => {
        if (incomeExpenseReportData.length == 0) {
            return (
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={false}
                            onRefresh={() => getReportData()}
                        />
                    }
                    contentContainerStyle={{
                        flexGrow : 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={EMPTY}
                        style={{
                            width: '50%',
                            height: '50%',
                            aspectRatio: 1
                        }}
                        resizeMode={'contain'}
                    />
                    <Text style={styles.emptyLabelStyle}>History not available</Text>
                </ScrollView>
            )
        }

        return (
            <>
                <View style={{ marginVertical: moderateScale(4) }}>
                    <Text style={styles.overviewLabelStyle}>OVERVIEW</Text>
                    <View style={styles.spendDashboardContaienr}>
                        {
                            incomeExpenseReportData.map((element, index) => {
                                return (
                                    <View key={index} style={{ height: '100%', backgroundColor: cartPercentage[index].bgColor, flex: (element.percentage) / 10 }} />
                                )
                            })
                        }
                    </View>
                </View>

                <View style={{ marginTop: moderateScale(5), flex: 1 }}>
                    <Text style={{ ...styles.overviewLabelStyle, marginBottom: moderateScale(5) }}>DETAILS</Text>

                    <View style={{ flex: 1 }}>
                        <FlatList
                            refreshing={false}
                            data={incomeExpenseReportData}
                            keyExtractor={(_, index) => index.toString()}
                            contentContainerStyle={{ paddingVertical: moderateScale(5) }}
                            showsVerticalScrollIndicator={false}
                            legacyImplementation={true}
                            maxToRenderPerBatch={10}
                            nestedScrollEnabled={true}
                            renderItem={listContainer}
                            onRefresh={() => getReportData()}
                        />
                    </View>
                </View>
            </>
        )
    }

    return (
        <CommonContainer
            customStyles={{ paddingHorizontal: moderateScale(10) }}
        >
            <HeaderComponent navigation={navigation} />

            <ScreenLoader isVisiable={incomeExpenseReportLoading} />

            <View style={{ flex: 1 }}>
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
                        <Text style={styles.selectedDateStyle}>{moment(selectedDate).format('MMM YYYY')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                    >
                        <RightChevronIcon />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1 }}>
                    {renderBodyData()}
                </View>
            </View>

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
    },
	emptyLabelStyle : {
		fontFamily : Fonts.Bold,
		fontSize : moderateScale(18),
		color : Colors.GREY_600
	}
})