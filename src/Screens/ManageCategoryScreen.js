import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react';
import CommonContainer from '../Components/CommonContainer';
import CommonHeader from '../Components/CommonHeader';
import { DeleteOutlineIcon } from '../Assets/Icons/index';
import { Colors, Fonts, moderateScale } from '../Config/Theme';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { StackNavigationKeys } from '../Navigation/NavigationKeys';
import { getUserCategories } from '../Redux/Actions/Category/GetUserCategories';
import { useDispatch, useSelector } from 'react-redux';
import ScreenLoader from '../Components/ScreenLoader';
import CategoryIcon from '../Components/CategoryIcon';
import { triggerAlertMessage } from '../Services/HelperMethod';
import { updateUserCategories } from '../Redux/Actions/Category/UpdateUserCategories';

const ManageCategoryScreen = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { userDetails } = useSelector((state) => state.AuthenticationReducer);
  const { manageCategories, manageCategoriesDOC_ID, addCategoryLoading, manageCategoryLoading } = useSelector((state) => state.CategoryReducer);

  useEffect(() => {
    if(manageCategories.length == 0) getUserCategory();
  },[]);

  const getUserCategory = () => dispatch(getUserCategories(userDetails?.user_id));

  const handleDeleteCategory = (item) => {

    const newCategories = manageCategories.filter((ele) => ele != item);

    triggerAlertMessage(`Are you sure to delete ${item} category ?`,'Delete',() => { dispatch(updateUserCategories({ categories : newCategories }, manageCategoriesDOC_ID, () => { getUserCategory() }, true)) })
  }

  const listContainer = ({ item }) => {

    return (
      <View style={styles.listContainerStyle}>
        <View style={{ flex: 0.85, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
            <CategoryIcon type={item} />
          </View>
          <View style={{ flex: 0.8 }}>
            <Text style={styles.categoryNameStyle}>{item}</Text>
          </View>
        </View>
        <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleDeleteCategory(item)}
          >
            <DeleteOutlineIcon/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <CommonContainer>
      <CommonHeader headerLabel={'Manage categories'} />

      <ScreenLoader isVisiable={manageCategoryLoading || addCategoryLoading} />

      <View style={{ flex: 1 }}>
        <FlatList
          data={manageCategories}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{
            paddingVertical: moderateScale(10),
            flexGrow: 1
          }}
          ItemSeparatorComponent={() => <View style={{ margin: moderateScale(5) }} />}
          showsVerticalScrollIndicator={false}
          renderItem={listContainer}
          refreshing={false}
          onRefresh={() => getUserCategory()}
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
    color: Colors.RED_600
  },
  categoryNameStyle: {
    fontFamily: Fonts.Regular,
    fontSize: moderateScale(14),
    color: Colors.BLACK,
    textTransform : 'capitalize'
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