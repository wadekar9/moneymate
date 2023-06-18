import { triggerSnackMessage } from "../../../Services/HelperMethod";
import { APP_WRITE_DATABASE, APP_WRITE_QUERY } from "../../../Config/AppWriteConfig";
import { startAuthenticationLoading, stopAuthenticationLoading, updateLoginEmail, storeUserDetails } from "../ActionCreators";
import { Messages } from "../../../Config/Constant";
import Config from "react-native-config";
import { createNewUserDocument } from "./CreateNewUserDocument";

export const checkUserDocument = (details) => {

    const userObject = {
        profile : '',
        name : details.name,
        email : details.email,
        wallet_balance : 0,
        currency : 'INR',
        date_time : new Date(),
        emailVerification : false,
        user_id : details.user_id,
        session_id : details.currentSessionID
    }

    return async (dispatch) => {
        dispatch(startAuthenticationLoading());

        let QueryList = [APP_WRITE_QUERY.equal('user_id',[details.user_id])];

        const newUserRegistrationPromise = APP_WRITE_DATABASE.listDocuments(Config.APP_WRITE_DATABASE_ID, Config.APP_WRITE_USER_COLLECTION_ID,QueryList)

        newUserRegistrationPromise.then(
            (response) => {
                // console.log("newUserRegistrationPromise response ---->",response.documents[0])
                if(response.documents.length == 0){
                    dispatch(createNewUserDocument(userObject))
                }
                else {
                    dispatch(storeUserDetails(response.documents[0]));
                    dispatch(stopAuthenticationLoading());
                }
            },
            (error) => {
                console.log(error, "Internal error");
                dispatch(stopAuthenticationLoading());
                triggerSnackMessage({
                    message: Messages.SERVER_FAILER
                })
            }
        )
    }
}