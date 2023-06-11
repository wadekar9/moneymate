import { 
    START_INCOME_EXPENSE_REPORT_LOADING,
    STOP_INCOME_EXPENSE_REPORT_LOADING,
    STORE_INCOME_EXPENSE_REPORT_DATA,
    CLEAR_INCOME_EXPENSE_REPORT_DATA
} from '../../Actions/ActionTypes';

const intialState = {
    incomeExpenseReportData : [],
    incomeExpenseReportLoading : false
}

export const IncomeExpenseReportReducer = (state = intialState, action) => {
    switch(action.type){

        case START_INCOME_EXPENSE_REPORT_LOADING : return {
            ...state,
            incomeExpenseReportLoading : true
        }

        case STOP_INCOME_EXPENSE_REPORT_LOADING : return {
            ...state,
            incomeExpenseReportLoading : false
        }

        case STORE_INCOME_EXPENSE_REPORT_DATA : return {
            ...state,
            incomeExpenseReportData : action.payload
        }

        case CLEAR_INCOME_EXPENSE_REPORT_DATA : return {
            ...state,
            incomeExpenseReportData : []
        }

        default : return state;

    }
}