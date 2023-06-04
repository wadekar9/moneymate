import { Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 813;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };

export const Fonts = {
    Black: 'Inter-Black',
    Bold: 'Inter-Bold',
    SemiBold: 'Inter-SemiBold',
    Medium: 'Inter-Medium',
    Light: 'Inter-Light',
    Regular: 'Inter-Regular',
    Thin : 'Inter-Thin',
    ExtraLight : 'Inter-ExtraLight',
    ExtraBold : 'Inter-ExtraBold'
}

export const Colors = {
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    BLUE_500 : '#007BEF',
    BLUR_BLUE : '#DBEEFC',
    GREY_900 : '#212121',
    GREY_800 : '#424242',
    GREY_700 : '#616161',
    GREY_600 : '#9E9E9E',
    GREY_500 : '#BDBDBD',
    GREY_200 : '#EEEEEE',
    GREY_150 : '#E0E0E0',
    GREY_100 : '#F5F5F5',
    GREEN_600 : '#00897B',
    DARK_GREEN : '#299C00',
    RED_600 : '#E53935'
}

export const DEVICE_STYLES = {
    SCREEN_WIDTH : width,
    SCREEN_HEIGHT : height,
}

export const platform = Platform;