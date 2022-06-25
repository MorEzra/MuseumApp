import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image} from 'react-native';
import { artPieces } from '../components/ArtPiece';
import { globalStyles } from '../assets/styles/global';


class BinaryChoicesData {
    constructor(n) {        
        this.likings = new Array(n).fill(-1)
    }
}


export let binaryChoicesData = new BinaryChoicesData(artPieces.length);
export let binaryChoicesTotalTimeArray = new Array(artPieces.length).fill(0);

export default function BinaryChoices({navigation}) {    
  let startingTime = performance.now();
  
  let [artPiecesCounter, setCounter] = useState(0);  

  return (      
    <View style={globalStyles.container}>
      <Text style = {globalStyles.header}>אנא סמנו "אהבתי" או "לא אהבתי"</Text>      
      
      <Image        
        source={artPieces[artPiecesCounter].piece}
        style={{ width: 400, height: 600, resizeMode: 'contain' }}         
      />

      <View style = {styles.buttons}>
        <Pressable
            style = {styles.dislike}
            onPress={() => {
                let finishingTime = performance.now();
                binaryChoicesTotalTimeArray[artPiecesCounter] = ((finishingTime - startingTime) / 1000).toFixed(2);                            

                binaryChoicesData.likings[artPiecesCounter] = 0;
                if (artPiecesCounter == artPieces.length - 1) 
                  navigation.navigate("BinaryChoices2");
                else {
                  setCounter(artPiecesCounter+1);            
                }
            }
        }>
        
            <Text style={{color:"white", fontWeight:"bold"}}>לא אהבתי</Text>
        </Pressable>       

        <Pressable
            style = {styles.like}
            onPress={() => {
              let finishingTime = performance.now();
              binaryChoicesTotalTimeArray[artPiecesCounter] = ((finishingTime - startingTime) / 1000).toFixed(2);              

              binaryChoicesData.likings[artPiecesCounter] = 1;
              if (artPiecesCounter == artPieces.length - 1) 
                navigation.navigate("BinaryChoices2");
              else {
                setCounter(artPiecesCounter+1);            
              }
            }
        }>
            <Text style={{color:"white", fontWeight:"bold"}}>אהבתי</Text>            
        </Pressable>             
      </View>             
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row",
    },
    like: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "lightgreen",
        width:200,
        fontWeight:"bold"
    },

    dislike: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "red",
        width:200,
        
    },
  });
  