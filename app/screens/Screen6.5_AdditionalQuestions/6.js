import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { globalStyles } from '../../assets/styles/global';
import { debugMode } from '../Screen1_WelcomeScreen';
import Slider from '@react-native-community/slider'

export let tStartSefiQuestion6 = -1
export let tFinishSefiQuestion6 = -1
export let rateQ6 = 4;

export default function AdditionalQuestions_6({navigation}) {
    let tBegin = new Date();
    tStartSefiQuestion6 = tBegin.getHours() + ":" + tBegin.getMinutes() + ":" + tBegin.getSeconds() + ":" + tBegin.getMilliseconds();
    
    let question = "האם תרצו לבקר גם במוזיאונים אחרים על הדרכה כזו?";
    let [rating, setRating]   = useState(0);       
    let [sliderRate, setSliderRate] = useState(4);

    let ratings = [
        {label: "כלל לא רוצה",      value:1},
        {label: "לא רוצה",          value:2},
        {label: "די לא רוצה",       value:3},
        {label: "אולי כן ואולי לא", value:4},
        {label: "די רוצה",           value:5},
        {label: "רוצה",              value:6},
        {label: "מאוד רוצה",         value:7},
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
                    setRating(value);   
                    rateQ6 = value;        
                    setSliderRate(parseInt(value))
                }            
        }/>                             

        <View style={globalStyles.buttonView}>
            <TouchableOpacity 
                onPress={() =>
                        {                           
                            let tFinish = new Date();
                            tFinishSefiQuestion6 = tFinish.getHours() + ":" + tFinish.getMinutes() + ":" + tFinish.getSeconds() + ":" + tFinish.getMilliseconds();                    
                            navigation.navigate("AdditionalQuestions_7")                                                
                            setRating(0);
                        }
                    }>
                    <Text style={globalStyles.buttonText}>המשך</Text>
            </TouchableOpacity>     
        </View>
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
  