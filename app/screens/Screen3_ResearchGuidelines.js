import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { globalStyles } from '../assets/styles/global';
import { tExperimentBegin } from './Screen1_WelcomeScreen';

export let tFinishGuidelines;

export default function ResearchGuidelines({navigation}) {  
    return (      
      <View style={globalStyles.container}>                
        <Text style = {globalStyles.header} >מהלך הסיור</Text>
        <View>
          <Text style={globalStyles.instructionsText}>תוצג עבורכם היצירה ההתחלתית ממנה מתחיל הסיור, תתבקשו לצלם את היצירה בהגיעכם אליה ולשמוע הסבר קצר אודותיה. </Text>
          <Text style={globalStyles.instructionsText}>לאחר מכן, על מנת להתאים לכם את היצירה הבאה בצורה הטובה ביותר, עליכם לבחור מתוך מספר אפשרויות מה תרצו לראות בהמשך. </Text>
          <Text style={globalStyles.instructionsText}>בצורה זו תסיירו בין 8 יצירות באוסף.</Text>
          <Text style={globalStyles.instructionsText}>לבסוף, תתבקשו לענות על מספר שאלות אודות הסיור והיצירות.</Text>                
        </View>
        <Button 
          title="הבנתי, אפשר להתחיל"
          onPress={() => {
            tFinishGuidelines = performance.now() - tExperimentBegin; 
            navigation.navigate("OverviewScreen")
            }
          }>
        </Button>

        <StatusBar style="auto" />
      </View>
    );
  }
