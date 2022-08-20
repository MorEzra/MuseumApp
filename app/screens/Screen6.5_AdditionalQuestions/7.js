import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { globalStyles } from '../../assets/styles/global';
import { debugMode } from '../Screen1_WelcomeScreen';
import Slider from '@react-native-community/slider'

export let rate7 = -1;

export default function AdditionalQuestions_7({navigation}) {    
    let question = "?האם תמליצו לחברים לבקר באוסף בליווי הדרכה קולית מסוג זה";
    let [rating, setRating]   = useState(0);       
    let [sliderRate, setSliderRate] = useState(4);

    let ratings = [
        {label: "כלל לא אמליץ",     value:1},
        {label: "לא אמליץ",         value:2},
        {label: "כנראה שאמליץ",     value:3},
        {label: "אולי כן ואולי לא", value:4},
        {label: "די אמליץ",         value:5},
        {label: "אמליץ",             value:6},
        {label: "אמליץ בחום",        value:7},
        {label: "טרם מולא",          value:0}
    ];

    return (      
    <View style={styles.container}>
        <Text style = {globalStyles.header}>שאלון סיכום ניסוי</Text>
        <Text style = {globalStyles.questionnaireHeader}>{question}</Text>
        
        <View style ={{flexDirection:"row", alignSelf:"center"}}>
            <View style={{width:75}}><Text style={{fontWeight:"bold", marginRight:5, textAlign:"center"}}>{ratings[0].label}</Text></View>
            <View style={{width:75}}><Text style={{fontWeight:"bold", marginRight:5, textAlign:"center"}}>{ratings[1].label}</Text></View>
            <View style={{width:75}}><Text style={{fontWeight:"bold", marginRight:5, textAlign:"center"}}>{ratings[2].label}</Text></View>
            <View style={{width:75}}><Text style={{fontWeight:"bold", marginRight:5, textAlign:"center"}}>{ratings[3].label}</Text></View>
            <View style={{width:75}}><Text style={{fontWeight:"bold", marginRight:5, textAlign:"center"}}>{ratings[4].label}</Text></View>
            <View style={{width:75}}><Text style={{fontWeight:"bold", marginRight:5, textAlign:"center"}}>{ratings[5].label}</Text></View>
            <View style={{width:75}}><Text style={{fontWeight:"bold", marginRight:5, textAlign:"center"}}>{ratings[6].label}</Text></View>
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
                setSliderRate(parseInt(value))
                }            
        }/>                             

        {
            debugMode ? (
                <Text>{sliderRate}</Text>
            ) : null            
        }

        <Button 
            title="המשך"
            onPress={() =>
                    {   
                        if (debugMode || rating != 0) {
                        navigation.navigate("BinaryChoicesExplanation")                                                
                        setRating(0);
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
  