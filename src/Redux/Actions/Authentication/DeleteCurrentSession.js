import { triggerSnackMessage } from "../../../Services/HelperMethod";
import { APP_WRITE_ACCOUNT } from "../../../Config/AppWriteConfig";
import { Messages } from "../../../Config/Constant";
import { clearUserDetails, startLogOutLoading, stopLogOutLoading } from "../ActionCreators";

export const deleteCurrentSession = (sessionID, callback) => {
    return async (dispatch) => {

        dispatch(startLogOutLoading());

        const deleteSessionPromise = APP_WRITE_ACCOUNT.deleteSession(sessionID)

        deleteSessionPromise.then(
            (response) => {
                triggerSnackMessage({
                    message: 'Log out successfully',
                    isPositive : true
                })
                dispatch(clearUserDetails());
                callback && callback();
            },
            (error) => {
                dispatch(stopLogOutLoading());
                triggerSnackMessage({
                    message: Messages.SERVER_FAILER
                })
            }
        )
    }
}