import Config from "react-native-config";
import { triggerSnackMessage } from "../../../Services/HelperMethod";
import { APP_WRITE_DATABASE, APP_WRITE_QUERY } from "../../../Config/AppWriteConfig";
import { startUpdateLoading, stopUpdateLoading, storeUserDetails } from "../ActionCreators";
import { Constant, Messages } from "../../../Config/Constant";

export const updateUserDocument = (details, DOC_ID, callback) => {

    return (dispatch) => {

        dispatch(startUpdateLoading());

        const updateDocumentPromise = APP_WRITE_DATABASE.updateDocument(Config.APP_WRITE_DATABASE_ID, Config.APP_WRITE_USER_COLLECTION_ID, DOC_ID, details);

        updateDocumentPromise.then(
            (response) => {
                dispatch(storeUserDetails({ ...response, doc_id : DOC_ID }))
                dispatch(stopUpdateLoading());
                callback && callback();
                triggerSnackMessage({
                    isPositive : true,
                    message : Messages.PROFILE_UPDATE_SUCCESS
                })
            },
            (error) => {
                console.log(error)
                dispatch(stopUpdateLoading());
                triggerSnackMessage({
                    message : Messages.SERVER_FAILER
                })
            }
        )

    }
}