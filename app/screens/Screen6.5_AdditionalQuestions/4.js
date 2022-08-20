import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { globalStyles } from '../../assets/styles/global';
import { debugMode } from '../Screen1_WelcomeScreen';
import Slider from '@react-native-community/slider'

export let rate4 = -1;

export default function AdditionalQuestions_4({navigation}) {    
    let question = "האם תרצו לשמוע עוד הסברים מסוג זה על יצירות נוספות באוסף?";
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
                        navigation.navigate("AdditionalQuestions_5")                                                
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
  