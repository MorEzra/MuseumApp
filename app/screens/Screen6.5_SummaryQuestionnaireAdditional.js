import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { globalStyles } from '../assets/styles/global';
import { debugMode, tExperimentBegin } from './Screen1_WelcomeScreen';
import Slider from '@react-native-community/slider'

export let tFinishQuestionnaireAdditionalArray = new Array(7).fill(0);
export let ratingArray = new Array(7).fill(0);

export default function SummaryQuestionnaireAdditional({navigation}) {    
    let q1 = "אנא דרגו את שביעות הרצון הכללית שלכם מהסיור המודרך באוסף מינזה בלומנטל ";
    let q2 = "אנא דרגו את שביעות הרצון מן ההסברים אודות היצירות ";
    let q3 = "משך הביקור היה לטעמכם ";
    let q4 = "האם תרצו לשמוע עוד הסברים מסוג זה על יצירות נוספות באוסף?";
    let q5 = "?האם תרצו לשוב ולבקר במוזיאון עם הדרכה כזו ";
    let q6 = "האם תרצו לבקר גם במוזיאונים אחרים על הדרכה כזו?";
    let q7 = "?האם תמליצו לחברים לבקר באוסף בליווי הדרכה קולית מסוג זה";
    
    let qArray = [q1, q2, q3, q4, q5, q6, q7];
    let [rating, setRating]   = useState(0);       
    let [counter, setCounter] = useState(0);  
    let [rate, setRate] = useState(4);

    let ratings = [
        {label: "כלל לא שבע/ת רצון",   value:1},
        {label: "לא שבע/ת רצון",       value:2},
        {label: "די לא שבע/ת רצון",    value:3},
        {label: "ניטרלי",              value:4},
        {label: "די שבע/ת רצון",       value:5},
        {label: "שבע/ת רצון",          value:6},
        {label: "מאוד שבע/ת רצון",     value:7},
        {label: "טרם מולא",            value:0}
    ];
    let [finishQuestionnaireMessage, setFinishQuestionnaireMessage] = useState(false);

    return (      
    <View style={styles.container}>
        <Text style = {globalStyles.header}>שאלון סיכום ניסוי</Text>
        <Text style = {globalStyles.questionnaireHeader}>{qArray[counter]}</Text>
        
        <View style ={{flexDirection:"row", alignSelf:"center"}}>
            <View style={{width:75}}><Text style={{fontWeight:"bold", marginRight:5, size:10, textAlign:"right"}}>{ratings[0].label}</Text></View>
            <View style={{width:75}}><Text style={{fontWeight:"bold", marginRight:5, textAlign:"right"}}>{ratings[1].label}</Text></View>
            <View style={{width:75}}><Text style={{fontWeight:"bold", marginRight:5, textAlign:"right"}}>{ratings[2].label}</Text></View>
            <View style={{width:75}}><Text style={{fontWeight:"bold", marginRight:5, textAlign:"right"}}>{ratings[3].label}</Text></View>
            <View style={{width:75}}><Text style={{fontWeight:"bold", marginRight:5, textAlign:"right"}}>{ratings[4].label}</Text></View>
            <View style={{width:75}}><Text style={{fontWeight:"bold", marginRight:5, textAlign:"right"}}>{ratings[5].label}</Text></View>
            <View style={{width:75}}><Text style={{fontWeight:"bold", marginRight:5, textAlign:"right"}}>{ratings[6].label}</Text></View>
        </View>
        
        
        <Slider
            style = {{width:525, height:50, alignSelf:"center"}}
            minimumValue={1}
            maximumValue={7}
            minimumTrackTintColor="green"
            maximumTrackTintColor="black"
            thumbTintColor="green"
            value={4}

            onValueChange={
                value => {             
                setRate(parseInt(value))
                }            
        }/>            
        {
            finishQuestionnaireMessage ? (<Text style={globalStyles.completionMessage}>אנא סמן את תשובתך</Text>) : null
        } 
        <Text>{rate}</Text>
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
  