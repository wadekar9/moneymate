import React, { memo } from 'react';
import { HashIcon } from '../Assets/Icons/index';
import { CommonCategoriesData } from '../Utils/Data';

const CategoryIcon = ({ type }) => {

    function getCategoryIcon(){

       const element =  CommonCategoriesData.find((ele) => ele.label == type);

       if(element != undefined){

            const IconComponent = element.icon;

            return <IconComponent />
       } else {
            return <HashIcon />
       }
    }

    return getCategoryIcon();
}

export default memo(CategoryIcon);