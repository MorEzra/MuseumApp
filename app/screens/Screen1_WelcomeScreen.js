import React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../assets/styles/global';

export let welcomeScreenTotalTime;
export let active = Math.round(Math.random())
export default function WelcomeScreen({navigation}) {
  let startingTime = performance.now();
  
  return (      
    <View style={globalStyles.container}>
     
      <Text style = {globalStyles.header}>ניסוי העדפות במוזיאון תל אביב</Text>

      <Text style={globalStyles.instructionsText}>
      תודה על השתתפותך בסיור שהינו חלק ממחקר מטעם אוניברסיטת תל אביב.{"\n"}

במהלך הניסוי תתבקש לעבור בין יצירות שונות מאוסף המוזיאון ולשמוע הסברים מוקלטים אודותן מאת ד"ר ספי הנדלר מוועדת התערוכות של המוזיאון.
{"\n"}לפני ולאחר הסיור תתבקש לענות על מספר שאלות.{"\n"}

משך הניסוי כ-20 דקות ובתמורה להשתתפותך תזכה בשובר.{"\n"}

הינך חופשי לבחור שלא להשתתף במחקר ולהפסיק את השתתפותך בכל עת.{"\n"} 
כלל הנתונים מהניסוי הינם חסויים ומשמשים רק לצורך המחקר. 

הניסוי מנוסח בלשון זכר אך מיועד לשני המינים.{"\n"}{"\n"}
בלחיצה על 'המשך' הינך מסכים להשתתף בניסוי, תהנו!

      </Text>

      <Button           
          title="המשך"
          onPress={() => {
            let finishingTime = performance.now();
            welcomeScreenTotalTime = (finishingTime - startingTime);
            navigation.navigate("BinaryChoices2");
           }
          }>
      </Button>

      <StatusBar style="auto" />
    </View>
  );
}


