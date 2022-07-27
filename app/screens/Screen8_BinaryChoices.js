import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { artPieces } from '../components/ArtPiece';
import { globalStyles } from '../assets/styles/global';
import Slider from '@react-native-community/slider'

class BinaryChoicesData {
    constructor(n) {        
        this.likings = new Array(n).fill(-1)
    }
}


export let binaryChoicesData = new BinaryChoicesData(artPieces.length);
export let binaryChoicesTotalTimeArray = new Array(artPieces.length).fill(0);

export default function BinaryChoices({navigation}) {    
  let startingTime = performance.now();
  let initialSliderValue = 5;
  let [rate, setRate] = useState(5)
  let [artPiecesCounter, setCounter] = useState(0);  

  return (      
    <View style={globalStyles.container}>
      <Text style = {globalStyles.header}>אנא דרגו מ - 1 עד 10 כמה אהבתם את היצירה</Text>      
      
      <Image        
        source={artPieces[artPiecesCounter].piece}
        style={{ width: 400, height: 600, resizeMode: 'contain' }}         
      />
      
      
      <Text style={globalStyles.questionnaireHeader}>{rate}</Text>
      <View style = {{
        flexDirection:"row",
        
      }}>
        <Text style={{fontWeight:"bold", fontSize:20, marginRight:20}}>בכלל לא אהבתי</Text>

        <Slider
          style = {{width:330, height:40, marginRight:20}}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor="green"
          maximumTrackTintColor="black"
          thumbTintColor="green"
          value={5}
          onValueChange={
            value => setRate(parseInt(value))            
          }                
              
        />
      <Text style={{fontWeight:"bold", fontSize:20, marginRight:20}}>מאוד אהבתי</Text>
      
      </View>
      <Button 
          title="המשך"
          onPress={() => {
            let finishingTime = performance.now();
            binaryChoicesTotalTimeArray[artPiecesCounter] = finishingTime - startingTime; //TODO: fix this..
            setCounter(Math.min(7, artPiecesCounter+1));
            setRate(5);
            if (artPiecesCounter == 7) {
              navigation.navigate("BinaryChoices2")
            }
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
  