import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import CommonContainer from '../Components/CommonContainer';
import CommonHeader from '../Components/CommonHeader';
import { BankIcon, CafeIcon, GroceriesIcon, SavingsIcon, TransportationIcon } from '../Assets/Icons/index';
import { Colors, Fonts, moderateScale } from '../Config/Theme';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { StackNavigationKeys } from '../Navigation/NavigationKeys';

const dummyCategoryData = [
  {
    label: 'Bank',
    icon: BankIcon
  },
  {
    label: 'Cafe & Bar',
    icon: CafeIcon
  },
  {
    label: 'Grocery',
    icon: GroceriesIcon
  },
  {
    label: 'Salary',
    icon: SavingsIcon
  },
  {
    label: 'Transport',
    icon: TransportationIcon
  }
];

const ManageCategoryScreen = () => {

  const navigation = useNavigation();

  const listContainer = ({ item }) => {

    const CategoryIcon = item.icon

    return (
      <View style={styles.listContainerStyle}>
        <View style={{ flex: 0.8, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
            <CategoryIcon />
          </View>
          <View style={{ flex: 0.8 }}>
            <Text style={styles.categoryNameStyle}>{item.label}</Text>
          </View>
        </View>
        <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.dispatch(CommonActions.navigate(StackNavigationKeys.AddCategory))}
          >
            <Text style={styles.editButtonStyle}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <CommonContainer>
      <CommonHeader headerLabel={'Manage categories'} />

      <View style={{ flex: 1 }}>
        <FlatList
          data={dummyCategoryData}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{
            paddingVertical: moderateScale(10),
            flexGrow: 1
          }}
          ItemSeparatorComponent={() => <View style={{ margin: moderateScale(5) }} />}
          showsVerticalScrollIndicator={false}
          renderItem={listContainer}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          activeOpacity={0.9}
          accessibilityRole={'button'}
          onPress={() => navigation.dispatch(CommonActions.navigate(StackNavigationKeys.AddCategory))}
        >
          <Text style={styles.buttonContainerText}>Add new category</Text>
        </TouchableOpacity>
      </View>
    </CommonContainer>
  )
}

export default ManageCategoryScreen

const styles = StyleSheet.create({
  listContainerStyle: {
    height: moderateScale(56),
    flexDirection: 'row',
    alignItems: 'center'
  },
  editButtonStyle: {
    fontFamily: Fonts.Medium,
    fontSize: moderateScale(14),
    color: Colors.BLUE_500
  },
  categoryNameStyle: {
    fontFamily: Fonts.Regular,
    fontSize: moderateScale(14),
    color: Colors.BLACK
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
    elevation: 1.2,
    shadowColor: Colors.BLACK
  },
  buttonContainerText: {
    fontFamily: Fonts.Medium,
    fontSize: moderateScale(14),
    color: Colors.WHITE
  }
})