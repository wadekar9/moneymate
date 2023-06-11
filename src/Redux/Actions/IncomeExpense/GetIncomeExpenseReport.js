import { APP_WRITE_ACCOUNT, APP_WRITE_DATABASE, APP_WRITE_QUERY } from "../../../Config/AppWriteConfig";
import { startIncomeExpenseReportLoading, stopIncomeExpenseReportLoading, storeIncomeExpenseReportData } from '../ActionCreators';
import { triggerSnackMessage } from "../../../Services/HelperMethod";
import Config from "react-native-config";
import { Messages } from "../../../Config/Constant";


export const getIncomeExpenseReport = (user_id) => {
    return async (dispatch) => {

        let QueryList = [APP_WRITE_QUERY.equal('user_id',[user_id]),APP_WRITE_QUERY.select(['category','amount','date_time','description','type'])];

        dispatch(startIncomeExpenseReportLoading());

        const incomeExpenseReportPromise = APP_WRITE_DATABASE.listDocuments(Config.APP_WRITE_DATABASE_ID,Config.APP_WRITE_INCOME_EXPENSE_COLLECTION_ID,QueryList);

        incomeExpenseReportPromise.then(
            (response) => {

                console.log(response.documents);

                let categoryWiseData = [];
                
                const data = response.documents;

                data.forEach((element) => {

                    let checked = categoryWiseData.findIndex((ele) => ele?.category == element?.category);

                    if(checked === -1){
                        categoryWiseData.push()
                    } else {
                        categoryWiseData[checked].amount = categoryWiseData[checked].amount + element?.amount;
                        categoryWiseData[checked].noOfTxn = categoryWiseData[checked].amount + 1;
                    }

                })

                dispatch(stopIncomeExpenseReportLoading());
            },
            (error) => {
                console.log(error);
                dispatch(stopIncomeExpenseReportLoading());
                triggerSnackMessage({
                    message : Messages.SERVER_FAILER
                })
            }
        )

    }
}