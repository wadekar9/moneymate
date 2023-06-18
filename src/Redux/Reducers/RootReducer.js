import { combineReducers } from "redux";
import { AuthenticationReducer } from "./Authentication/AuthenticationReducer";
import { IncomeExpenseReducer } from './IncomeExpense/IncomeExpenseReducer';
import { IncomeExpenseReportReducer } from "./IncomeExpense/IncomeExpenseReportReducer";
import { CategoryReducer } from "./Category/CategoryReducer";

const RootReducer = combineReducers({
    AuthenticationReducer,
    IncomeExpenseReducer,
    IncomeExpenseReportReducer,
    CategoryReducer
});

export default RootReducer;