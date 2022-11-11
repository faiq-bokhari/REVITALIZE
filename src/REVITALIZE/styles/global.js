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
});
