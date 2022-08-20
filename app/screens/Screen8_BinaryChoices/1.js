import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { artPieces } from '../../components/ArtPiece';
import { globalStyles } from '../../assets/styles/global';
import Slider from '@react-native-community/slider'
import { tExperimentBegin } from '../Screen1_WelcomeScreen';

export let tFinishBinaryChoices1Q1;
export let rate1;

export default function BinaryChoices1_1({navigation}) {    
  let [rate, setRate] = useState(3);
  rate1 = rate;
  return (      
    <View style={globalStyles.container}>
      <Text style = {globalStyles.header}>אנא דרגו כמה אהבתם את היצירה</Text>      
      <Image        
        source={artPieces[0].piece}
        style={{ width: 400, height: 600, resizeMode: 'contain' }}         
      />
      
      
      {/* <Text style={globalStyles.questionnaireHeader}>{rate}</Text> */}
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
          style = {{width:525, height:50, marginRight:20}}
          minimumValue={1}
          maximumValue={5}
          minimumTrackTintColor="green"
          maximumTrackTintColor="black"
          thumbTintColor="green"
          value={3}

          onValueChange={
            value => {             
              setRate(parseInt(value))
            }            
          }                
              
        />
      </View>
      <Button 
          title="המשך"
          onPress={() => {         
            tFinishBinaryChoices1Q1 = performance.now() - tExperimentBegin;
            navigation.navigate("BinaryChoices1_2")            
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
  