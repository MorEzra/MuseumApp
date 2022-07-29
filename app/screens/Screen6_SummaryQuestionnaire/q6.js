import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { artPieces } from '../../components/ArtPiece';
import { globalStyles } from '../../assets/styles/global';

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
export let summaryQuestionnaireTotalTime;

export default function SummaryQuestionnaire6({navigation}) {    
    let startingTime = performance.now();    
    let [im6Liking, setIm6Liking] = useState(0);   
    summaryQuestionnaireData.im6Liking = im6Liking;     
    
    
    let likingArray = [
        {label: "לא אהבתי בכלל", value:1},
        {label: "לא אהבתי", value:2},
        {label: "ניטרלי", value:3},
        {label: "אהבתי", value:4},
        {label: "אהבתי מאוד", value:5},
        {label: "טרם מולא", value:6}
      ];

    return (      
      <View style={styles.container}>   
        <ScrollView>
            <Text style = {globalStyles.header}>שאלון סיכום ניסוי</Text>
            <Text style = {globalStyles.questionnaireHeader}> אנא דרגו את מידת ההנאה מכל אחת מהיצירות שראיתם במהלך הסיור (כאשר 5 זהו הציון הגבוה)</Text>
            
            <View style={styles.evenViewWrapper}>       
                <View style={{alignItems:"center"}}>
                    <Text style = {globalStyles.questionnaireHeader}>{artPieces[5].name}-</Text>
                </View>     
                <View style= {styles.block}>
                    <Image
                        source={require(`../../assets/images/pieces/6.png`)}
                        style={styles.pieces}    
                    />
                    <View style={styles.evenView}>
                                <RadioButton.Group
                                onValueChange={(value) => {setIm6Liking(value)}}>
                                    <RadioButton.Item status={ im6Liking === 1 ? 'checked' : 'unchecked' } label={likingArray[0]['label']} value={likingArray[0]['value']} style={globalStyles.radioItem} />
                                    <RadioButton.Item status={ im6Liking === 2 ? 'checked' : 'unchecked' } label={likingArray[1]['label']} value={likingArray[1]['value']} style={globalStyles.radioItem} />
                                    <RadioButton.Item status={ im6Liking === 3 ? 'checked' : 'unchecked' } label={likingArray[2]['label']} value={likingArray[2]['value']} style={globalStyles.radioItem} />
                                    <RadioButton.Item status={ im6Liking === 4 ? 'checked' : 'unchecked' } label={likingArray[3]['label']} value={likingArray[3]['value']} style={globalStyles.radioItem} />
                                    <RadioButton.Item status={ im6Liking === 5 ? 'checked' : 'unchecked' } label={likingArray[4]['label']} value={likingArray[4]['value']} style={globalStyles.radioItem} />
                                </RadioButton.Group>
                        </View>
                </View>
            </View>                              
            
            <Button 
            title="המשך"
            onPress={() => {
                let finishingTime = performance.now();
                summaryQuestionnaireTotalTime = finishingTime - startingTime;
                navigation.navigate("SummaryQuestionnaire7")
                }
            }>
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
      paddingBottom: 80   
    },    

    pieces: {
        alignSelf: "center",
        width:250,
        height:250,
        marginLeft:15,
        resizeMode: 'contain'      
    },
    radiobutton: {
        
    },

    block: {
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:15
    },


    oddViewWrapper: {
        borderColor:"black",
        borderRadius:10,
        borderWidth:2,
        backgroundColor:"aliceblue",    
        marginBottom:10  
    },

    evenViewWrapper: {
        borderColor:"black",
        borderRadius:10,
        borderWidth:2,
        backgroundColor:"#fff",
        marginBottom:10  
    },

    oddView: {
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"aliceblue",      
        marginBottom:10,    
      },
  
      evenView: {
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#fff",      
        marginBottom:10,
        borderRadius:10,
      },
  });