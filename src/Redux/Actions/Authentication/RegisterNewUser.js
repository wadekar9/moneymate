import { triggerSnackMessage } from "../../../Services/HelperMethod";
import { APP_WRITE_ACCOUNT, APP_WRITE_UNIQUE_ID } from "../../../Config/AppWriteConfig";
import { startAuthenticationLoading, stopAuthenticationLoading, updateLoginEmail } from "../ActionCreators";
import { Messages } from "../../../Config/Constant";

export const registerNewUser = ({ email, password, name }, callback) => {

    return async (dispatch) => {

        dispatch(startAuthenticationLoading());

        const newAccountPromise = APP_WRITE_ACCOUNT.create(APP_WRITE_UNIQUE_ID, email, password, name)

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