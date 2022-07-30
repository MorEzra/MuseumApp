import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { globalStyles } from '../assets/styles/global';
import { debugMode, tExperimentBegin } from './Screen1_WelcomeScreen';


export let tFinishQuestionnaireAdditionalArray = new Array(7).fill(0);
export let ratingArray = new Array(7).fill(0);

export default function SummaryQuestionnaireAdditional({navigation}) {    
    let q1 = "אנא דרג את שביעות הרצון הכללית שלך מהסיור המודרך באוסף מינזה בלומנטל ";
    let q2 = "אנא דרג/י את שביעות הרצון מן ההסברים אודות היצירות ";
    let q3 = "משך הביקור היה לטעמך ";
    let q4 = "האם תרצה/י לשמוע עוד הסברים מסוג זה על יצירות נוספות באוסף?";
    let q5 = "?האם תרצה/י לשוב ולבקר במוזיאון עם הדרכה כזו ";
    let q6 = "האם תרצה לבקר גם במוזיאונים אחרים על הדרכה כזו?";
    let q7 = "?האם תמליצ/י לחברים לבקר באוסף בליווי הדרכה קולית מסוג זה";
    
    let qArray = [q1, q2, q3, q4, q5, q6, q7];
    let [rating, setRating]   = useState(0);       
    let [counter, setCounter] = useState(0);  

    let ratings = [
        {label: "כלל לא שבע רצון",   value:1},
        {label: "לא שבע רצון",       value:2},
        {label: "די לא שבע רצון",    value:3},
        {label: "ניטרלי",            value:4},
        {label: "די שבע רצון",       value:5},
        {label: "שבע רצון",          value:6},
        {label: "מאוד שבע רצון",     value:7},
        {label: "טרם מולא",          value:0}
    ];
    let [finishQuestionnaireMessage, setFinishQuestionnaireMessage] = useState(false);

    return (      
    <View style={styles.container}>
        <ScrollView>
            <Text style = {globalStyles.header}>המשך שאלון סיכום ניסוי</Text>
            <View style={counter % 2 == 0 ? styles.evenView : styles.oddView}>            
                <Text style = {globalStyles.questionnaireHeader}>{qArray[counter]}</Text>
                <RadioButton.Group
                    onValueChange={
                        (value) => {
                            setRating(value)
                            ratingArray[counter] = value;
                        }
                    }>
                    <RadioButton.Item status={ rating === 1 ? 'checked' : 'unchecked' } label={ratings[0]['label']} value={ratings[0]['value']} style={globalStyles.radioItem} />
                    <RadioButton.Item status={ rating === 2 ? 'checked' : 'unchecked' } label={ratings[1]['label']} value={ratings[1]['value']} style={globalStyles.radioItem} />
                    <RadioButton.Item status={ rating === 3 ? 'checked' : 'unchecked' } label={ratings[2]['label']} value={ratings[2]['value']} style={globalStyles.radioItem} />
                    <RadioButton.Item status={ rating === 4 ? 'checked' : 'unchecked' } label={ratings[3]['label']} value={ratings[3]['value']} style={globalStyles.radioItem} />
                    <RadioButton.Item status={ rating === 5 ? 'checked' : 'unchecked' } label={ratings[4]['label']} value={ratings[4]['value']} style={globalStyles.radioItem} />
                    <RadioButton.Item status={ rating === 6 ? 'checked' : 'unchecked' } label={ratings[5]['label']} value={ratings[5]['value']} style={globalStyles.radioItem} />
                    <RadioButton.Item status={ rating === 7 ? 'checked' : 'unchecked' } label={ratings[6]['label']} value={ratings[6]['value']} style={globalStyles.radioItem} />
                </RadioButton.Group>
            </View>
            {
              finishQuestionnaireMessage ? (<Text style={globalStyles.completionMessage}>אנא סמן את תשובתך</Text>) : null
            } 
            <Button 
                title="המשך"
                onPress={() =>
                        {   
                            if (debugMode || rating != 0) {
                            tFinishQuestionnaireAdditionalArray[counter] = ((performance.now() - tExperimentBegin)/ 1000).toFixed(2);                
                            if (counter == qArray.length - 1) {                                                                 
                                navigation.navigate("BinaryChoicesExplanation")
                            }
                            setCounter(counter+1);
                            setRating(0);
                            setFinishQuestionnaireMessage(false);
                            }
                            else {
                                setFinishQuestionnaireMessage(true);
                            }
                        }
                    }>
            </Button>     
        </ScrollView>     
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

    radiobutton: {
        alignSelf:"flex-end"        
    },

    oddView: {
        backgroundColor:"aliceblue",      
        marginBottom:10,
        borderColor:"black",
        borderRadius:10,
        borderWidth:2
      },      

      evenView: {
        backgroundColor:"#fff",      
        marginBottom:10,
        borderRadius:10,
        borderWidth:2
      },   
  });
  