import React, {useState}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
var x = 0;
export default function ArtPiecesChoices({navigation}) {
  const [attribute, setAttribute] = useState([
        {name:"attribute 1", key:1},
        {name:"attribute 2", key:2},
        {name:"attribute 3", key:3}               
  ]);

  let [counter, setCounter] = useState(0);  
    
  return (      
    <View style={styles.container}>   
      <Text style={styles.header}>איזה מאפיינים תרצה שיהיו ליצירה הבאה?</Text>      
      <Text>{counter}</Text>
      {attribute.map(
          (item) => { return (
                <View key={item.key}>
                    <Text style={styles.attributes}>{item.name}</Text>
                </View>
          )}
        )
      }

      <Button 
          title="המשך"
          onPress={() => {            
            setCounter(counter+1)
            navigation.navigate("ArtPieces");
            }}>
      </Button>
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
    
    attributes: {
        backgroundColor:"orange",
        fontSize:20,
        marginTop:20,
    },
  });
  