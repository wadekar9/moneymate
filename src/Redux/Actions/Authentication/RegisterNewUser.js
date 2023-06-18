import { triggerSnackMessage } from "../../../Services/HelperMethod";
import { APP_WRITE_ACCOUNT } from "../../../Config/AppWriteConfig";
import { startAuthenticationLoading, stopAuthenticationLoading, updateLoginEmail } from "../ActionCreators";
import { Messages } from "../../../Config/Constant";
import { ID } from "appwrite";

export const registerNewUser = ({ email, password, name }, callback) => {

    const UNIQUE_DOC_ID = ID.unique();

    return async (dispatch) => {

        dispatch(startAuthenticationLoading());

        const newAccountPromise = APP_WRITE_ACCOUNT.create(UNIQUE_DOC_ID, email, password, name)

        newAccountPromise.then(
            (response) => {
                triggerSnackMessage({
                    message: Messages.REGISTRATION_SUCCESS,
                    isPositive: true
                })
                dispatch(updateLoginEmail(email))
                dispatch(stopAuthenticationLoading());
                callback();
            },
            (error) => {
                console.log(error, "Internal error");
                dispatch(stopAuthenticationLoading());
            }
        )
    }
}