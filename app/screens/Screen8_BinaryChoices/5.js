import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { artPieces } from '../../components/ArtPiece';
import { globalStyles } from '../../assets/styles/global';
import Slider from '@react-native-community/slider'
import { tExperimentBegin } from '../Screen1_WelcomeScreen';

export let tFinishBinaryChoices1Q5;
export let rate5;

export default function BinaryChoices1_5({navigation}) {    
  let [rate, setRate] = useState(3);
  rate5 = rate;
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
          style = {{width:330, height:40, marginRight:20}}
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
            tFinishBinaryChoices1Q5 = performance.now() - tExperimentBegin;       
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
  