import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../assets/styles/global';

export let researchGuidelinesTotalTime;

export default function ResearchGuidelines({navigation}) {  
    let startingTime = performance.now();
    return (      
      <View style={globalStyles.container}>                
        <Text style = {globalStyles.header} >שלבי הניסוי</Text>
        <View>
          <Text style={globalStyles.instructionsText}>תוצג עבורך התמונה ההתחלתית ממנה מתחיל הסיור, תתבקש לצלם את התמונה בהגיעך אליה ולשמוע קטע קול קצר אודותיה. </Text>
          <Text style={globalStyles.instructionsText}>לאחר מכן, על מנת להתאים לך את התמונה בצורה הטובה ביותר, עליך לבחור מתוך מספר אפשרויות מה תרצה לראות בתמונה הבאה. </Text>
          <Text style={globalStyles.instructionsText}>בצורה זו תמשיך לעבור בין 8 תמונות במוזיאון.</Text>
          <Text style={globalStyles.instructionsText}>לבסוף, תתבקש לענות על מספר שאלות אודות הסיור והיצירות.</Text>                
        </View>
        <Button 
          title="הבנתי, אפשר להתחיל"
          onPress={() => {
            let finishingTime = performance.now();
            researchGuidelinesTotalTime = finishingTime - startingTime;            
            navigation.navigate("ArrivalInstructions")
            }
          }>
        </Button>

        <StatusBar style="auto" />
      </View>
    );
  }
