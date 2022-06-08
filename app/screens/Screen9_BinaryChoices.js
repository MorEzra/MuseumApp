import React, { useState }  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import sendDataToServer from '../components/sendDataToServer'; // TODO - ???? this?

/* Data Variables*/
import { questionnaireData }                  from './Screen2_Questionnaire';
import { summaryQuestionnaireData }           from './Screen6_SummaryQuestionnaire';
import { summaryQuestionnaireAdditionalData } from './Screen6.5_SummaryQuestionnaireAdditional';
import { binaryChoicesData }                  from './Screen8_BinaryChoices';
// import { binaryChoices2Data }                 from './Screen9_BinaryChoices';

/* Timing Variables */
import { welcomeScreenTotalTime }                  from './Screen1_WelcomeScreen';
import { questionnaireTotalTime }                  from './Screen2_Questionnaire';
import { researchGuidelinesTotalTime }             from './Screen3_ResearchGuidelines';
import { summaryQuestionnaireTotalTime }           from './Screen6_SummaryQuestionnaire';
import { summaryQuestionnaireAdditionalTotalTime } from './Screen6.5_SummaryQuestionnaireAdditional';
import { binaryChoicesExplanationTotalTime }       from './Screen7_BinaryChoicesExplanation';
import { binaryChoicesTotalTimeArray }             from './Screen8_BinaryChoices';
// import { binaryChoices2TotalTimeArray }            from './Screen9_BinaryChoices';

class TimingsData {
  constructor(welcomeScreenTotalTime,
              questionnaireTotalTime,
              researchGuidelinesTotalTime,
              summaryQuestionnaireTotalTime,
              summaryQuestionnaireAdditionalTotalTime,
              binaryChoicesExplanationTotalTime,
              binaryChoicesTotalTimeArray,
              binaryChoices2TotalTimeArray) 
  {
    this.welcomeScreenTotalTime                  = (welcomeScreenTotalTime / 1000).toFixed(2);
    this.questionnaireTotalTime                  = (questionnaireTotalTime / 1000).toFixed(2);
    this.researchGuidelinesTotalTime             = (researchGuidelinesTotalTime / 1000).toFixed(2);
    this.summaryQuestionnaireTotalTime           = (summaryQuestionnaireTotalTime / 1000).toFixed(2);
    this.summaryQuestionnaireAdditionalTotalTime = (summaryQuestionnaireAdditionalTotalTime / 1000).toFixed(2);
    this.binaryChoicesExplanationTotalTime       = (binaryChoicesExplanationTotalTime / 1000).toFixed(2);
    this.binaryChoicesTotalTimeArray             = binaryChoicesTotalTimeArray;
    this.binaryChoices2TotalTimeArray            = binaryChoices2TotalTimeArray;
  }
}
class OtherData {
  constructor(questionnaireData,
    summaryQuestionnaireData,
    summaryQuestionnaireAdditionalData,
    binaryChoicesData,
    binaryChoices2Data,)
    {
      this.questionnaireData    = questionnaireData
      this.summaryQuestionnaireData     = summaryQuestionnaireData
      this.summaryQuestionnaireAdditionalData     = summaryQuestionnaireAdditionalData
      this.binaryChoicesData    = binaryChoicesData
      this.binaryChoices2Data     = binaryChoices2Data
    }
}

export let binaryChoices2ScreenTotalTime;

class BinaryChoices2Data {
    constructor(n) {        
        this.likings2 = new Array(n).fill(-1)
    }
}

let artPiecesNames1 = ["klimt_1.png", "vanDongen_2.png","braque_3.png", "pollock_4.png"]      
let artPieces1 = [require("../assets/images/klimt_1.png"), require("../assets/images/vanDongen_2.png"), require("../assets/images/braque_3.png"), require("../assets/images/pollock_4.png")]      
let artPiecesNames2 = ["vanDongen_2.png", "klimt_1.png","pollock_4.png", "braque_3.png"]      
let artPieces2 = [require("../assets/images/vanDongen_2.png"), require("../assets/images/klimt_1.png"), require("../assets/images/pollock_4.png"), require("../assets/images/braque_3.png")]      

export let binaryChoices2Data = new BinaryChoices2Data(artPiecesNames1.length);
export let binaryChoices2TotalTimeArray = new Array(artPiecesNames1.length).fill(0);

export default function BinaryChoices2({navigation}) {
  let startingTime = performance.now();
  let timingsData = new TimingsData(welcomeScreenTotalTime, questionnaireTotalTime, researchGuidelinesTotalTime, summaryQuestionnaireTotalTime, summaryQuestionnaireAdditionalTotalTime, binaryChoicesExplanationTotalTime, binaryChoicesTotalTimeArray, binaryChoices2TotalTimeArray)
  let otherData = new OtherData(questionnaireData, summaryQuestionnaireData, summaryQuestionnaireAdditionalData, binaryChoicesData, binaryChoices2Data)

  let [artPiecesCounter, setArtPiecesCounter] = useState(0);
  return (      
    <View style={styles.container}>
     
      <Text style = {styles.header}>אנא לחצו על התמונות שאתם מעדיפים</Text>      
      
      <View style={styles.imagesView}>
        <TouchableOpacity onPress={() => 
                {
                    let finishingTime = performance.now();
                    binaryChoices2TotalTimeArray[artPiecesCounter] = ((finishingTime - startingTime) / 1000).toFixed(2);  
                    binaryChoices2Data.likings2[artPiecesCounter] = 0;                    
                    if (artPiecesCounter == artPiecesNames1.length - 1) {                        
                        navigation.navigate("ThanksForParticipating");
                    }
                    else {
                        setArtPiecesCounter(artPiecesCounter+1)
                    }
                }
            }>
            <Image
            source={artPieces1[artPiecesCounter]}
            style={styles.pieces} 
            />
        </TouchableOpacity>       

        <TouchableOpacity onPress={() => 
                {    
                    let finishingTime = performance.now();
                    binaryChoices2TotalTimeArray[artPiecesCounter] = ((finishingTime - startingTime) / 1000).toFixed(2);                              
                    binaryChoices2Data.likings2[artPiecesCounter] = 1;
                    if (artPiecesCounter == artPiecesNames1.length - 1) {                        
                        // sendDataToServer();
                        // Send to server kek
                        fetch("https://secure-tor-66457.herokuapp.com/https://experiments.schonberglab.org/v2/workers-api/sessions?key=test-worker-key", {
                            method: "POST",
                            mode: 'cors',
                            headers: {
                              "Content-Type": "application/json"
                            },
                            body: JSON.stringify({"timingsData":timingsData, "otherData": otherData}),
                          }
                        )

                        navigation.navigate("ThanksForParticipating");
                    }
                    else {
                        setArtPiecesCounter(artPiecesCounter+1)
                    }
                }
            }>
            <Image
            source={artPieces2[artPiecesCounter]}
            style={styles.pieces} 
            />
        </TouchableOpacity>       

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

    imagesView: {
        flexDirection:"row",
        
    },

    pieces: {
        width: 400,
        height: 400,
        marginRight: 20,
        resizeMode: 'contain'
    }
  });
  