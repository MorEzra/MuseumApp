import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { RadioButton } from 'react-native-paper';


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
    let [tourType, setTourType]   = useState(2);    
    
    summaryQuestionnaireAdditionalData.experience     = experience;
    summaryQuestionnaireAdditionalData.additionalInfo = additionalInfo;
    summaryQuestionnaireAdditionalData.tourType       = tourType;

    let experienceArray = [
        {label: "לא נהנתי בכלל", value:1},
        {label: "לא נהנתי", value:2},
        {label: "ניטרלי", value:3},
        {label: "נהנתי", value:4},
        {label: "נהנתי מאוד", value:5},
        {label: "טרם מולא", value:0}
    ];

    let additionalInfoArray = [
        {label: "כלל לא", value:1},
        {label: "לא", value:2},
        {label: "ניטרלי", value:3},
        {label: "כן", value:4},
        {label: "בטח!", value:5},
        {label: "טרם מולא", value:0}
    ];
    
    let tourTypeArray = [
        {label:"עצמאית", value:0},
        {label:"באופן דומה", value:1},
        {label: "טרם מולא", value:2}
    ]
  
    return (      
    <View style={styles.container}>
        <View>
            <Text style = {styles.header}>המשך שאלון סיכום ניסוי</Text>
            <View style={styles.oddView}>            
                <Text style = {styles.text}>דרגו את חוויתכם מהסיור</Text>
                <RadioButton.Group
                    onValueChange={(value) => {setExperience(value)}}>
                    <RadioButton.Item status={ experience === 1 ? 'checked' : 'unchecked' } label={experienceArray[0]['label']} value={experienceArray[0]['value']} style={{ alignSelf: 'flex-end' }} />
                    <RadioButton.Item status={ experience === 2 ? 'checked' : 'unchecked' } label={experienceArray[1]['label']} value={experienceArray[1]['value']} style={{ alignSelf: 'flex-end' }} />
                    <RadioButton.Item status={ experience === 3 ? 'checked' : 'unchecked' } label={experienceArray[2]['label']} value={experienceArray[2]['value']} style={{ alignSelf: 'flex-end' }} />
                    <RadioButton.Item status={ experience === 4 ? 'checked' : 'unchecked' } label={experienceArray[3]['label']} value={experienceArray[3]['value']} style={{ alignSelf: 'flex-end' }} />
                    <RadioButton.Item status={ experience === 5 ? 'checked' : 'unchecked' } label={experienceArray[4]['label']} value={experienceArray[4]['value']} style={{ alignSelf: 'flex-end' }} />
                </RadioButton.Group>
            </View>

            <View style={styles.evenView}>            
                <Text style = {styles.text}>האם הייתם רוצים לקבל מידע נוסף במהלך הסיור</Text>
                <RadioButton.Group
                    onValueChange={(value) => {setAdditionalInfo(value)}}>
                        <RadioButton.Item status={ additionalInfo === 1 ? 'checked' : 'unchecked' } label={additionalInfoArray[0]['label']} value={additionalInfoArray[0]['value']} style={{ alignSelf: 'flex-end' }} />
                        <RadioButton.Item status={ additionalInfo === 2 ? 'checked' : 'unchecked' } label={additionalInfoArray[1]['label']} value={additionalInfoArray[1]['value']} style={{ alignSelf: 'flex-end' }} />
                        <RadioButton.Item status={ additionalInfo === 3 ? 'checked' : 'unchecked' } label={additionalInfoArray[2]['label']} value={additionalInfoArray[2]['value']} style={{ alignSelf: 'flex-end' }} />
                        <RadioButton.Item status={ additionalInfo === 4 ? 'checked' : 'unchecked' } label={additionalInfoArray[3]['label']} value={additionalInfoArray[3]['value']} style={{ alignSelf: 'flex-end' }} />
                        <RadioButton.Item status={ additionalInfo === 5 ? 'checked' : 'unchecked' } label={additionalInfoArray[4]['label']} value={additionalInfoArray[4]['value']} style={{ alignSelf: 'flex-end' }} />
                    </RadioButton.Group>
            </View>
                
            <View style={styles.oddView}>            
                <Text style = {styles.text}>כיצד הייתם רוצים שהסיור יתנהל?</Text>
                <RadioButton.Group
                    onValueChange={(value) => {setTourType(value)}}>
                    <RadioButton.Item status={ tourType === 0 ? 'checked' : 'unchecked' } label={tourTypeArray[0]['label']} value={tourTypeArray[0]['value']} style={{ alignSelf: 'flex-end' }} />
                    <RadioButton.Item status={ tourType === 1 ? 'checked' : 'unchecked' } label={tourTypeArray[1]['label']} value={tourTypeArray[1]['value']} style={{ alignSelf: 'flex-end' }} />
                </RadioButton.Group>
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
      marginBottom:10          
    },

    text: {
        fontWeight:"bold"
    },

    radiobutton: {
        alignSelf:"flex-end"        
    },

    oddView: {
        backgroundColor:"aliceblue",      
        marginBottom:10,
        borderColor:"black",
        borderRadius:10,
        borderWidth:2
      },
  
      evenView: {
        backgroundColor:"#fff",      
        marginBottom:10,
        borderRadius:10,
        borderWidth:2
      },
  });
  