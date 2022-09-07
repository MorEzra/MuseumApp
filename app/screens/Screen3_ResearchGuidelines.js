import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../assets/styles/global';


export let tBeginGuidelines = -1;
export let tFinishGuidelines = -1;

export default function ResearchGuidelines({navigation}) {  
    let tBeginTimer = new Date();
    tBeginGuidelines = tBeginTimer.getHours() + ":" + tBeginTimer.getMinutes() + ":" + tBeginTimer.getSeconds() + ":" + tBeginTimer.getMilliseconds();
    return (      
      <View style={globalStyles.container}>                
        <Text style = {globalStyles.header} >מהלך הסיור</Text>
        <View>
          <Text style={globalStyles.instructionsText}>תוצג עבורכם היצירה ההתחלתית ממנה מתחיל הסיור, תתבקשו לצלם את היצירה בהגיעכם אליה ולשמוע הסבר קצר אודותיה. </Text>
          <Text style={globalStyles.instructionsText}>לאחר מכן, על מנת להתאים לכם את היצירה הבאה בצורה הטובה ביותר, עליכם לבחור מתוך מספר אפשרויות מה תרצו לראות בהמשך. </Text>
          <Text style={globalStyles.instructionsText}>בצורה זו תסיירו בין 8 יצירות באוסף.</Text>
          <Text style={globalStyles.instructionsText}>לבסוף, תתבקשו לענות על מספר שאלות אודות הסיור והיצירות.</Text>                
        </View>

        <View style={[globalStyles.buttonView, {width:230}]}>
          <TouchableOpacity 
            title="הבנתי, אפשר להתחיל"
            onPress={() => {
              let finishTimer = new Date();
              tFinishGuidelines = finishTimer.getHours() + ":" + finishTimer.getMinutes() + ":" + finishTimer.getSeconds() + ":" + finishTimer.getMilliseconds();
              navigation.navigate("OverviewScreen")
              }
            }>
              <Text style={globalStyles.buttonText}>הבנתי, אפשר להתחיל</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </View>
    );
  }
