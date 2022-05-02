import React, {useState}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity} from 'react-native';

import AudioPlayer from '../components/AudioPlayer';

export default function ArtPieces({navigation}) {
  let instructionsTexts = ["------------------------------------------------הוראות1------------------------------------------------",
                           "------------------------------------------------הוראות2------------------------------------------------",
                           "------------------------------------------------הוראות3------------------------------------------------",
                           "------------------------------------------------הוראות4------------------------------------------------",
  ] 

  let artPiecesNames = ["pic1.png", "pic2.png","pic3.jpg", "pic4.jpg"]   
  let artPieces = [
    require("../assets/images/pic1.png"),
    require("../assets/images/pic2.png"),
    require("../assets/images/pic3.jpg"),
    require("../assets/images/pic4.jpg")
  ]

  let [artPiecesCounter, setCounter] = useState(0);  
  let active = false; // passive vs active group. should be random - set to true for debugging purposes
  return (      
    <View style={styles.container}>
      <ScrollView>
        <Text style = {styles.header}>יצירה {artPiecesCounter + 1}</Text>
        {/* ------------------------------------------------ instructions ------------------------------------------------ */}
        <Text style={styles.text}>הוראות הגעה:</Text>
        <Text>{instructionsTexts[artPiecesCounter]}</Text>

        {/* ------------------------------------------------ camera ------------------------------------------------ */}
        <Text>בהגיעך אל התמונה, אנא צלם אותה</Text>
        <Button 
            title="open camera"
            onPress={() => navigation.navigate("CameraScreen")}>
        </Button>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/camera.png")}
            style={{ width: 100, height: 100 }} 
          />
        </TouchableOpacity>
        {/* ------------------------------------------------ audio ------------------------------------------------ */}
        
        

        {/* ------------------------------------------------ art piece ------------------------------------------------ */}
        <Image        
          source={artPieces[artPiecesCounter]}
          style={{ width: 400, height: 400}} 
        />

        {/* ------------------------------------------------ audio ------------------------------------------------ */}
        <AudioPlayer />      
        
        <Button 
            title="המשך"
            onPress={() => {
              // this if statement belongs in ArtPieceChoices. here due to a bug in counter increment in ArPiecesChoices            
              if (artPiecesCounter == artPiecesNames.length - 1) 
                navigation.navigate("SummaryQuestionnaire");
              else {              
                setCounter(artPiecesCounter+1);            
                if (active) {
                  navigation.navigate("ArtPiecesChoices");            
                }
              }
            }}>
        </Button>

        <StatusBar style="auto" />
      </ScrollView>
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
  
    header: {
      textDecorationLine:'underline',
      fontSize:20,
      fontWeight:"bold",
      color: "dodgerblue",            
    },

    text: {
        fontWeight:'bold',
        fontSize:15,
        textDecorationLine: 'underline',
    },

    attributes: {
        backgroundColor:"orange",
        fontSize:20,
        marginTop:20,
    },
  });
  