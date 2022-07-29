import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { globalStyles } from '../assets/styles/global';
import { researchTimerBegin } from './Screen1_WelcomeScreen';

export let tFinishGuidelines;

export default function ResearchGuidelines({navigation}) {  
    let startingTime = performance.now();
    return (      
      <View style={globalStyles.container}>                
        <Text style = {globalStyles.header} >מהלך הסיור</Text>
        <View>
          <Text style={globalStyles.instructionsText}>תוצג עבורך היצירה ההתחלתית ממנה מתחיל הסיור, תתבקש לצלם את היצירה בהגיעך אליה ולשמוע הסבר קצר אודותיה. </Text>
          <Text style={globalStyles.instructionsText}>לאחר מכן, על מנת להתאים לך את היצירה הבאה בצורה הטובה ביותר, עליך לבחור מתוך מספר אפשרויות מה תרצה לראות בהמשך. </Text>
          <Text style={globalStyles.instructionsText}>בצורה זו תסייר בין 8 יצירות באוסף.</Text>
          <Text style={globalStyles.instructionsText}>לבסוף, תתבקש לענות על מספר שאלות אודות הסיור והיצירות.</Text>                
        </View>
        <Button 
          title="הבנתי, אפשר להתחיל"
          onPress={() => {
            let finishingTime = performance.now();
            tFinishGuidelines = finishingTime - startingTime;            
            navigation.navigate("OverviewScreen")
            }
          }>
        </Button>

        <StatusBar style="auto" />
      </View>
    );
  }
