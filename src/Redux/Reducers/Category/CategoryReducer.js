import {
    CLEAR_USER_CATEGORIES,
    START_ADD_CATEGORY_LOADING,
    START_MANAGE_CATEGORY_LOADING,
    STOP_ADD_CATEGORY_LOADING,
    STOP_MANAGE_CATEGORY_LOADING,
    STORE_USER_CATEGORIES
}
from "../../Actions/ActionTypes";

const intialState = {
    manageCategories : [],
    manageCategoriesDOC_ID : null,
    manageCategoryLoading : false,
    addCategoryLoading : false
}

export const CategoryReducer = (state = intialState, action) => {

    switch(action.type){

        case START_MANAGE_CATEGORY_LOADING : return {
            ...state,
            manageCategoryLoading : true
        }

        case STOP_MANAGE_CATEGORY_LOADING : return {
            ...state,
            manageCategoryLoading : false
        }

        case START_ADD_CATEGORY_LOADING : return {
            ...state,
            addCategoryLoading : true
        }

        case STOP_ADD_CATEGORY_LOADING : return {
            ...state,
            addCategoryLoading : false
        }

        case STORE_USER_CATEGORIES : return {
            ...state,
            manageCategoryLoading : false,
            manageCategories : action.payload.data,
            manageCategoriesDOC_ID : action.payload.DOC_ID
        }

        case CLEAR_USER_CATEGORIES : return {
            ...state,
            manageCategories : []
        }

        default : return state;       
    }

}