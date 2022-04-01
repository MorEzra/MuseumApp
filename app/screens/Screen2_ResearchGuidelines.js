import React, {useState}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ResearchGuidelines({navigation}) {  
    return (      
      <View style={styles.container}>        
        
        <Text style={styles.header} >שלבי הניסוי</Text>
        <Text style = {styles.text} >במסך הבא עליך למלא את פרטיך ולענות על מספר שאלות.</Text>
        <Text>תוצג עבורך התמונה ההתחלתית ממנה מתחיל הסיור, תתבקש לצלם את התמונה בהגיעך אליה ולשמוע קטע קול קצר אודותיה. </Text>
        <Text>לאחר מכן, על מנת להתאים לך את התמונה בצורה הטובה ביותר, עליך לבחור מתוך מספר אפשרויות מה תרצה לראות בתמונה הבאה. </Text>
        <Text>בצורה זו תמשיך לעבור בין 5 תמונות במוזיאון.</Text>
        <Text>לבסוף, תתבקש לענות על מספר שאלות אודות הסיור והיצירות.</Text>                

        <Button 
          title="הבנתי, אפשר להתחיל"
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
  });
  