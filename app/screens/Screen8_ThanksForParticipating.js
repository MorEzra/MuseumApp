import React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { questionnaireData }        from './Screen2_Questionnaire';
import { summaryQuestionnaireData } from './Screen5_SummaryQuestionnaire';
import { binaryChoicesData } from './Screen7_BinaryChoices';


export default function ThanksForParticipating({navigation}) {
  return (      
    <View style={styles.container}>           
      <Text style = {styles.header}>תודה על השתתפותך!</Text>
      <Text>אנא החזירו את האייפד לכניסה, שם תקבלו את שובר המתנה</Text>

      {/* yonatan - these jsons we need to send to server*/}
      <Text>{JSON.stringify(questionnaireData)}</Text>
      <Text>{JSON.stringify(summaryQuestionnaireData)}</Text>
      <Text>{JSON.stringify(binaryChoicesData)}</Text>
      
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
      fontSize:20,
      fontWeight:"bold",
      color: "lightblue",  
    },     
  });
  