import React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function WelcomeScreen({navigation}) {
  return (      
    <View style={styles.container}>
     
      <Text style = {styles.header}>ניסוי העדפות במוזיאון תל אביב</Text>

      <Text>
      תודה על השתתפותך בסיור שהינו חלק ממחקר מטעם אוניברסיטת תל אביב.{"\n"}

במהלך הניסוי תתבקש לעבור בין יצירות שונות מאוסף המוזיאון ולשמוע הסברים מוקלטים אודותן מאת ד"ר ספי הנדלר מוועדת התערוכות של המוזיאון.
{"\n"} לפני ולאחר הסיור תתבקש לענות על מספר שאלות.{"\n"}

משך הניסוי כ-20 דקות ובתמורה להשתתפותך תזכה בשובר.{"\n"}

הינך חופשי לבחור שלא להשתתף במחקר ולהפסיק את השתתפותך בכל עת.{"\n"} 
כלל הנתונים מהניסוי הינם חסויים ומשמשים רק לצורך המחקר. 

הניסוי מנוסח בלשון זכר אך מיועד לשני המינים.{"\n"}{"\n"}
בלחיצה על 'המשך' הינך מסכים להשתתף בניסוי, תהנו!

      </Text>

      <Button 
          title="המשך"
          onPress={() => navigation.navigate("Questionnaire")}>
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
      fontSize:20,
      fontWeight:"bold",
      color: "lightblue",            
    },

  });
  