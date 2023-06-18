import { startAddCategoryLoading, stopAddCategoryLoading } from "../ActionCreators";
import { triggerSnackMessage } from "../../../Services/HelperMethod";
import { Messages } from "../../../Config/Constant";
import Config from "react-native-config";
import { APP_WRITE_DATABASE } from "../../../Config/AppWriteConfig";

export const updateUserCategories = (data, DOC_ID, callback, isDeletion = false) => {
    return (dispatch) => {

        dispatch(startAddCategoryLoading());

        const addCategoryPromise = APP_WRITE_DATABASE.updateDocument(Config.APP_WRITE_DATABASE_ID,Config.APP_WRITE_USER_CATEGORY_COLLECTION_ID,DOC_ID,data);

        addCategoryPromise.then(
            (response) => {
                dispatch(stopAddCategoryLoading());
                callback && callback();
                triggerSnackMessage({
                    isPositive : true,
                    message : (isDeletion) ? Messages.CATEGORY_DELETE_SUCCESS : Messages.NEW_CATEGORY_ADD_SUCCESS
                })
            },
            (error) => {
                dispatch(stopAddCategoryLoading());
                triggerSnackMessage({
                    message : Messages.SERVER_FAILER
                })
            }
        )

    }
}