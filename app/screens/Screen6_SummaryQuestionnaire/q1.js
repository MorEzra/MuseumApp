import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { artPieces } from '../../components/ArtPiece';
import { globalStyles } from '../../assets/styles/global';
import { debugMode } from '../Screen1_WelcomeScreen';


export let tBeginSummaryQuestionnaireQ1  = -1;
export let tFinishSummaryQuestionnaireQ1 = -1;

export let summaryQuestionnaireQ1Rating

export default function SummaryQuestionnaire1({navigation}) {        
    let tBeginTimer = new Date();
    tBeginSummaryQuestionnaireQ1 = tBeginTimer.getHours() + ":" + tBeginTimer.getMinutes() + ":" + tBeginTimer.getSeconds() + ":" + tBeginTimer.getMilliseconds();
    let [im1Liking, setIm1Liking] = useState(0);        
    summaryQuestionnaireQ1Rating = im1Liking;

    let likingArray = [
        {label: "לא אהבתי בכלל", value:1},
        {label: "לא אהבתי", value:2},
        {label: "ניטרלי", value:3},
        {label: "אהבתי", value:4},
        {label: "אהבתי מאוד", value:5},
        {label: "טרם מולא", value:6}
      ];

    let [finishQuestionnaireMessage, setFinishQuestionnaireMessage] = useState(false);
    return (      
      <View style={styles.container}>   
        <ScrollView>
            <Text style = {globalStyles.header}>שאלון סיכום ניסוי</Text>
            <Text style = {globalStyles.questionnaireHeader}> אנא דרגו את מידת ההנאה מכל אחת מהיצירות שראיתם במהלך הסיור (כאשר 5 זהו הציון הגבוה)</Text>
            
            <View style={styles.oddViewWrapper}>       
                <View style={{alignItems:"center"}}>
                    <Text style = {globalStyles.questionnaireHeader}>{artPieces[0].name}-</Text>
                </View>     
                <View style= {styles.oddView}>
                    
                    <Image
                        source={require(`../../assets/images/pieces/1.png`)}
                        style={styles.pieces}    
                    />

                    <View style={styles.oddView}>
                                <RadioButton.Group
                                onValueChange={(value) => {setIm1Liking(value)}}>
                                    <RadioButton.Item status={ im1Liking === 1 ? 'checked' : 'unchecked' } label={likingArray[0]['label']} value={likingArray[0]['value']} style={globalStyles.radioItem} />
                                    <RadioButton.Item status={ im1Liking === 2 ? 'checked' : 'unchecked' } label={likingArray[1]['label']} value={likingArray[1]['value']} style={globalStyles.radioItem} />
                                    <RadioButton.Item status={ im1Liking === 3 ? 'checked' : 'unchecked' } label={likingArray[2]['label']} value={likingArray[2]['value']} style={globalStyles.radioItem} />
                                    <RadioButton.Item status={ im1Liking === 4 ? 'checked' : 'unchecked' } label={likingArray[3]['label']} value={likingArray[3]['value']} style={globalStyles.radioItem} />
                                    <RadioButton.Item status={ im1Liking === 5 ? 'checked' : 'unchecked' } label={likingArray[4]['label']} value={likingArray[4]['value']} style={globalStyles.radioItem} />
                                </RadioButton.Group>
                        </View>
                    
                </View>
            </View>    
            {
              finishQuestionnaireMessage ? (<Text style={globalStyles.completionMessage}>אנא דרג את היצירה</Text>) : null
            }                                             
            <Button 
            title="המשך"
            onPress={() => {    
                if (debugMode || summaryQuestionnaireQ1Rating != 0) {            
                  let finishTimer = new Date();
                  tFinishSummaryQuestionnaireQ1 = finishTimer.getHours() + ":" + finishTimer.getMinutes() + ":" + finishTimer.getSeconds() + ":" + finishTimer.getMilliseconds();
                  navigation.navigate("SummaryQuestionnaire2");
                }
                else {
                  setFinishQuestionnaireMessage(true)
                }
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