import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { summaryQuestionnaireTotalTime } from './Screen5_SummaryQuestionnaire';


class SummaryQuestionnaireAdditionalData {
    constructor(experience, additionalInfo, tourType) {
        this.experience = experience;
        this.additionalInfo = additionalInfo;
        this.tourType = tourType
    }
}

export let summaryQuestionnaireAdditionalData = new SummaryQuestionnaireAdditionalData();
export let summaryQuestionnaireAdditionalTotalTime;

export default function SummaryQuestionnaireAdditional({navigation}) {
    let startingTime = performance.now();

    let [experience, setExperience]   = useState(0);
    let [additionalInfo, setAdditionalInfo]   = useState(0);
    let [tourType, setTourType]   = useState(0);    
    
    summaryQuestionnaireAdditionalData.experience     = experience;
    summaryQuestionnaireAdditionalData.additionalInfo = additionalInfo;
    summaryQuestionnaireAdditionalData.tourType       = tourType;

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
        <View>
            <Text style = {styles.header}>המשך שאלון סיכום ניסוי</Text>
            <View style={{backgroundColor:"aliceblue"}}>            
                <Text style = {styles.text}>דרגו את חוויתכם מהסיור</Text>
                <RadioForm
                    style = {styles.radiobutton}                   
                    radio_props={enjoymentArray}
                    initial={-1}
                    onPress={(value) => setExperience(value)}
                    buttonSize = {5}
                />
            </View>

            <View>
                <Text style = {styles.text}>האם הייתם רוצים לקבל מידע נוסף במהלך הסיור</Text>
                <RadioForm
                    style = {styles.radiobutton}                   
                    radio_props={additionalInfoArray}
                    initial={-1}
                    onPress={(value) => setAdditionalInfo(value)}
                    buttonSize = {5}
                />
            </View>
                
            <View style={{backgroundColor:"aliceblue"}}>            
                <Text style = {styles.text}>כיצד הייתם רוצים שהסיור יתנהל?</Text>
                <RadioForm
                    style = {styles.radiobutton}                   
                    radio_props={tourTypeArray}
                    initial={-1}
                    onPress={(value) => setTourType(value)}
                    buttonSize = {5}
                />
            </View>
            <Button 
                title="המשך"
                onPress={() =>
                        {
                            let finishingTime = performance.now();
                            summaryQuestionnaireAdditionalTotalTime = finishingTime - startingTime;
                            navigation.navigate("BinaryChoicesExplanation")
                        }
                    }>
            </Button>     
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
    },

    text: {
        fontWeight:"bold"
    },

    radiobutton: {
        alignSelf:"flex-end"        
    }
  });
  