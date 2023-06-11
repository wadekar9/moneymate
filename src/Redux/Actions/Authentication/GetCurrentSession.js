import { APP_WRITE_ACCOUNT, APP_WRITE_UNIQUE_ID } from "../../../Config/AppWriteConfig";
import { Messages } from "../../../Config/Constant";
import { triggerSnackMessage } from "../../../Services/HelperMethod";
import { storeUserDetails, stopAuthenticationLoading } from "../ActionCreators";
import { checkUserDocument } from "./CheckUserDocument";

export const getCurrentSession = (sessionID = '647e35ae0e1303717dce') => {
    return async (dispatch) => {

        try {
            const currentSessionPromise = APP_WRITE_ACCOUNT.getSession(sessionID);

            currentSessionPromise.then(
                (response) => {
                    console.log('Sesssion --->', response);
                },
                (error) => {
                    // dispatch(stopAuthenticationLoading());
                    triggerSnackMessage({
                        message: error.message
                    })
                }
            )
        } catch (error) {
            console.log(error);
            // dispatch(stopAuthenticationLoading());
            triggerSnackMessage({
                message: Messages.SERVER_FAILER
            })
        }
    }
}

export const getCurrentAccount = (callback) => {
    return async (dispatch) => {
        const currentAccountPromise = APP_WRITE_ACCOUNT.get();

        currentAccountPromise.then(
            (response) => {
                dispatch(getSessionsList(response));
            },
            (error) => {
                console.log("-------->", error);
                dispatch(stopAuthenticationLoading());
                (callback) ?
                    callback()
                    :
                    triggerSnackMessage({
                        message: error.message
                    })
            }
        )
    }
}

export const getSessionsList = (user) => {

    const { email, emailVerification, name } = user;

    return async (dispatch) => {
        const sessionListPromise = APP_WRITE_ACCOUNT.listSessions();

        sessionListPromise.then(
            (response) => {

                if (response.sessions.length) {
                    const { $id, userId } = response.sessions[0];

                    const userDetails = {
                        currentSessionID: $id,
                        currentUserID: userId,
                        email,
                        emailVerification,
                        userName: name
                    }

                    dispatch(checkUserDocument(userDetails))
                    dispatch(storeUserDetails(userDetails));
                }
            },
            (error) => {
                console.log("-------> get current session",error)
                dispatch(stopAuthenticationLoading());
                triggerSnackMessage({
                    message: Messages.SERVER_FAILER
                })
            }
        )

    }
}