import { triggerSnackMessage } from "../../../Services/HelperMethod";
import { APP_WRITE_DATABASE, APP_WRITE_UNIQUE_ID } from "../../../Config/AppWriteConfig";
import { startAuthenticationLoading, stopAuthenticationLoading, updateLoginEmail } from "../ActionCreators";
import { Messages } from "../../../Config/Constant";
import Config from "react-native-config";

export const createNewUserDocument = (details) => {

    const USER_UNIQUE_ID = APP_WRITE_UNIQUE_ID;

    const userObject = {
        ...details,
        doc_id : USER_UNIQUE_ID
    }

    return async (dispatch) => {
        dispatch(startAuthenticationLoading());

        const newUserRegistrationPromise = APP_WRITE_DATABASE.createDocument(Config.APP_WRITE_DATABASE_ID, Config.APP_WRITE_USER_COLLECTION_ID, USER_UNIQUE_ID, userObject)

        newUserRegistrationPromise.then(
            (response) => {
                // console.log(response,"---->newUserRegistrationPromise");
            },
            (error) => {
                // console.log(error, "Internal error");
                triggerSnackMessage({
                    message: Messages.SERVER_FAILER
                })
            }
        )
    }
}