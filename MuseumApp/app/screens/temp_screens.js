import React, {useState}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function F({navigation}) {  
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    return (
      
      <View style={styles.container}>
  
        {/* ----------------------------- screen 1 ------------------------------- */}
        {/*<Text style = {styles.header}  >ניסוי העדפות במוזיאון תל אביב</Text>
        <Text>תודה על השתתפותך בסיור שהינו חלק ממחקר מטעם אוניברסיטת תל אביב.{"\n"}
    במהלך הניסוי תתבקש לעבור בין יצירות שונות מאוסף המוזיאון ולשמוע הסברים מוקלטים אודותן מאת ד"ר ספי הנדלר מוועדת התערוכות של המוזיאון. לפני ולאחר הסיור תתבקש לענות על מספר שאלות.            
  
  משך הניסוי כ-20 דקות ובתמורה להשתתפותך תזכה בשובר ****.            {"\n"}
  הינך חופשי לבחור שלא להשתתף במחקר ולהפסיק את השתתפותך בכל עת.            {"\n"}
  כלל הנתונים מהניסוי הינם חסויים ומשמשים רק לצורך המחקר.            {"\n"}
  
  הניסוי מנוסח בלשון זכר אך מיועד לשני המינים.            {"\n"}
  בלחיצה על 'המשך' הינך מסכים להשתתף בניסוי, תהנו!             
    
        </Text>*/}
        
        {/* ----------------------------- screen 1 ends ------------------------------- */}
        
        {/* ----------------------------- screen 2 ------------------------------- */}
        {/*
        <Text style={styles.header} >שלבי הניסוי</Text>
        <Text style = {styles.text} >s</Text>
        <Text>תוצג עבורך התמונה ההתחלתית ממנה מתחיל הסיור, תתבקש לצלם את התמונה בהגיעך אליה ולשמוע קטע קול קצר אודותיה. </Text>
        <Text>לאחר מכן, על מנת להתאים לך את התמונה בצורה הטובה ביותר, עליך לבחור מתוך מספר אפשרויות מה תרצה לראות בתמונה הבאה. </Text>
        <Text>בצורה זו תמשיך לעבור בין 5 תמונות במוזיאון.</Text>
        <Text>לבסוף, תתבקש לענות על מספר שאלות אודות הסיור והיצירות.</Text>
        */}
        {/* ----------------------------- screen 2 ends ------------------------------- */}
  
        {/* ----------------------------- screen 3 ------------------------------- */}
  
        <View style={styles.container}>
          <Text style = {styles.header} >שאלון פרטים אישיים</Text>
        </View> 
  
        <Text>שם מלא</Text>
        
        <TextInput
          style={styles.textInput}    
          onChangeText={(firstName) => setName(firstName)}
        />
  
        <Text>גיל</Text>
        <TextInput
          style = {styles.textInput}
          keyboardType="numeric"
          onChangeText={(age) => setName(setAge)}
        />
  
        <Text>מגדר</Text>
  
  
        <Text>כתובת</Text>
        <TextInput
          style = {styles.textInput}
        />
        
        <Text>עיסוק</Text>
  
        <TextInput
          style = {styles.textInput}
        />
        <Text>מהי תדירות הגעתך למוזיאונים</Text>
        <Text>מתי פעם אחרונה ביקרת במוזיאון</Text>
        <Text>האם ביקרת במוזיאון תל אביב בעבר?</Text>
        <Text>האם ביקרת בתערוכה זו בעבר?</Text>
        
    
    {/* ----------------------------- screen 3 end ------------------------------- */}
  
  
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
  
    textInput: {
      width: 150,
      borderColor: 'lightblue',
      borderWidth: 2,
    },
  
    header: {
      textDecorationLine:'underline',
      fontSize:20,
      fontWeight:"bold",
      color: "lightblue",  
    },
  
    text: {
      textAlign:"right",
      color:"red",    
    }
  });
  