import { StyleSheet, Text, View } from 'react-native';
import { blue } from 'react-native-redash';

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
        marginBottom: 40,
    },
    confirmSleepButton: {
        elevation: 8,
        backgroundColor: "black",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 50,
        marginBottom: 40,
    },
    appButtonText: {
        fontFamily: `Arial`,
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
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
    welcomeBack: {
        //top: 300,
        fontSize: 25,
        padding: 15,
        //textAlign: 'center'
        marginTop: 60,
    },
    sleepText: {
        //top: 300,
        fontSize: 25,
        padding: 15,
        //textAlign: 'center'
        marginTop: 60,
        fontWeight: 'bold'
    },
    loginContainer: {
        flex: 0.85,
        alignItems: 'center',
        justifyContent: 'center',
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
       bottomPadding: {
        paddingBottom: 40,
        fontSize: 15,
        marginBottom: 15
      },
      forgotPassword: {
        //color: '#87C1FF',
        color: '#0064FF',
        paddingBottom: 40,
        fontSize: 15,
        marginBottom: 15
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    loginInput: {
        //height: 40,
        //margin: 12,
        //borderWidth: 1,
        //padding: 100,
        width: 300,
        height: 40,
        //backgroundColor: '#fff',
        backgroundColor: '#d3d3d3',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15, 
        fontSize: 16,
        marginBottom: 15
      },
    loginButton: {
        elevation: 8,
        backgroundColor: "#1e90ff",
        //borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 50,
        marginBottom: 10,
        width: 300
        //flex: 1,
        //width: 300,
        //justifyContent: 'center',
        ///marginHorizontal: 16,
      },
      sideText: {
        flexDirection:"row",
        alignItems:'center'
      }
});
