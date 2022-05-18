import React, { useState }  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export let binaryChoices2ScreenTotalTime;

class BinaryChoices2Data {
    constructor(n) {        
        this.likings2 = new Array(n).fill(-1)
    }
}

let artPiecesNames1 = ["klimt_1.png", "vanDongen_2.png","braque_3.jpg", "pollock_4.jpg"]      
let artPieces1 = [require("../assets/images/klimt_1.png"), require("../assets/images/vanDongen_2.png"), require("../assets/images/braque_3.jpg"), require("../assets/images/pollock_4.jpg")]      
let artPiecesNames2 = ["vanDongen_2.png", "klimt_1.png","pollock_4.jpg", "braque_3.jpg"]      
let artPieces2 = [require("../assets/images/vanDongen_2.png"), require("../assets/images/klimt_1.png"), require("../assets/images/pollock_4.jpg"), require("../assets/images/braque_3.jpg")]      

export let binaryChoices2Data = new BinaryChoices2Data(artPiecesNames1.length);
export let binaryChoices2TotalTimeArray = new Array(artPiecesNames1.length).fill(0);

export default function BinaryChoices2({navigation}) {
  let startingTime = performance.now();
  

  let [artPiecesCounter, setArtPiecesCounter] = useState(0);
  return (      
    <View style={styles.container}>
     
      <Text style = {styles.header}>אנא לחצו על התמונות שאתם מעדיפים</Text>      
      
      <View style={styles.imagesView}>
        <TouchableOpacity onPress={() => 
                {
                    let finishingTime = performance.now();
                    binaryChoices2TotalTimeArray[artPiecesCounter] = ((finishingTime - startingTime) / 1000).toFixed(2);  
                    binaryChoices2Data.likings2[artPiecesCounter] = 0;                    
                    if (artPiecesCounter == artPiecesNames1.length - 1) {                        
                        navigation.navigate("ThanksForParticipating");
                    }
                    else {
                        setArtPiecesCounter(artPiecesCounter+1)
                    }
                }
            }>
            <Image
            source={artPieces1[artPiecesCounter]}
            style={styles.pieces} 
            />
        </TouchableOpacity>       

        <TouchableOpacity onPress={() => 
                {    
                    let finishingTime = performance.now();
                    binaryChoices2TotalTimeArray[artPiecesCounter] = ((finishingTime - startingTime) / 1000).toFixed(2);                              
                    binaryChoices2Data.likings2[artPiecesCounter] = 1;
                    if (artPiecesCounter == artPiecesNames1.length - 1) {                        
                        navigation.navigate("ThanksForParticipating");
                    }
                    else {
                        setArtPiecesCounter(artPiecesCounter+1)
                    }
                }
            }>
            <Image
            source={artPieces2[artPiecesCounter]}
            style={styles.pieces} 
            />
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
  
    header: {
      textDecorationLine:'underline',
      fontSize:20,
      fontWeight:"bold",
      color: "dodgerblue",            
    },

    imagesView: {
        flexDirection:"row",
        
    },

    pieces: {
        width: 400,
        height: 400,
        marginRight: 20,
        resizeMode: 'contain'
    }
  });
  