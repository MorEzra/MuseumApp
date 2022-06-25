import React, { useState }  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../assets/styles/global';

export let binaryChoices2ScreenTotalTime;

class BinaryChoices2Data {
    constructor(n) {        
        this.likings2 = new Array(n).fill(-1)
    }
}


let pair1 = [];
let pair2 = [];
for (let i=1; i<=15; i++) {  
  pair1.push(require("../assets/images/pairs/" + i +"/1.png"));
  pair2.push(require("../assets/images/pairs/" + i +"/2.png"));
}

export let binaryChoices2Data = new BinaryChoices2Data(pair1.length);
export let binaryChoices2TotalTimeArray = new Array(pair1.length).fill(0);

export default function BinaryChoices2({navigation}) {
  let startingTime = performance.now();  

  let [artPiecesCounter, setArtPiecesCounter] = useState(0);
  return (      
    <View style={globalStyles.container}>
     
      <Text style = {globalStyles.header}>אנא לחצו על התמונות שאתם מעדיפים</Text>            
      <View style={styles.imagesView}>
        <TouchableOpacity onPress={() => 
                {
                    let finishingTime = performance.now();
                    binaryChoices2TotalTimeArray[artPiecesCounter] = ((finishingTime - startingTime) / 1000).toFixed(2);  
                    binaryChoices2Data.likings2[artPiecesCounter] = 0;                    
                    if (artPiecesCounter == pair1.length - 1) {                        
                        navigation.navigate("ThanksForParticipating");
                    }
                    else {
                        setArtPiecesCounter(artPiecesCounter+1)
                    }
                }
            }>
            <Image
            source={pair1[artPiecesCounter]}
            style={styles.pieces} 
            />
        </TouchableOpacity>       

        <TouchableOpacity onPress={() => 
                {    
                    let finishingTime = performance.now();
                    binaryChoices2TotalTimeArray[artPiecesCounter] = ((finishingTime - startingTime) / 1000).toFixed(2);                              
                    binaryChoices2Data.likings2[artPiecesCounter] = 1;
                    if (artPiecesCounter == pair1.length - 1) {                        
                        navigation.navigate("ThanksForParticipating");
                    }
                    else {
                        setArtPiecesCounter(artPiecesCounter+1)
                    }
                }
            }>
            <Image
            source={pair2[artPiecesCounter]}
            style={styles.pieces} 
            />
        </TouchableOpacity>       

      </View>         
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
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
  