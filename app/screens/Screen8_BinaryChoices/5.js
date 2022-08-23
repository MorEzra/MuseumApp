import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { artPieces } from '../../components/ArtPiece';
import { globalStyles } from '../../assets/styles/global';
import Slider from '@react-native-community/slider'

export let tBeginBinaryChoicesV1Q5  = -1;
export let tFinishBinaryChoicesV1Q5 = -1;

export let rate5;

export default function BinaryChoices1_5({navigation}) {    
  let tBeginTimer = new Date();
  tBeginBinaryChoicesV1Q5 = tBeginTimer.getHours() + ":" + tBeginTimer.getMinutes() + ":" + tBeginTimer.getSeconds() + ":" + tBeginTimer.getMilliseconds();

  let [rate, setRate] = useState(3);

  return (      
    <View style={globalStyles.container}>
      <Text style = {globalStyles.header}>אנא דרגו כמה אהבתם את היצירה</Text>      
      
      <Image        
        source={artPieces[4].piece}
        style={{ width: 400, height: 600, resizeMode: 'contain' }}         
      />
      
      <View style= {{flexDirection:"row"}}>
        <View style={{width:75}}><Text style={{fontWeight:"bold", marginRight:5, textAlign:"center"}}>לא אהבתי</Text></View>
        <View style={{width:75}}><Text style={{fontWeight:"bold", marginRight:5, textAlign:"center"}}>בכלל לא אהבתי</Text></View>
        <View style={{width:75}}><Text style={{fontWeight:"bold", marginRight:5, textAlign:"center"}}>די לא אהבתי</Text></View>
        <View style={{width:75}}><Text style={{fontWeight:"bold", marginRight:5, textAlign:"center"}}>ניטרלי</Text></View>
        <View style={{width:75}}><Text style={{fontWeight:"bold", marginRight:5, textAlign:"center"}}>די אהבתי</Text></View>
        <View style={{width:75}}><Text style={{fontWeight:"bold", marginRight:5, textAlign:"center"}}>אהבתי</Text></View>
        <View style={{width:75}}><Text style={{fontWeight:"bold", marginRight:5, textAlign:"center"}}>מאוד אהבתי</Text></View>
      </View>

      <View style = {{
        flexDirection:"row",
        
      }}>

        <Slider
          style = {{width:525, height:40, marginRight:20}}
          minimumValue={1}
          maximumValue={5}
          minimumTrackTintColor="green"
          maximumTrackTintColor="black"
          thumbTintColor="green"
          value={3}
          onValueChange={
            value => {
              rate5 = value;
              setRate(parseInt(value))
            }            
          }                     
              
        />
      
      </View>
      <Button 
          title="המשך"
          onPress={() => {     
            let finishTimer = new Date();
            tFinishBinaryChoicesV1Q5 = finishTimer.getHours() + ":" + finishTimer.getMinutes() + ":" + finishTimer.getSeconds() + ":" + finishTimer.getMilliseconds();
            navigation.navigate("BinaryChoices1_6")            
          }
        }>
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row",
    },    
  });
  