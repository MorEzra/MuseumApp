import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

class SummaryQuestionnaireData {    
    constructor(im1Liking=0, im2Liking=0, im3Liking=0, im4Liking=0, im5Liking=0, experience=0, additionalInfo=0, tourType=0) {
        this.im1Liking = im1Liking;
        this.im2Liking = im2Liking;
        this.im3Liking = im3Liking;
        this.im4Liking = im4Liking;
        this.im5Liking = im5Liking;
        this.experience = experience;
        this.additionalInfo = additionalInfo;
        this.tourType = tourType;
    }
}
export let summaryQuestionnaireData = new SummaryQuestionnaireData();
export default function SummaryQuestionnaire({navigation}) {    
    let artPiecesNames = ["pic1.png", "pic2.png","pic3.jpg", "pic4.jpg"]    
    
    let [im1Liking, setIm1Liking] = useState(0);
    let [im2Liking, setIm2Liking] = useState(0);
    let [im3Liking, setIm3Liking] = useState(0);
    let [im4Liking, setIm4Liking] = useState(0);
    let [im5Liking, setIm5Liking] = useState(0);

    
    let likingArray = [
        {label: "לא אהבתי בכלל", value:1},
        {label: "לא אהבתי", value:2},
        {label: "ניטרלי", value:3},
        {label: "אהבתי", value:4},
        {label: "אהבתי מאוד", value:5},
      ];

    

    
    summaryQuestionnaireData.im1Liking = im1Liking;    
    summaryQuestionnaireData.im2Liking = im2Liking;    
    summaryQuestionnaireData.im3Liking = im3Liking;    
    summaryQuestionnaireData.im4Liking = im4Liking;    
    summaryQuestionnaireData.im5Liking = im5Liking;    
    /*summaryQuestionnaireData.experience = experience;
    summaryQuestionnaireData.additionalInfo = additionalInfo;
    summaryQuestionnaireData.tourType = tourType;*/

    return (      
      <View style={styles.container}>   
        <ScrollView>
            <Text style = {styles.header}>שאלון סיכום ניסוי</Text>
            <Text style = {styles.text}> אנא דרגו את מידת ההנאה מכל אחת מהיצירות שראיתם במהלך הסיור (כאשר 5 זהו הציון הגבוה)</Text>
            
            <View>            
                <Text style = {styles.text}>-שם יצירה מס' 1-</Text>
                <Image
                    source={require(`../assets/images/${artPiecesNames[0]}`)}
                    style={{ width: 100, height: 100 }}    
                />
                <RadioForm
                    radio_props={likingArray}
                    initial={-1}
                    onPress={(value) => setIm1Liking(value)}
                    buttonSize = {5}
                />
            </View>
            
            <View>
                <Text style = {styles.text}>-שם יצירה מס' 2-</Text>
                <Image
                    source={require(`../assets/images/${artPiecesNames[1]}`)}
                    style={{ width: 100, height: 100 }}    
                />
                <RadioForm
                    radio_props={likingArray}
                    initial={-1}
                    onPress={(value) => setIm2Liking(value)}
                    buttonSize = {5}
                />
            </View>

            <View>
                <Text style = {styles.text}>-שם יצירה מס' 3-</Text>
                <Image
                    source={require(`../assets/images/${artPiecesNames[2]}`)}
                    style={{ width: 100, height: 100 }}    
                />
                <RadioForm
                    radio_props={likingArray}
                    initial={-1}
                    onPress={(value) => setIm3Liking(value)}
                    buttonSize = {5}
                />
            </View>

            <View>
                <Text style = {styles.text}>-שם יצירה מס' 4-</Text>
                <Image
                    source={require(`../assets/images/${artPiecesNames[3]}`)}
                    style={{ width: 100, height: 100 }}    
                />
                <RadioForm
                    radio_props={likingArray}
                    initial={-1}
                    onPress={(value) => setIm4Liking(value)}
                    buttonSize = {5}
                />
            </View>

            <View>
                <Text style = {styles.text}>-שם יצירה מס' 5-</Text>
                <Image
                    source={require(`../assets/images/${artPiecesNames[3]}`)}
                    style={{ width: 100, height: 100 }}    
                />
                <RadioForm
                    radio_props={likingArray}
                    initial={-1}
                    onPress={(value) => setIm5Liking(value)}
                    buttonSize = {5}
                />
            </View>

            
            
            
            <Button 
            title="המשך"
            onPress={() => navigation.navigate("SummaryQuestionnaireAdditional")}>
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