import React, {useState}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Questionnaire({navigation}) {  
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    return (      
      <View style={styles.container}>  
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
  