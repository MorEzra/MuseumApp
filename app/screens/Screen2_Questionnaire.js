import React, {useState}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';


export default function Questionnaire({navigation}) {  
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [gender, setGender] = useState("");
    let [visitsFrequency, setVisitsFrequency] = useState("");
    let [museumVisitsFrequency, setMuseumVisitsFrequency] = useState("");
    let [lastMuseumVisit, setLastMuseumVisit] = useState("");
    let [telAvivMuseumVisit, setTelAvivMuseumVisit] = useState("");
    let [thisExhibitionVisit, setThisExhibitionVisit] = useState("");

    let genderArray = [
      {label: "זכר", value:0},      
      {label: "נקבה", value:1},
      {label: "אחר", value:2}           
    ]

    let museumVisitsFrequencyArray = [
      {label: "מספר פעמים בחודש", value:0},      
      {label: "מספר פעמים בשנה", value:1},
      {label: "מספר פעמים בודדות", value:2},
      {label: "לא מבקר", value:3}
    ]

    let lastMuseumVisitArray = [
      {label: "בחודש האחרון", value:0},      
      {label: "בשנה האחרונה", value:1},
      {label: "לפני מס' שנים", value:2},
      {label: "לא ביקרתי", value:3}
    ]

    let telAvivMuseumVisitArray = [
      {label:"כן", value:0},
      {label:"לא", value:1}
    ]

    let thisExhibitionVisitArray = [
      {label:"כן", value:0},
      {label:"לא", value:1}
    ]

    return (      
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style = {styles.header} >שאלון פרטים אישיים</Text>
          </View>           

          {/*------------------------------------------------------- first name -------------------------------------------------------*/}
          <View>
            <Text style={styles.text}>שם מלא</Text>        
            <TextInput
              style={styles.textInput}    
              onChangeText={(firstName) => setName(firstName)}
            />
          </View>
          {/*------------------------------------------------------- age -------------------------------------------------------*/}
          <Text style={styles.text}>גיל</Text>
          <TextInput
            style = {styles.textInput}
            keyboardType="numeric"
            onChangeText={(value) => setName(value)}
            
          />
          {/*------------------------------------------------------- gender -------------------------------------------------------*/}
          <Text style={styles.text}>מגדר</Text>
          <View>
            <RadioForm
              radio_props={genderArray}
              initial={-1}
              onPress={(value) => setGender(value)}
              buttonSize = {5}
              //formHorizontal={true}       
            />
          </View>
          {/*------------------------------------------------------- address -------------------------------------------------------*/}
          <Text style={styles.text}>כתובת</Text>
          <TextInput
            style = {styles.textInput}
          />
          {/*------------------------------------------------------- occupation -------------------------------------------------------*/}
          <Text style={styles.text}>עיסוק</Text>
    
          <TextInput
            style = {styles.textInput}
          />
          {/*------------------------------------------------- museum visits frequency ------------------------------------------------*/}
          <Text style={styles.text}>מהי תדירות הגעתך למוזיאונים</Text>
          <View>
            <RadioForm
              radio_props={museumVisitsFrequencyArray}
              initial={-1}
              onPress={(value) => setMuseumVisitsFrequency(value)}
              buttonSize = {5}
              //formHorizontal={true}       
            />
          </View>
          {/*--------------------------------------------------- last museum visit --------------------------------------------------*/}
          <Text style={styles.text}>מתי פעם אחרונה ביקרת במוזיאון</Text>
          <View>
            <RadioForm
              radio_props={lastMuseumVisitArray}
              initial={-1}
              onPress={(value) => setLastMuseumVisit(value)}
              buttonSize = {5}
              //formHorizontal={true}       
            />
          </View>
          {/*---------------------------------------------------- TA museum visit ---------------------------------------------------*/}
          <Text style={styles.text}>האם ביקרת במוזיאון תל אביב בעבר?</Text>
          <View>
            <RadioForm
              radio_props={telAvivMuseumVisitArray}
              initial={-1}
              onPress={(value) => setTelAvivMuseumVisit(value)}
              buttonSize = {5}              
              //formHorizontal={true}       
            />
          </View>

          {/*--------------------------------------------------- this exhibition visit --------------------------------------------------*/}
          <Text style={styles.text}>האם ביקרת בתערוכה זו בעבר?</Text>
          <View>
            <RadioForm
              radio_props={thisExhibitionVisitArray}
              initial={-1}
              onPress={(value) => setThisExhibitionVisit(value)}
              buttonSize = {5}
              //formHorizontal={true}      
            />
          </View>

          <Button 
            title="המשך"
            onPress={() => navigation.navigate("ResearchGuidelines")}>
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
  
    textInput: {
      width: 270,
      borderColor: "lightblue",
      borderWidth: 2,
    },
  
    header: {
      textDecorationLine:'underline',
      fontSize:20,
      fontWeight:"bold",
      color: "lightblue",      
    },
  
    text: {
      fontWeight:"bold",      
    }
  });
  