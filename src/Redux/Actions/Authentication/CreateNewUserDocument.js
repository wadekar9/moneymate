import { triggerSnackMessage } from "../../../Services/HelperMethod";
import { APP_WRITE_DATABASE } from "../../../Config/AppWriteConfig";
import { startAuthenticationLoading, stopAuthenticationLoading, storeUserDetails } from "../ActionCreators";
import { Messages } from "../../../Config/Constant";
import Config from "react-native-config";
import { ID } from "appwrite";

export const createNewUserDocument = (details) => {

    const USER_UNIQUE_ID = ID.unique();

    return async (dispatch) => {
        dispatch(startAuthenticationLoading());

        const newUserRegistrationPromise = APP_WRITE_DATABASE.createDocument(Config.APP_WRITE_DATABASE_ID, Config.APP_WRITE_USER_COLLECTION_ID, USER_UNIQUE_ID, details)

        newUserRegistrationPromise.then(
            (response) => {
                // console.log(response,"---->newUserRegistrationPromise");
                dispatch(storeUserDetails({...details, doc_id : response.$id}));
                dispatch(stopAuthenticationLoading())
            },
            (error) => {
                console.log(error, "Internal error");
                triggerSnackMessage({
                    message: Messages.SERVER_FAILER
                })
            }
        )
    }
}