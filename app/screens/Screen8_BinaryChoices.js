import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image} from 'react-native';


class BinaryChoicesData {
    constructor(artPiecesNames) {        
        this.likings = new Array(artPiecesNames.length).fill(-1)
    }
}

let artPiecesNames = ["pic1.png", "pic2.jpg","pic3.jpg", "pic4.jpg"];
let artPieces = [
  require("../assets/images/pic1.png"),
  require("../assets/images/pic2.jpg"),
  require("../assets/images/pic3.jpg"),
  require("../assets/images/pic4.jpg")
]
export let binaryChoicesData = new BinaryChoicesData(artPiecesNames);
export let binaryChoicesTotalTimeArray = new Array(artPiecesNames.length).fill(0);

export default function BinaryChoices({navigation}) {    
  let startingTime = performance.now();
  
  let [artPiecesCounter, setCounter] = useState(0);  

  return (      
    <View style={styles.container}>
      <Text style = {styles.header}>אנא סמנו "אהבתי" או "לא אהבתי"</Text>      
      
      <Image        
        source={artPieces[artPiecesCounter]}
        style={{ width: 400, height: 400, marginBottom:5}}         
      />

      <View style = {styles.buttons}>
        <Pressable
            style = {styles.dislike}
            onPress={() => {
                let finishingTime = performance.now();
                binaryChoicesTotalTimeArray[artPiecesCounter] = ((finishingTime - startingTime) / 1000).toFixed(2);                            

                binaryChoicesData.likings[artPiecesCounter] = 0;
                if (artPiecesCounter == artPiecesNames.length - 1) 
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
              if (artPiecesCounter == artPiecesNames.length - 1) 
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
      marginBottom:15        
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
        width:198,
        fontWeight:"bold",
        borderWidth:2,     
    },

    dislike: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "red",
        width:198,
        borderWidth:2,     
        marginRight:4
    },
  });
  