import { StyleSheet, Text, View } from 'react-native';

 export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffdab9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText: {
        fontFamily: `Arial`,
        fontSize: 18,
        color: '#333',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#1e90ff",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 50,
        marginBottom: 50
    },
    appButtonText: {
        fontFamily: `Arial`,
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    topCenterContainer: {
        top: 20,
        center: 5,
        backgroundColor: "#1e90ff",
        position: 'absolute', // add if dont work with above
    },
    topRightContainer: {
        top: 20,
        right: 5,
        backgroundColor: "#1e90ff",
        position: 'absolute', // add if dont work with above
    },
    topLeftContainer: {
        top: 20,
        left: 5,
        backgroundColor: "#1e90ff",
        position: 'absolute', // add if dont work with above
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      sideText: {
        flexDirection:"row",
        alignItems:'center'
      }
});
