import { startAuthenticationLoading, stopAuthenticationLoading } from "../ActionCreators";
import { APP_WRITE_ACCOUNT } from "../../../Config/AppWriteConfig";
import { triggerSnackMessage } from "../../../Services/HelperMethod";
import { Messages } from "../../../Config/Constant";
import { getCurrentAccount } from "./GetCurrentSession";

export const createEmailSession = ({ email, password }) => {
    return async (dispatch) => {

        dispatch(startAuthenticationLoading());

        const emailSessionCreationPromise = APP_WRITE_ACCOUNT.createEmailSession(email, password);

        emailSessionCreationPromise.then(
            (response) => {
                dispatch(getCurrentAccount());
                triggerSnackMessage({
                    isPositive: true,
                    message: Messages.LOGIN_SUCCESS
                })
            },
            (error) => {
                dispatch(stopAuthenticationLoading());
                triggerSnackMessage({
                    message: Messages.SERVER_FAILER
                })
            }
        )
    }
}