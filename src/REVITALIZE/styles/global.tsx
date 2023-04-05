// Importing necessary components and styles from react-native and react-native-redash libraries
import { StyleSheet, Text, View } from 'react-native';
import { blue } from 'react-native-redash';

//Author: All Team Members
//Date: October 25th, 2022
//Summary: This file is used to style common UI elements used in the front end via CSS.

// Creating global styles object using StyleSheet.create
export const globalStyles = StyleSheet.create({

    // Style for container
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    // Style for date container
    date_container: {
      width:'100%',
      backgroundColor: '#000000',
      height: 100,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },

    // Style for title text
    titleText: {
        fontFamily: `Arial`,
        fontSize: 18,
        color: '#333',
    },

    // Style for paragraph
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },

    // Style for app button container
    appButtonContainer: {
        elevation: 8,
        backgroundColor: '#000000' ,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 50,
        marginBottom: 20,
        marginTop: 20
    },

    // Style for main page title
    MainPage_Title: {
      fontWeight: 'bold',
      fontSize: 24,
      textAlign: 'center',
      width: '100%',    
      marginTop: 50,
      marginBottom: 10,
    },

    // Style for main page subtitle
    MainPage_Subtitle: {
      fontWeight: '600',
      fontSize: 16,
      textAlign: 'center',
      width: '100%',    
    },

    // Style for diet page subtitle
    DietPage_Subtitle: {
      fontWeight: '600',
      fontSize: 16,
      textAlign: 'left',
      width: '100%',    
    },

    // Style for list title
    listTitle: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      textDecorationLine: 'underline',
      marginBottom: 10,
    },

    // Style for app diet button container
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

    // Style for app diet button container 2
    appDietButtonContainer2: {
      elevation: 8,
      backgroundColor: "#fceecb",
      borderRadius: 100,
      paddingVertical: 20,
      paddingHorizontal: 50,
      marginBottom: 50,
      width: 300,
      
    },

    // Style for app diet button container 3
    appDietButtonContainer3: {
      elevation: 8,
      backgroundColor: "#fceecb",
      borderRadius: 100,
      paddingVertical: 20,
      paddingHorizontal: 20,
      marginBottom: 20,
      width: 300,
      
    },

    // Style for app exercise button container
    appExerciseButtonContainer: {
        elevation: 8,
        backgroundColor: "#f9cedf",
        borderRadius: 0,
        paddingVertical: 50,
        paddingHorizontal: 50,
        marginBottom: 10,
        width: 390,
    },

    // Style for app sleep button container
    appSleepButtonContainer: {
      elevation: 8,
      backgroundColor: "#1e90ff",
      borderRadius: 0,
      paddingVertical: 50,
      paddingHorizontal: 50,
      marginBottom: 0,
      width: 390,
    },
      // Style for confirm sleep button
    confirmSleepButton: {
        elevation: 8,
        backgroundColor: "black",
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 50,
        marginBottom: 10,
    },

    // Style for update sleep button
    updateSleepButton: {
      elevation: 8,
      backgroundColor: "black",
      borderRadius: 20,
      paddingVertical: 5,
      paddingHorizontal: 50,
      marginBottom: 25,
  },

    // Style for app button text
    appButtonText: {
        fontFamily: `Arial`,
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    },

    // Style for app main screen text
    appMainScreenText: {
      fontFamily: `Arial`,
      fontSize: 18,
      color: "#000000",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
  },

    // Style for top center container
    topCenterContainer: {
        alignSelf: 'center',
        backgroundColor: "#000000",
    },

    // Style for top right container
    topRightContainer: {
      alignSelf: 'flex-end',
      backgroundColor: "#000000",
      
    },

    // Style for top left container
    topLeftContainer: {
      alignSelf: 'flex-start',
      backgroundColor: "#000000",
    },

    // Style for list container
    listContainer: {
        backgroundColor: "#fceecb",
        flex: 1,
        marginTop: 10,
        width: '90%',
        borderRadius: 15,
       },

    // Style for list container 2
       listContainer2: {
        backgroundColor: "#fceecb",
        flex: 1,
        width: '90%',
        borderRadius: 10,
        marginBottom: 30,
       },

    // Style for list row container
       listRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',

       },

    // Style for buttons container
       buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
       },

    // Style for item name
       item_Name: {
        flex:1,
        padding: 5,
        alignItems: 'flex-start',
        
       //  height: 44,
      },

    // Style for item info
      item_Info: {
        flex:1,
        padding: 5,
        alignItems: 'flex-start',
        
       //  height: 44,
      },

    // Style for list button
        list_button: {
        backgroundColor: 'black',
        borderRadius: 10,
        margin: 5,
        paddingLeft: 15,
        paddingRight: 15,
        
       },

    // Style for list button text
       list_button_text: {
        color: 'white',
        fontSize: 18,
        padding: 5,
        
       },

    // Style for welcome back text
    welcomeBack: {
        //top: 300,
        fontSize: 25,
        padding: 15,
        //textAlign: 'center'
        marginTop: 60,
    },

    // Style for sleep text
    sleepText: {
        //top: 300,
        fontSize: 19,
        padding: 9,
        //textAlign: 'center'
        //marginTop: 0,
        fontWeight: 'bold'
    },

    // Style for login container
    loginContainer: {
        flex: 0.85,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Style for item
    item: {
      fontSize: 18,
     //  height: 44,
    },

 // Style for bottom padding
    bottomPadding: {
     paddingBottom: 40,
     fontSize: 15,
     marginBottom: 15
   },

 // Style for forgot password text
   forgotPassword: {
     //color: '#87C1FF',
     color: '#0064FF',
     paddingBottom: 40,
     fontSize: 15,
     marginBottom: 15
   },

 // Style for list button container
    listButtonContainer: {
     flex: 1,
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'flex-end',
 },

 // Style for list header
 listHeader: {
     paddingTop: 2,
     paddingLeft: 10,
     paddingRight: 10,
     paddingBottom: 2,
     fontSize: 14,
     fontWeight: 'bold',
     backgroundColor: 'rgba(247,247,247,1.0)',
   },

 // Style for input
 input: {
     height: 40,
     margin: 12,
     borderWidth: 1,
     padding: 10,
   },

 // Style for login input
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

 // Style for login button
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

 // Style for side text
   sideText: {
     flexDirection:"row",
     alignItems:'center'
   },

 // Style for separator
   separator: {
     height: 2,
     width: '100%',
     backgroundColor: '#000000',
 },

 // Style for item row
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
