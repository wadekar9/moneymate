import { requestMultiple, checkMultiple, PERMISSIONS } from "react-native-permissions";
import { platform } from "../Config/Theme";

export const checkMultiplePermissions = async () => {
    
    if(platform.OS == 'android'){
        await checkMultiple([PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.READ_MEDIA_IMAGES])
        .then((Response) => {
            console.log(Response);
        })
        .catch((error) => {
            console.log(error);
        })
    } else {
        await checkMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.PHOTO_LIBRARY])
        .then((Response) => {
            console.log(Response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

}

export const requestMultiplePermissions = async () => {
    
    if(platform.OS == 'android'){
        await requestMultiple([PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.READ_MEDIA_IMAGES])
        .then((Response) => {
            console.log(Response);
        })
        .catch((error) => {
            console.log(error);
        })
    } else {
        await requestMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.PHOTO_LIBRARY])
        .then((Response) => {
            console.log(Response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

}