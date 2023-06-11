import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react';
import {
    TransportationIcon,
    SportsIcon,
    SelfDevelopmentIcon,
    SavingsIcon,
    RestaurantIcon,
    PartyIcon,
    MoneyIcon,
    MaintenanceIcon,
    LiquorIcon,
    LaundryIcon,
    InstitueIcon,
    HealthIcon,
    GroceriesIcon,
    GiftIcon,
    FuelIcon,
    ElectronicsIcon,
    EducationIcon,
    DonationIcon,
    CafeIcon
} from '../Assets/Icons/index';

const listOfCategories = [
    {
        type : 'electronics',
        component : ElectronicsIcon
    },
    {
        type : 'health',
        component : HealthIcon
    },
    {
        type : 'cafe',
        component : CafeIcon
    },
    {
        type : 'grocery',
        component : GroceriesIcon
    },
    {
        type : 'transportation',
        component : TransportationIcon
    },
    {
        type : 'other',
        component : MoneyIcon
    }
]


const CategoryIcon = ({ type }) => {

    function getCategoryIcon(){

       const element =  listOfCategories.find((ele) => ele.type == type);

       if(element != undefined){

            const IconComponent = element.component;

            return <IconComponent />
       } else {
            <MoneyIcon />
       }
    }

    return getCategoryIcon();
}

export default memo(CategoryIcon);