import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export let researchGuidelinesTotalTime;

export default function ResearchGuidelines({navigation}) {  
    let startingTime = performance.now();
    return (      
      <View style={styles.container}>                
        <Text style = {styles.header} >שלבי הניסוי</Text>
        <View>
          <Text style={styles.text}>תוצג עבורך התמונה ההתחלתית ממנה מתחיל הסיור, תתבקש לצלם את התמונה בהגיעך אליה ולשמוע קטע קול קצר אודותיה. </Text>
          <Text style={styles.text}>לאחר מכן, על מנת להתאים לך את התמונה בצורה הטובה ביותר, עליך לבחור מתוך מספר אפשרויות מה תרצה לראות בתמונה הבאה. </Text>
          <Text style={styles.text}>בצורה זו תמשיך לעבור בין 5 תמונות במוזיאון.</Text>
          <Text style={styles.text}>לבסוף, תתבקש לענות על מספר שאלות אודות הסיור והיצירות.</Text>                
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
    },
    text: {
      paddingTop: 20,
      paddingBottom: 20,
      margin: 20,
      paddingRight: 10,
      paddingLeft: 10,
      fontSize: 30,
      textAlign: "right"
    }
  });
  