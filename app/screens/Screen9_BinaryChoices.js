import React, { useState }  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from '../assets/styles/global';

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


let pair1 = [require("../assets/images/pairs/1/1.png"),
require("../assets/images/pairs/2/1.png"),
require("../assets/images/pairs/3/1.png"),
require("../assets/images/pairs/4/1.png"),
require("../assets/images/pairs/5/1.png"),
require("../assets/images/pairs/6/1.png"),
require("../assets/images/pairs/7/1.png"),
require("../assets/images/pairs/8/1.png"),
require("../assets/images/pairs/9/1.png"),
require("../assets/images/pairs/10/1.png"),
require("../assets/images/pairs/11/1.png"),
require("../assets/images/pairs/12/1.png"),
require("../assets/images/pairs/13/1.png"),
require("../assets/images/pairs/14/1.png")];
let pair2 = [require("../assets/images/pairs/1/2.png"),
require("../assets/images/pairs/2/2.png"),
require("../assets/images/pairs/3/2.png"),
require("../assets/images/pairs/4/2.png"),
require("../assets/images/pairs/5/2.png"),
require("../assets/images/pairs/6/2.png"),
require("../assets/images/pairs/7/2.png"),
require("../assets/images/pairs/8/2.png"),
require("../assets/images/pairs/9/2.png"),
require("../assets/images/pairs/10/2.png"),
require("../assets/images/pairs/11/2.png"),
require("../assets/images/pairs/12/2.png"),
require("../assets/images/pairs/13/2.png"),
require("../assets/images/pairs/14/2.png")];


export let binaryChoices2Data = new BinaryChoices2Data(pair1.length);
export let binaryChoices2TotalTimeArray = new Array(pair1.length).fill(0);

export default function BinaryChoices2({navigation}) {
  let startingTime = performance.now();
  let timingsData = new TimingsData(welcomeScreenTotalTime, questionnaireTotalTime, researchGuidelinesTotalTime, summaryQuestionnaireTotalTime, summaryQuestionnaireAdditionalTotalTime, binaryChoicesExplanationTotalTime, binaryChoicesTotalTimeArray, binaryChoices2TotalTimeArray)
  let otherData = new OtherData(questionnaireData, summaryQuestionnaireData, summaryQuestionnaireAdditionalData, binaryChoicesData, binaryChoices2Data)

  let [artPiecesCounter, setArtPiecesCounter] = useState(0);
  return (      
    <View style={globalStyles.container}>
     
      <Text style = {globalStyles.header}>אנא לחצו על התמונות שאתם מעדיפים</Text>            
      <View style={styles.imagesView}>
        <TouchableOpacity onPress={() => 
                {
                    let finishingTime = performance.now();
                    binaryChoices2TotalTimeArray[artPiecesCounter] = ((finishingTime - startingTime) / 1000).toFixed(2);  
                    binaryChoices2Data.likings2[artPiecesCounter] = 0;                    
                    if (artPiecesCounter == pair1.length - 1) {                        
                        navigation.navigate("ThanksForParticipating");
                    }
                    else {
                        setArtPiecesCounter(artPiecesCounter+1)
                    }
                }
            }>
            <Image
            source={pair1[artPiecesCounter]}
            style={styles.pieces} 
            />
        </TouchableOpacity>       

        <TouchableOpacity onPress={() => 
                {    
                    let finishingTime = performance.now();
                    binaryChoices2TotalTimeArray[artPiecesCounter] = ((finishingTime - startingTime) / 1000).toFixed(2);                              
                    binaryChoices2Data.likings2[artPiecesCounter] = 1;
                    if (artPiecesCounter == pair1.length - 1) {                        
                        fetch("https://secure-tor-66457.herokuapp.com/https://experiments.schonberglab.org/v2/workers-api/sessions?key=test-worker-key", {
                            method: "POST",
                            mode: 'cors',
                            headers: {
                              "Content-Type": "application/json"
                            },
                            body: JSON.stringify({"timingsData": timingsData, "otherData": otherData}),
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
            source={pair2[artPiecesCounter]}
            style={styles.pieces} 
            />
        </TouchableOpacity>       

      </View>         
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
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
  