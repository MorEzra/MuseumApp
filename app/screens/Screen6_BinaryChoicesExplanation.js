import React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';


export default function BinaryChoicesExplanation({navigation}) {  
  return (      
    <View style={styles.container}>
     
      <Text style = {styles.header}>שאלון העדפות קצרצר</Text>
      <Text>במסך הבא, תתבקשו לסמן העדפות של יצירות.
          אנא סמנו "אהבתי" או "לא אהבתי"
      </Text>
      <Button 
          title="המשך"
          onPress={() => navigation.navigate("BinaryChoices")}>
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

    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',    
      },

  });
  