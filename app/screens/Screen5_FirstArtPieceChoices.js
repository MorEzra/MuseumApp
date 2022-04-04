import React, {useState}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function FirstArtPieceChoices({navigation}) {
    const [attribute, setAttribute] = useState([
        {name:"attribute 1", key:1},
        {name:"attribute 2", key:2},
        {name:"attribute 3", key:3}               
    ]);
    
  return (      
    <View style={styles.container}>   
      <Text style={styles.header}>איזה מאפיינים תרצה שיהיו ליצירה הבאה?</Text>      
      
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
          onPress={() => navigation.navigate("SummaryQuestionnaire")}>
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
      color: "lightblue",            
    },
    
    attributes: {
        backgroundColor:"orange",
        fontSize:20,
        marginTop:20,
    },
  });
  