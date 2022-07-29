import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { artPieces } from '../../components/ArtPiece';
import { globalStyles } from '../../assets/styles/global';
import Slider from '@react-native-community/slider'
import { tExperimentBegin } from '../Screen1_WelcomeScreen';

export let tFinishBinaryChoices1Q5;

export default function BinaryChoices1_5({navigation}) {    
  let [rate, setRate] = useState(5)

  return (      
    <View style={globalStyles.container}>
      <Text style = {globalStyles.header}>אנא דרגו מ - 1 עד 10 כמה אהבתם את היצירה</Text>      
      
      <Image        
        source={artPieces[4].piece}
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
  