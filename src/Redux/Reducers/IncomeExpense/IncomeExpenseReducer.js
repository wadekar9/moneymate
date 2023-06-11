import { 
    START_INCOME_EXPENSE_LOADING,
    STOP_INCOME_EXPENSE_LOADING,
    START_ADD_INCOME_EXPENSE_LOADING,
    STOP_ADD_INCOME_EXPENSE_LOADING,
    STORE_INCOME_EXPENSE_DETAILS,
    CLEAR_INCOME_EXPENSE_DETAILS
} from '../../Actions/ActionTypes';

const intialState = {
    incomeExpenseList : [],
    incomeExpenseMoreLoading : true,
    incomeExpenseLoading : false,
    addIncomeExpenseLoading : false
}

export const IncomeExpenseReducer = (state = intialState, action) => {
    switch(action.type){

        case START_INCOME_EXPENSE_LOADING : return {
            ...state,
            incomeExpenseLoading : true
        }

        case STOP_INCOME_EXPENSE_LOADING : return {
            ...state,
            incomeExpenseLoading : false
        }

        case START_ADD_INCOME_EXPENSE_LOADING : return {
            ...state,
            addIncomeExpenseLoading : true
        }

        case STOP_ADD_INCOME_EXPENSE_LOADING : return {
            ...state,
            addIncomeExpenseLoading : false
        }

        case STORE_INCOME_EXPENSE_DETAILS : return {
            ...state,
            incomeExpenseList : action.payload
        }

        case CLEAR_INCOME_EXPENSE_DETAILS : return {
            ...state,
            incomeExpenseList : []
        }

        default : return state;

    }
}