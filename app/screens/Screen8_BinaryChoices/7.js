import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { artPieces } from '../../components/ArtPiece';
import { globalStyles } from '../../assets/styles/global';
import Slider from '@react-native-community/slider'
import { tExperimentBegin } from '../Screen1_WelcomeScreen';

export let tFinishBinaryChoices1Q7;
export let rate7;

export default function BinaryChoices1_7({navigation}) {    
  let [rate, setRate] = useState(3);
  let [colors, setColors] = useState(["black", "black", "black", "black", "black",]);
  let [sizes, setSizes]  = useState([15, 15, 15, 15, 15]);
  rate7 = rate;

  return (      
    <View style={globalStyles.container}>
      <Text style = {globalStyles.header}>אנא דרגו מ - 1 עד 10 כמה אהבתם את היצירה</Text>      
      
      <Image        
        source={artPieces[6].piece}
        style={{ width: 400, height: 600, resizeMode: 'contain' }}         
      />
      
      
      <View style= {{flexDirection:"row"}}>
      <View style={{width:100}}><Text style={{fontWeight:"bold", fontSize:sizes[0], marginRight:5, color:colors[0]}}>   לא אהבתי</Text></View>
      <View style={{width:100}}><Text style={{fontWeight:"bold", fontSize:sizes[1], marginRight:5, color:colors[1]}}>  בכלל לא אהבתי</Text></View>
      <View style={{width:100}}><Text style={{fontWeight:"bold", fontSize:sizes[2], marginRight:5, color:colors[2]}}>ניטרלי</Text></View>
      <View style={{width:100}}><Text style={{fontWeight:"bold", fontSize:sizes[3], marginRight:5, color:colors[3]}}>אהבתי</Text></View>
      <View style={{width:100}}><Text style={{fontWeight:"bold", fontSize:sizes[4], marginRight:5, color:colors[4]}}>מאוד אהבתי</Text></View>
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
              let newColors = ["black", "black", "black", "black", "black"];
              newColors[parseInt(value-1)] = "green";
              setColors(newColors)

              let newSizes = [15, 15, 15, 15, 15];
              newSizes[parseInt(value-1)] = 17;
              setSizes(newSizes)
              setRate(parseInt(value))
            }            
          }                                   
        />
      
      </View>
      <Button 
          title="המשך"
          onPress={() => {              
            tFinishBinaryChoices1Q7 = performance.now() - tExperimentBegin;               
            navigation.navigate("BinaryChoices1_8")            
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
  