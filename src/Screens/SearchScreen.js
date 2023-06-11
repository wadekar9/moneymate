import { FlatList, LayoutAnimation, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import CommonContainer from '../Components/CommonContainer';
import { moderateScale, Colors, Fonts } from '../Config/Theme';
import { ArrowBackIcon, CafeBarOutlineIcon, BlueCheckedIcon, HealthIcon, RecentArrowIcon, HistoryIcon } from '../Assets/Icons/index';
import { useNavigation } from '@react-navigation/native';

const demoCategory = [
    {
        selected : false,
        categoryName : 'Category #1'
    },
    {
        selected : false,
        categoryName : 'Category #2'
    },
    {
        selected : false,
        categoryName : 'Category #3'
    },
    {
        selected : false,
        categoryName : 'Category #4'
    },
    {
        selected : false,
        categoryName : 'Category #5'
    }
]

const SearchScreen = () => {

    const navigation = useNavigation();
    const [categoryListData, setCategoryData] = useState(demoCategory);
    const [searchQuery, setSearchQuery] = useState('');

    const categoryItemContainer = ({item, index}) => {
        return(
            <TouchableOpacity 
                style={[styles.categoryItemContainerStyle, item.selected && styles.categoeySelectionStyle]}
                activeOpacity={0.8}
                onPress={() => {
                    categoryListData[index].selected = !item.selected;
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
                    setCategoryData([...categoryListData])
                }}
            >
                {
                    item.selected ? <BlueCheckedIcon /> : <CafeBarOutlineIcon/>
                }

                <Text style={styles.listCategoryName}>{item.categoryName}</Text>
            </TouchableOpacity>
        )
    }

    const listContainerItem = ({item, index}) => {
        return(
            <View style={styles.listCotainer}>
                <View style={styles.listChildContainer}>
                    <Text style={styles.dayLabelStyle}>Today</Text>
                    <Text style={styles.dayLabelStyle}>- ₹1125</Text>
                </View>
                <View style={styles.listSecondChildContainer}>
                    <View style={{flex : 0.8,flexDirection : 'row',alignItems:'center'}}>
                        <View style={{flex : 0.17,alignItems:'center',justifyContent:'center'}}>
                            <HealthIcon />
                        </View>
                        <View style={{flex : 0.83}}>
                            <Text style={styles.title}>Egg && Vegies</Text>
                            <Text style={styles.subTitle}>Grocery</Text>
                        </View>
                    </View>
                    <View style={{flex : 0.2,alignItems:'flex-end',justifyContent : 'center'}}>
                        <Text style={styles.incomeExpenseAmount}>- ₹500</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <CommonContainer>
            <View>
                <View style={styles.searchBarHeader}>
                    <View style={{ flex: 0.14, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.goBack()}
                        >
                            <ArrowBackIcon />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.86, alignSelf: 'center' }}>
                        <TextInput
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                            onSubmitEditing={() => console.log(searchQuery)}
                            placeholder={'Search for notes, categories and labels'}
                            placeholderTextColor={Colors.GREY_700}
                            returnKeyType={'search'}
                            returnKeyLabel={'Search'}
                            autoFocus={true}
                            keyboardAppearance={'light'}
                            keyboardType={'web-search'}
                            style={styles.searchBarStyle}
                            cursorColor={Colors.BLUE_500}
                            autoCapitalize={'none'}
                        />
                    </View>
                </View>

                <FlatList
                    data={categoryListData}
                    horizontal
                    keyExtractor={(_,index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingLeft : moderateScale(40),
                        paddingRight : moderateScale(15),
                        paddingVertical : moderateScale(10)
                    }}
                    alwaysBounceHorizontal={false}
                    ItemSeparatorComponent={() => <View style={{marginHorizontal : moderateScale(3)}} />}
                    renderItem={categoryItemContainer}
                />

                <View style={styles.lineStyle} />
            </View>

            <View style={{flex : 1}}>
                {/* <FlatList
                    data={[]}
                    keyExtractor={(_,index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        padding : moderateScale(10)
                    }}
                    ItemSeparatorComponent={() => <View style={{margin : moderateScale(5)}} />}
                    renderItem={listContainerItem}
                /> */}

                <View style={{padding : moderateScale(10)}}>
                    {
                        (new Array(4)).fill('_').map((_,index) => {
                            return(
                                <View key={index} style={styles.recentSearchContainer}>
                                    <View style={{flex : 0.88,flexDirection : 'row',alignItems : 'center'}}>
                                        <View style={{flex : 0.12,alignItems:'center',justifyContent:'center'}}>
                                            <HistoryIcon />
                                        </View>
                                        <View style={{flex : 0.88}}>
                                            <Text style={styles.recentSearchStyle}>Recent Search #{index+1}</Text>
                                        </View>
                                    </View>
                                    <View style={{flex : 0.12,alignItems:'center',justifyContent:'center'}}>
                                        <RecentArrowIcon />
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </CommonContainer>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    searchBarHeader: {
        height: moderateScale(56),
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    searchBarStyle: {
        fontFamily: Fonts.Regular,
        fontSize: moderateScale(14),
        color: Colors.GREY_800,
        textAlign: 'left'
    },
    lineStyle : {
        height : moderateScale(1),
        backgroundColor : Colors.GREY_150,
        elevation : 0.6
    },
    categoryItemContainerStyle : {
        height : moderateScale(32),
        borderWidth : moderateScale(0.9),
        borderRadius : moderateScale(6),
        borderColor : Colors.GREY_500,
        flexDirection : 'row',
        alignItems : 'center',
        backgroundColor : Colors.WHITE,
        paddingHorizontal : moderateScale(6)
    },
    listCategoryName : {
        fontFamily : Fonts.Regular,
        fontSize : moderateScale(14),
        color : Colors.GREY_800,
        marginLeft : moderateScale(5)
    },
    categoeySelectionStyle : {
        backgroundColor : Colors.BLUR_BLUE,
        borderColor : Colors.BLUE_500
    },
    listCotainer : {
        height : moderateScale(104),
        width : '100%',
        borderWidth : moderateScale(1),
        borderRadius : moderateScale(8),
        borderColor : Colors.GREY_150,
        padding : moderateScale(8)
    },
    listChildContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        height : moderateScale(32)
    },
    listSecondChildContainer : {
        height : moderateScale(55),
        paddingVertical : moderateScale(8),
        flexDirection : 'row',
        alignItems : 'stretch',
        justifyContent : 'space-between'
    },
    dayLabelStyle : {
        fontFamily : Fonts.Medium,
        fontSize : moderateScale(10),
        color : Colors.GREY_800,
        textTransform : 'uppercase',
        letterSpacing : moderateScale(1.5)
    },
    title : {
        fontFamily : Fonts.Regular,
        fontSize : moderateScale(14),
        color : Colors.GREY_900,
        textTransform : 'capitalize'
    },
    subTitle : {
        fontFamily : Fonts.Regular,
        fontSize : moderateScale(12),
        color : Colors.GREY_700,
        textTransform : 'capitalize'
    },
    incomeExpenseAmount : {
        fontFamily : Fonts.Regular,
        fontSize : moderateScale(14),
        color : Colors.RED_600,
        textAlign : 'right'
    },
    recentSearchContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        marginVertical : moderateScale(6)
    },
    recentSearchStyle : {
        fontFamily : Fonts.Regular,
        fontSize : moderateScale(14),
        color : Colors.GREY_800,
        textAlign : 'left'
    }
})