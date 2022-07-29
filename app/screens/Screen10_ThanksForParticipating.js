import React  from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, ScrollView, View} from 'react-native';
import { globalStyles } from '../assets/styles/global';

import { active } from './Screen1_WelcomeScreen';
import { debugMode } from './Screen1_WelcomeScreen';
/* Data Variables*/
import { questionnaireData }                  from './Screen2_Questionnaire';
import { summaryQuestionnaireData }           from './Screen6_SummaryQuestionnaire';
import { summaryQuestionnaireAdditionalData } from './Screen6.5_SummaryQuestionnaireAdditional';
import { binaryChoicesData }                  from './Screen8_BinaryChoices';
import { binaryChoices2Data }                 from './Screen9_BinaryChoices';


/* Time Stamps*/
import { researchTimerBegin }                  from './Screen1_WelcomeScreen';
import { tFinishWelcomeScreen }                from './Screen1_WelcomeScreen';
import { tFinishFirstQuestionnaire }           from './Screen2_Questionnaire';
import { tFinishGuidelines }                   from './Screen3_ResearchGuidelines';

class TimingsData {
  constructor()
  {
    //this.welcomeScreenTotalTime                  = (welcomeScreenTotalTime / 1000).toFixed(2);
    
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

export default function ThanksForParticipating({navigation}) {
  //let timingsData = new TimingsData(researchTimerBegin, questionnaireTotalTime, tFinishGuidelines, summaryQuestionnaireTotalTime, summaryQuestionnaireAdditionalTotalTime, binaryChoicesExplanationTotalTime, binaryChoicesTotalTimeArray, binaryChoices2TotalTimeArray)
  let Data = new OtherData(questionnaireData, summaryQuestionnaireData, summaryQuestionnaireAdditionalData, binaryChoicesData, binaryChoices2Data)
  return (      
    <View style={globalStyles.container}>           
      <ScrollView>
        <Text style = {globalStyles.header}>תודה על השתתפותך!</Text>
        <Text
        style = {
          globalStyles.instructionsText
        }>
          אנא החזירו את האייפד לכניסה, שם תקבלו את שובר המתנה
        </Text>                
        { debugMode ? (
            <View>
              <Text> </Text>
              <Text> </Text>
              <Text> </Text>

              <Text>JSONs:</Text>
              <Text>Data</Text>
              <Text>{JSON.stringify(Data, null, "\t")}</Text>
              <Text>-------------------------------------------------------</Text>
              
              <Text>Timing Data</Text>
              <Text>
                finish welcome screen: {tFinishWelcomeScreen}
              </Text>
              <Text>
                finish 1st questionaiire: {tFinishFirstQuestionnaire}
              </Text>
              <Text>{JSON.stringify({"timingsData":timingsData, "otherData": Data}, null, "\t")}</Text>
            </View>
          ) : null
        }
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}
  