import { combineReducers } from "redux";
import { AuthenticationReducer } from "./Authentication/AuthenticationReducer";
import { IncomeExpenseReducer } from './IncomeExpense/IncomeExpenseReducer';
import { IncomeExpenseReportReducer } from "./IncomeExpense/IncomeExpenseReportReducer";

const RootReducer = combineReducers({
    AuthenticationReducer,
    IncomeExpenseReducer,
    IncomeExpenseReportReducer
});

export default RootReducer;