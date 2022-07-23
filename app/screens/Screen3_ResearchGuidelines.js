import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../assets/styles/global';

export let researchGuidelinesTotalTime;

export default function ResearchGuidelines({navigation}) {  
    let startingTime = performance.now();
    return (      
      <View style={globalStyles.container}>                
        <Text style = {globalStyles.header} >מהלך הסיור</Text>
        <View>
          <Text style={globalStyles.instructionsText}>תוצג עבורך התמונה ההתחלתית ממנה מתחיל הסיור, תתבקש לצלם את התמונה בהגיעך אליה ולשמוע הסבר קצר אודותיה. </Text>
          <Text style={globalStyles.instructionsText}>לאחר מכן, על מנת להתאים לך את התמונה הבאה בצורה הטובה ביותר, עליך לבחור מתוך מספר אפשרויות מה תרצה לראות בהמשך. </Text>
          <Text style={globalStyles.instructionsText}>בצורה זו תעבור בין 8 יצירות באוסף.</Text>
          <Text style={globalStyles.instructionsText}>לבסוף, תתבקש לענות על מספר שאלות אודות הסיור והיצירות.</Text>                
        </View>
        <Button 
          title="הבנתי, אפשר להתחיל"
          onPress={() => {
            let finishingTime = performance.now();
            researchGuidelinesTotalTime = finishingTime - startingTime;            
            navigation.navigate("OverviewScreen")
            }
          }>
        </Button>

        <StatusBar style="auto" />
      </View>
    );
  }
