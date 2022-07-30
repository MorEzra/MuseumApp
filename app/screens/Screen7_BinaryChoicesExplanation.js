import React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { globalStyles } from '../assets/styles/global';
import { tExperimentBegin } from './Screen1_WelcomeScreen';

export let tFinishBinaryChoicesExplanation;

export default function BinaryChoicesExplanation({navigation}) {  
  return (      
    <View style={styles.container}>
     
      <Text style = {globalStyles.header}>שאלון העדפות</Text>
      <Text
      style = {
        globalStyles.instructionsText
      }
      >במסך הבא, תתבקשו לסמן העדפות של יצירות.
          אנא דרגו מ 1 עד 10 כמה אהבתם כל יצירה."
      </Text>
      <Button 
          title="המשך"
          onPress={() => {
            tFinishBinaryChoicesExplanation = performance.now() - tExperimentBegin
            navigation.navigate("BinaryChoices1_1")
          }
        }>
      </Button>          
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',    
    },
  
    header: {
      textDecorationLine:'underline',
      fontSize:50,
      fontWeight:"bold",
      color: "dodgerblue",   
      marginBottom:25, 
      textAlign:'center',                  
    },

    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',    
      },

  });
  