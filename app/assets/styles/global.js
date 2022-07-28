import {StyleSheet} from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',    
      },
    questionnaireContainer: {
      flex: 1,
      backgroundColor: '#fff'  
    },
      header: {
        fontSize:50,
        fontWeight:"bold",
        color: "darkblue", 
        alignSelf: "center",             
        marginBottom:20,
        textAlign: 'center',
        fontFamily: "Greta,GretaLangs,serif"      
      },

     questionnaireHeader: {
      fontWeight:"bold",
      alignSelf: "center",
      fontSize:20,
      marginBottom:20,
      textAlign: 'right'
    },

    instructionsText: {
      paddingBottom: 20,
      margin: 20,
      paddingRight: 10,
      paddingLeft: 10,
      fontSize: 30,
      textAlign: "right"
    },

    radioItem: {
        direction:"rtl",
        alignSelf: 'flex-end'
    },    
});