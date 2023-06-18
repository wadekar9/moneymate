import {
    CLEAR_INCOME_EXPENSE_DETAILS,
    CLEAR_USER_DETAILS,
    START_ADD_INCOME_EXPENSE_LOADING,
    START_AUTHENTICATION_LOADING,
    START_INCOME_EXPENSE_LOADING,
    START_LOG_OUT_LOADING,
    STOP_ADD_INCOME_EXPENSE_LOADING,
    STOP_AUTHENTICATION_LOADING,
    STOP_INCOME_EXPENSE_LOADING,
    STOP_LOG_OUT_LOADING,
    STORE_INCOME_EXPENSE_DETAILS,
    STORE_USER_DETAILS,
    UPDATE_LOGIN_EMAIL,
    START_INCOME_EXPENSE_REPORT_LOADING,
    STOP_INCOME_EXPENSE_REPORT_LOADING,
    STORE_INCOME_EXPENSE_REPORT_DATA,
    CLEAR_INCOME_EXPENSE_REPORT_DATA,
    START_MANAGE_CATEGORY_LOADING,
    STOP_MANAGE_CATEGORY_LOADING,
    STORE_USER_CATEGORIES,
    CLEAR_USER_CATEGORIES,
    START_UPDATE_LOADING,
    STOP_UPDATE_LOADING,
    START_ADD_CATEGORY_LOADING,
    STOP_ADD_CATEGORY_LOADING
} from './ActionTypes';

//----------------------------------------------------------
//Authentication Action creators
//----------------------------------------------------------
export const startAuthenticationLoading = () => {
    return({
        type : START_AUTHENTICATION_LOADING
    })
}

export const stopAuthenticationLoading = () => {
    return({
        type : STOP_AUTHENTICATION_LOADING
    })
}

export const storeUserDetails = (details = null) => {
    return({
        type : STORE_USER_DETAILS,
        payload : details
    })
}

export const updateLoginEmail = (email = '') => {
    return({
        type : UPDATE_LOGIN_EMAIL,
        payload : email
    })
}

export const startLogOutLoading = () => {
    return({
        type : START_LOG_OUT_LOADING
    })
}

export const stopLogOutLoading = () => {
    return({
        type : STOP_LOG_OUT_LOADING
    })
}

export const clearUserDetails = () => {
    return({
        type : CLEAR_USER_DETAILS
    })
}

export const startUpdateLoading = () => {
    return({
        type : START_UPDATE_LOADING
    })
}

export const stopUpdateLoading = () => {
    return({
        type : STOP_UPDATE_LOADING
    })
}



//----------------------------------------------------------
//Income Expense Action creators
//----------------------------------------------------------

export const startIncomeExpenseLoading = () => {
    return({
        type : START_INCOME_EXPENSE_LOADING
    })
}

export const stopIncomeExpenseLoading = () => {
    return({
        type : STOP_INCOME_EXPENSE_LOADING
    })
}

export const startAddIncomeExpenseLoading = () => {
    return({
        type : START_ADD_INCOME_EXPENSE_LOADING
    })
}

export const stopAddIncomeExpenseLoading = () => {
    return({
        type : STOP_ADD_INCOME_EXPENSE_LOADING
    })
}

export const storeIncomeExpenseDetails = (data = []) => {
    return({
        type : STORE_INCOME_EXPENSE_DETAILS,
        payload : data
    })
}

export const clearIncomeExpenseDetails = () => {
    return({
        type : CLEAR_INCOME_EXPENSE_DETAILS
    })
}

//----------------------------------------------------------
//Income Expense Report Action creators
//----------------------------------------------------------

export const startIncomeExpenseReportLoading = () => {
    return({
        type : START_INCOME_EXPENSE_REPORT_LOADING
    })
}

export const stopIncomeExpenseReportLoading = () => {
    return({
        type : STOP_INCOME_EXPENSE_REPORT_LOADING
    })
}

export const storeIncomeExpenseReportData = (data = []) => {
    return({
        type : STORE_INCOME_EXPENSE_REPORT_DATA,
        payload : data
    })
}

export const clearIncomeExpenseReportData = () => {
    return({
        type : CLEAR_INCOME_EXPENSE_REPORT_DATA
    })
}


//----------------------------------------------------------
//Category Action creators
//----------------------------------------------------------

export const startManageCateorgyLoading = () => {
    return({
        type : START_MANAGE_CATEGORY_LOADING
    })
}

export const stopManageCateorgyLoading = () => {
    return({
        type : STOP_MANAGE_CATEGORY_LOADING
    })
}

export const storeUserCategoryData = (data = [],DOC_ID) => {
    return({
        type : STORE_USER_CATEGORIES,
        payload : {
            data,
            DOC_ID
        }
    })
}

export const clearUserCategoryData = () => {
    return({
        type : CLEAR_USER_CATEGORIES
    })
}

export const startAddCategoryLoading = () => {
    return({
        type : START_ADD_CATEGORY_LOADING
    })
}

export const stopAddCategoryLoading = () => {
    return({
        type : STOP_ADD_CATEGORY_LOADING
    })
}