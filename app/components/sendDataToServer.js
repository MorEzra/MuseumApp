import React, { useState, useEffect, useRef } from 'react';

/* Data Variables*/
import { questionnaireData }                  from '../screens/Screen2_Questionnaire';
import { summaryQuestionnaireData }           from '../screens/Screen6_SummaryQuestionnaire';
import { summaryQuestionnaireAdditionalData } from '../screens/Screen6.5_SummaryQuestionnaireAdditional';
import { binaryChoicesData }                  from '../screens/Screen8_BinaryChoices';
import { binaryChoices2Data }                 from '../screens/Screen9_BinaryChoices';

/* Timing Variables */
import { welcomeScreenTotalTime }                  from '../screens/Screen1_WelcomeScreen';
import { questionnaireTotalTime }                  from '../screens/Screen2_Questionnaire';
import { researchGuidelinesTotalTime }             from '../screens/Screen3_ResearchGuidelines';
import { summaryQuestionnaireTotalTime }           from '../screens/Screen6_SummaryQuestionnaire';
import { summaryQuestionnaireAdditionalTotalTime } from '../screens/Screen6.5_SummaryQuestionnaireAdditional';
import { binaryChoicesExplanationTotalTime }       from '../screens/Screen7_BinaryChoicesExplanation';
import { binaryChoicesTotalTimeArray }             from '../screens/Screen8_BinaryChoices';
import { binaryChoices2TotalTimeArray }            from '../screens/Screen9_BinaryChoices';

function sendDataToServer() {  
	let session = welcomeScreenTotalTime;
	fetch("https://experiments.schonberglab.org/v2/workers-api/sessions?key=test-worker-key", {
  body: "{\"hello\":\"world\"}",
  headers: {
    "Content-Type": "application/json"
  },
  mode: 'no-cors',
  method: "POST"
})
}

export default sendDataToServer();
