import { APP_WRITE_ACCOUNT, APP_WRITE_DATABASE, APP_WRITE_QUERY } from "../../../Config/AppWriteConfig";
import { startIncomeExpenseReportLoading, stopIncomeExpenseReportLoading, storeIncomeExpenseReportData } from '../ActionCreators';
import { triggerSnackMessage } from "../../../Services/HelperMethod";
import Config from "react-native-config";
import { Messages } from "../../../Config/Constant";


export const getIncomeExpenseReport = (user_id) => {
    return async (dispatch) => {

        let QueryList = [APP_WRITE_QUERY.equal('user_id',[user_id])];

        dispatch(startIncomeExpenseReportLoading());

        const incomeExpenseReportPromise = APP_WRITE_DATABASE.listDocuments(Config.APP_WRITE_DATABASE_ID,Config.APP_WRITE_INCOME_EXPENSE_COLLECTION_ID,QueryList);

        incomeExpenseReportPromise.then(
            (response) => {

                let categoryWiseData = [];
                
                const data = response.documents;

                data.forEach((element) => {

                    let checked = categoryWiseData.findIndex((ele) => ele?.category == element?.category);

                    if(checked === -1){
                        categoryWiseData.push({
                            noOfTxn : 1,
                            amount : element?.amount,
                            type : element.type,
                            category : element.category,
                            total_length : data.length,
                            percentage : ((1/data.length) * 100).toFixed(0)
                        })
                    } else {
                        categoryWiseData[checked].amount = categoryWiseData[checked].amount + element?.amount;
                        categoryWiseData[checked].percentage = ((categoryWiseData[checked].noOfTxn + 1)/data.length * 100).toFixed(0)
                        categoryWiseData[checked].noOfTxn = categoryWiseData[checked].noOfTxn + 1;
                    }


                });

                dispatch(storeIncomeExpenseReportData(categoryWiseData))
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