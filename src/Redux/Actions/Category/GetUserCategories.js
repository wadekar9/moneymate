import { triggerSnackMessage } from "../../../Services/HelperMethod";
import { startManageCateorgyLoading, stopManageCateorgyLoading, storeUserCategoryData } from "../ActionCreators";
import { APP_WRITE_DATABASE, APP_WRITE_QUERY } from "../../../Config/AppWriteConfig";
import { Messages } from "../../../Config/Constant";
import Config from "react-native-config";

export const getUserCategories = (user_id) => {
    return (dispatch) => {

        dispatch(startManageCateorgyLoading());

        let QueryList = [APP_WRITE_QUERY.equal('user_id',[user_id])];

        const userCategoryPromise = APP_WRITE_DATABASE.listDocuments(Config.APP_WRITE_DATABASE_ID,Config.APP_WRITE_USER_CATEGORY_COLLECTION_ID,QueryList)

        userCategoryPromise.then(
            (response) => {
                if(response.documents.length){
                    dispatch(storeUserCategoryData(response.documents[0].categories,response.documents[0].$id))
                } else {
                    triggerSnackMessage({
                        message : "you don't have any categories"
                    })
                }
                dispatch(stopManageCateorgyLoading());
            },
            (error) => {
                console.log(error,"00000>");
                dispatch(stopManageCateorgyLoading());
                triggerSnackMessage({
                    message : Messages.SERVER_FAILER
                })
            }
        )
    }
}