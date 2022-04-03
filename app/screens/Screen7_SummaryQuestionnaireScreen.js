import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

export default function SummaryQuestionnaire({navigation}) {
    let [im1Liking, setIm1Liking] = useState("");
    let [im2Liking, setIm2Liking] = useState("");
    let [im3Liking, setIm3Liking] = useState("");
    let [im4Liking, setIm4Liking] = useState("");
    let [im5Liking, setIm5Liking] = useState("");

    let [experience, setExperience]   = useState("");
    let [additionalInfo, setAdditionalInfo]   = useState("");
    let [tourType, setTourType]   = useState("");
    
    let likingArray = [
        {label: "לא אהבתי בכלל", value:1},
        {label: "לא אהבתי", value:2},
        {label: "ניטרלי", value:3},
        {label: "אהבתי", value:4},
        {label: "אהבתי מאוד", value:5},
      ];

      let enjoymentArray = [
        {label: "לא נהנתי בכלל", value:1},
        {label: "לא נהנתי", value:2},
        {label: "ניטרלי", value:3},
        {label: "נהנתי", value:4},
        {label: "נהנתי מאוד", value:5},
      ];

      let additionalInfoArray = [
        {label: "כלל לא", value:1},
        {label: "לא", value:2},
        {label: "ניטרלי", value:3},
        {label: "כן", value:4},
        {label: "בטח!", value:5},
      ];
    
    let tourTypeArray = [
        {label:"עצמאית", value:0},
        {label:"באופן דומה", value:1}
    ]

    return (      
      <View style={styles.container}>   
        <ScrollView>
            <Text style = {styles.header}>שאלון סיכום ניסוי</Text>
            <Text style = {styles.text}> אנא דרגו את מידת ההנאה מכל אחת מהיצירות שראיתם במהלך הסיור (כאשר 5 זהו הציון הגבוה)</Text>
            
            <View>
                <Text style = {styles.text}>-שם יצירה מס' 1-</Text>
                <Image
                    source={require("../assets/images/Sefi.png")}
                    style={{ width: 100, height: 100 }}    
                />
                <RadioForm
                    radio_props={likingArray}
                    initial={-1}
                    onPress={(value) => setIm1Liking(value)}
                    buttonSize = {5}
                    //formHorizontal={true}       
                />
            </View>
            
            <View>
                <Text style = {styles.text}>-שם יצירה מס' 2-</Text>
                <Image
                    source={require("../assets/images/Sefi.png")}
                    style={{ width: 100, height: 100 }}    
                />
                <RadioForm
                    radio_props={likingArray}
                    initial={-1}
                    onPress={(value) => setIm2Liking(value)}
                    buttonSize = {5}
                    //formHorizontal={true}       
                />
            </View>

            <View>
                <Text style = {styles.text}>-שם יצירה מס' 3-</Text>
                <Image
                    source={require("../assets/images/Sefi.png")}
                    style={{ width: 100, height: 100 }}    
                />
                <RadioForm
                    radio_props={likingArray}
                    initial={-1}
                    onPress={(value) => setIm3Liking(value)}
                    buttonSize = {5}
                    //formHorizontal={true}       
                />
            </View>

            <View>
                <Text style = {styles.text}>-שם יצירה מס' 4-</Text>
                <Image
                    source={require("../assets/images/Sefi.png")}
                    style={{ width: 100, height: 100 }}    
                />
                <RadioForm
                    radio_props={likingArray}
                    initial={-1}
                    onPress={(value) => setIm4Liking(value)}
                    buttonSize = {5}
                    //formHorizontal={true}       
                />
            </View>

            <View>
                <Text style = {styles.text}>-שם יצירה מס' 5-</Text>
                <Image
                    source={require("../assets/images/Sefi.png")}
                    style={{ width: 100, height: 100 }}    
                />
                <RadioForm
                    radio_props={likingArray}
                    initial={-1}
                    onPress={(value) => setIm5Liking(value)}
                    buttonSize = {5}
                    //formHorizontal={true}       
                />
            </View>

            <View>
                <Text style = {styles.text}>דרגו את חוויתכם מהסיור</Text>
                <RadioForm
                    radio_props={enjoymentArray}
                    initial={-1}
                    onPress={(value) => setExperience(value)}
                    buttonSize = {5}
                    //formHorizontal={true}       
                />
            </View>

            <View>
                <Text style = {styles.text}>האם הייתם רוצים לקבל מידע נוסף במהלך הסיור</Text>
                <RadioForm
                    radio_props={additionalInfoArray}
                    initial={-1}
                    onPress={(value) => setAdditionalInfo(value)}
                    buttonSize = {5}
                    //formHorizontal={true}       
                />
            </View>
            
            <View>
                <Text style = {styles.text}>כיצד הייתם רוצים שהסיור יתנהל?</Text>
                <RadioForm
                    radio_props={tourTypeArray}
                    initial={-1}
                    onPress={(value) => setTourType(value)}
                    buttonSize = {5}
                    //formHorizontal={true}       
                />
            </View>
            

            <Button 
            title="סיום הניסוי"
            onPress={() => navigation.navigate("ThanksForParticipating")}>
            </Button>
        </ScrollView>    
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
    
    text: {
        fontWeight:"bold"
    }
  });