import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export let researchGuidelinesTotalTime;

export default function ResearchGuidelines({navigation}) {  
    let startingTime = performance.now();
    return (      
      <View style={styles.container}>                
        <Text style = {styles.header} >שלבי הניסוי</Text>
        <View style={styles.text}>
          <Text>תוצג עבורך התמונה ההתחלתית ממנה מתחיל הסיור, תתבקש לצלם את התמונה בהגיעך אליה ולשמוע קטע קול קצר אודותיה. </Text>
          <Text>לאחר מכן, על מנת להתאים לך את התמונה בצורה הטובה ביותר, עליך לבחור מתוך מספר אפשרויות מה תרצה לראות בתמונה הבאה. </Text>
          <Text>בצורה זו תמשיך לעבור בין 5 תמונות במוזיאון.</Text>
          <Text>לבסוף, תתבקש לענות על מספר שאלות אודות הסיור והיצירות.</Text>                
        </View>
        <Button 
          title="הבנתי, אפשר להתחיל"
          onPress={() => {
            let finishingTime = performance.now();
            researchGuidelinesTotalTime = finishingTime - startingTime;
            navigation.navigate("ArtPieces")
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
      fontSize:20,
      fontWeight:"bold",
      color: "dodgerblue",  
    },

  });
  