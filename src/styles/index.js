import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')
const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

/**
 * This file is for a reusable grouping of Theme items.
 * Similar to an XML fragment layout in Android
 */

const ApplicationStyles = {
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    description: {
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 30,
    },
    card: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        margin: 7
    },
    bottomBar: {
        flexDirection: 'row',
    },
    img: {
        width: screenWidth / 3,
        height: screenWidth / 3,
        resizeMode: 'stretch',
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
}
  
export default ApplicationStyles
  