import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { artPieces } from '../../components/ArtPiece';
import { globalStyles } from '../../assets/styles/global';
import { debugMode } from '../Screen1_WelcomeScreen';

export let tBeginSummaryQuestionnaireQ7  = -1;
export let tFinishSummaryQuestionnaireQ7 = -1;

export let summaryQuestionnaireQ7Rating;

export default function SummaryQuestionnaire7({navigation}) {    
    let [im7Liking, setIm7Liking] = useState(0);        
    summaryQuestionnaireQ7Rating = im7Liking;

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
            <Text style = {globalStyles.header_feedback}>שאלון סיכום ניסוי</Text>
            <Text style = {globalStyles.questionnaireHeader}> אנא דרגו את מידת ההנאה מכל אחת מהיצירות שראיתם במהלך הסיור (כאשר 5 זהו הציון הגבוה)</Text>
            
            <View style={styles.oddViewWrapper}>       
                <View style={{alignItems:"center"}}>
                    <Text style = {globalStyles.questionnaireHeader}>{artPieces[6].name}-</Text>
                </View>     
                <View style= {styles.block}>
                    <Image
                        source={require(`../../assets/images/pieces/7.png`)}
                        style={styles.pieces}    
                    />
                    <View style={styles.oddView}>
                                <RadioButton.Group
                                onValueChange={(value) => {setIm7Liking(value)}}>
                                    <RadioButton.Item status={ im7Liking === 1 ? 'checked' : 'unchecked' } label={likingArray[0]['label']} value={likingArray[0]['value']} style={globalStyles.radioItem} />
                                    <RadioButton.Item status={ im7Liking === 2 ? 'checked' : 'unchecked' } label={likingArray[1]['label']} value={likingArray[1]['value']} style={globalStyles.radioItem} />
                                    <RadioButton.Item status={ im7Liking === 3 ? 'checked' : 'unchecked' } label={likingArray[2]['label']} value={likingArray[2]['value']} style={globalStyles.radioItem} />
                                    <RadioButton.Item status={ im7Liking === 4 ? 'checked' : 'unchecked' } label={likingArray[3]['label']} value={likingArray[3]['value']} style={globalStyles.radioItem} />
                                    <RadioButton.Item status={ im7Liking === 5 ? 'checked' : 'unchecked' } label={likingArray[4]['label']} value={likingArray[4]['value']} style={globalStyles.radioItem} />
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
              if (debugMode || summaryQuestionnaireQ7Rating != 0) {
                let finishTimer = new Date();
                  tFinishSummaryQuestionnaireQ7 = finishTimer.getHours() + ":" + finishTimer.getMinutes() + ":" + finishTimer.getSeconds() + ":" + finishTimer.getMilliseconds();
                navigation.navigate("SummaryQuestionnaire8")
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