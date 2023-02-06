import { StyleSheet, Text, View } from 'react-native';
import { blue } from 'react-native-redash';

 export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    date_container: {
      width:'100%',
      backgroundColor: '#000000',
      height: 100,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
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
        backgroundColor: '#000000' ,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 50,
        marginBottom: 20,
        marginTop: 20
    },
    MainPage_Title: {
      fontWeight: 'bold',
      fontSize: 24,
      textAlign: 'center',
      width: '100%',    
      marginTop: 50,
      marginBottom: 10,
    },
    MainPage_Subtitle: {
      fontWeight: '600',
      fontSize: 16,
      textAlign: 'center',
      width: '100%',    
    },
    listTitle: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      textDecorationLine: 'underline',
      marginBottom: 10,
    },
    appDietButtonContainer: {
      elevation: 8,
      backgroundColor: "#fceecb",
      borderRadius: 0,
      paddingVertical: 50,
      paddingHorizontal: 50,
      marginBottom: 10,
      marginTop: 50,
      width: 390,
      
    },
    appDietButtonContainer2: {
      elevation: 8,
      backgroundColor: "#fceecb",
      borderRadius: 100,
      paddingVertical: 20,
      paddingHorizontal: 50,
      marginBottom: 50,
      width: 300,
      
    },
    appDietButtonContainer3: {
      elevation: 8,
      backgroundColor: "#fceecb",
      borderRadius: 100,
      paddingVertical: 20,
      paddingHorizontal: 20,
      marginBottom: 20,
      width: 300,
      
    },
    appExerciseButtonContainer: {
        elevation: 8,
        backgroundColor: "#f9cedf",
        borderRadius: 0,
        paddingVertical: 50,
        paddingHorizontal: 50,
        marginBottom: 10,
        width: 390,
    },
    appSleepButtonContainer: {
      elevation: 8,
      backgroundColor: "#1e90ff",
      borderRadius: 0,
      paddingVertical: 50,
      paddingHorizontal: 50,
      marginBottom: 0,
      width: 390,
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
    appMainScreenText: {
      fontFamily: `Arial`,
      fontSize: 18,
      color: "#000000",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
  },
    topCenterContainer: {
        alignSelf: 'center',
        backgroundColor: "#000000",
    },
    topRightContainer: {
      alignSelf: 'flex-end',
      backgroundColor: "#000000",
      
    },
    topLeftContainer: {
      alignSelf: 'flex-start',
      backgroundColor: "#000000",
    },
    listContainer: {
        backgroundColor: "#fceecb",
        flex: 1,
        marginTop: 10,
        width: '90%',
        borderRadius: 15,
       },
       listContainer2: {
        backgroundColor: "#fceecb",
        flex: 1,
        width: '90%',
        borderRadius: 10,
        marginBottom: 30,
       },
       listRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',

       },
       buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
       },
       item_Name: {
        flex:1,
        padding: 5,
        alignItems: 'flex-start',
        
       //  height: 44,
      },
      item_Info: {
        flex:1,
        padding: 5,
        alignItems: 'flex-start',
        
       //  height: 44,
      },

        list_button: {
        backgroundColor: 'black',
        borderRadius: 10,
        margin: 5,
        paddingLeft: 15,
        paddingRight: 15,
        
       },
       list_button_text: {
        color: 'white',
        fontSize: 18,
        padding: 5,
        
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
        padding: 9,
        //textAlign: 'center'
        //marginTop: 0,
        fontWeight: 'bold'
    },
    loginContainer: {
        flex: 0.85,
        alignItems: 'center',
        justifyContent: 'center',
    },
       item: {
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
        justifyContent: 'flex-end',
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
        borderRadius: 30, 
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
        width: 300,
        borderRadius: 30
        //flex: 1,
        //width: 300,
        //justifyContent: 'center',
        ///marginHorizontal: 16,
      },
      sideText: {
        flexDirection:"row",
        alignItems:'center'
      },
      separator: {
        height: 2,
        width: '100%',
        backgroundColor: '#000000',
    },
        item_row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        paddingVertical: 13,
        backgroundColor: '#fceecb',
        borderRadius: 100,
        height: 89,
        marginTop: 10,
        marginBottom: 10,

    },
});
