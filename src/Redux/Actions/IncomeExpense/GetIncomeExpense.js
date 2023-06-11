import { startIncomeExpenseLoading, stopIncomeExpenseLoading, storeIncomeExpenseDetails } from '../ActionCreators';
import { triggerSnackMessage } from '../../../Services/HelperMethod';
import { APP_WRITE_DATABASE, APP_WRITE_QUERY } from '../../../Config/AppWriteConfig';
import Config from 'react-native-config';
import { Messages } from '../../../Config/Constant';

export const GetIncomeExpense = (user_id) => {
    return async (dispatch) => {

        let QueryList = [APP_WRITE_QUERY.equal('user_id',[user_id]),APP_WRITE_QUERY.limit(10),APP_WRITE_QUERY.orderDesc('date_time')];

        dispatch(startIncomeExpenseLoading());

        const IncomeExpenseListPromise = APP_WRITE_DATABASE.listDocuments(Config.APP_WRITE_DATABASE_ID,Config.APP_WRITE_INCOME_EXPENSE_COLLECTION_ID,QueryList)

        IncomeExpenseListPromise.then(
            (response) => {
                // console.log(response.documents,"------->")
                dispatch(storeIncomeExpenseDetails(response.documents));
                dispatch(stopIncomeExpenseLoading());
            },
            (error) => {
                console.log(error,"00000>");
                dispatch(stopIncomeExpenseLoading());
                triggerSnackMessage({
                    message : Messages.SERVER_FAILER
                })
            }
        )
    }
}