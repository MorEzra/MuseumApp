import React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../assets/styles/global';
import { RadioButton } from 'react-native-paper';

export let welcomeScreenTotalTime;
export let active = Math.round(Math.random())
export default function WelcomeScreen({navigation}) {
  let startingTime = performance.now();
  const [checked, setChecked] = React.useState('unchecked');
  
  return (      
    <View style={globalStyles.container}>
     
      <Text style = {globalStyles.header}>ביקור באוסף מינזה בלומנטל במוזיאון תל אביב</Text>

      <Text style={globalStyles.instructionsText}>
      תודה על השתתפותך בסיור שהינו חלק ממחקר מטעם אוניברסיטת תל אביב.{"\n"}

במהלך הסיור תתבקש לעבור בין יצירות שונות מאוסף המוזיאון ולשמוע הסברים מוקלטים אודותן מאת ד"ר ספי הנדלר מוועדת התערוכות של המוזיאון.
{"\n"}לפני ולאחר הסיור תתבקש לענות על מספר שאלות.{"\n"}

משך הסיור כ-20 דקות ובתמורה להשתתפותך תזכה בשובר.{"\n"}

הינך חופשי לבחור שלא להשתתף במחקר ולהפסיק את השתתפותך בכל עת.{"\n"} 
כלל הנתונים מהשתתפותך הינם חסויים ומשמשים רק לצורך המחקר. 

ההסברים וההוראות מנוסחות בלשון זכר אך מיועדות לשני המינים.{"\n"}{"\n"}
בלחיצה על 'המשך' הינך מסכים להשתתף במחקר, תהנו!

      </Text>
      
      <RadioButton.Item
        value="unchecked"
        label="קראתי את ההוראות ואני מאשר את השתתפותי בניסוי"
        status={ checked === 'checked' ? 'checked' : 'unchecked' }
        onPress={() => {
          if (checked === 'unchecked')
           {setChecked('checked')}
          else 
           { setChecked('unchecked')}
          }
        }
      />

      <Button           
          title="המשך"
          disabled = { checked === 'checked' ? false : true }
          onPress={() => {
            let finishingTime = performance.now();
            welcomeScreenTotalTime = (finishingTime - startingTime);
            navigation.navigate("Questionnaire");
           }
          }>
      </Button>

      <StatusBar style="auto" />
    </View>
  );
}


