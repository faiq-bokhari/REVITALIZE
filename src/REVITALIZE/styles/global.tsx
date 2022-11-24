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
    listContainer: {
        // flex: 1,
        // top: 20,
        paddingTop: 60,
        paddingBottom: 10,
        flex: 1,
        // flexDirection: 'row',
        // alignItems: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
       },
       listContainer2: {
        // flex: 1,
        // top: 20,
        paddingTop: 20,
        paddingBottom: 10,
        flex: 1,
        // flexDirection: 'row',
        // alignItems: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
       },
       item: {
         padding: 10,
         fontSize: 18,
        //  height: 44,
       },
       listButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
      },
     });
