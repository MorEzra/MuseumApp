import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Image} from 'react-native';


class BinaryChoicesData {
    constructor(artPiecesNames) {        
        this.likings = new Array(artPiecesNames.length).fill(-1)
    }
}

let artPiecesNames = ["pic1.png", "pic2.png","pic3.jpg", "pic4.jpg"];
export let binaryChoicesData = new BinaryChoicesData(artPiecesNames);

export default function BinaryChoices({navigation}) {    
    let [artPiecesCounter, setCounter] = useState(0);  

  return (      
    <View style={styles.container}>
      <Text style = {styles.header}>אנא סמנו "אהבתי" או "לא אהבתי"</Text>      
      
      <Image        
        source={require("../assets/images/" + artPiecesNames[artPiecesCounter])}
        style={{ width: 400, height: 400 }}         
      />

      <View style = {styles.buttons}>        
        <Pressable
            style = {styles.dislike}
            onPress={() => {
                binaryChoicesData.likings[artPiecesCounter] = 0;
                if (artPiecesCounter == artPiecesNames.length - 1) 
                  navigation.navigate("ThanksForParticipating");
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
                binaryChoicesData.likings[artPiecesCounter] = 1;
                if (artPiecesCounter == artPiecesNames.length - 1) 
                  navigation.navigate("ThanksForParticipating");
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
      color: "lightblue",            
    },

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
  