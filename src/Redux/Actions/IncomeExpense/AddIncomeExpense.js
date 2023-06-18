import { triggerSnackMessage } from "../../../Services/HelperMethod";
import { startAddIncomeExpenseLoading, stopAddIncomeExpenseLoading, storeIncomeExpenseDetails } from "../ActionCreators";
import Config from "react-native-config";
import { APP_WRITE_DATABASE } from "../../../Config/AppWriteConfig";
import { Messages } from "../../../Config/Constant";
import { ID } from "appwrite";

export const AddIncomeExpense = (incomeExpenseData,callback) => {

    const UNIQUE_DOC_ID = ID.unique();

    return async (dispatch) => {

        dispatch(startAddIncomeExpenseLoading());

        const addIncomeExpensePromise = APP_WRITE_DATABASE.createDocument(Config.APP_WRITE_DATABASE_ID,Config.APP_WRITE_INCOME_EXPENSE_COLLECTION_ID,UNIQUE_DOC_ID,incomeExpenseData)

        addIncomeExpensePromise.then(
            (response) => {
                dispatch(stopAddIncomeExpenseLoading());
                callback && callback();
                triggerSnackMessage({
                    isPositive : true,
                    message : `${incomeExpenseData.type} ${Messages.INCOME_EXPENSE_ADD_SUCCESS}`
                })
            },
            (error) => {
                console.log(error,"00000>");
                dispatch(stopAddIncomeExpenseLoading());
                triggerSnackMessage({
                    message : Messages.SERVER_FAILER
                })
            }
        )
    }
}