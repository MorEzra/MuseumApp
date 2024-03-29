import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from '../assets/styles/global';
import { RadioButton } from 'react-native-paper';


export let tExperimentBegin = performance.now(); // TODO: remove
export let tFinishWelcomeScreen;

let active = 0;
let activePassiveCombined = 0;

function setActive(value) {
  active = value;
}

function setActivePassiveCombined(value) {
  activePassiveCombined = value;
}

export { active, activePassiveCombined, setActive, setActivePassiveCombined, setDebugMode };

export let debugMode = 1;

function setDebugMode(value) {
  debugMode = value;
}

export let noPictureMode = false;
export let sessionTimer = new Date();

export default function WelcomeScreen({ navigation }) {
  const [checked, setChecked] = React.useState('unchecked');
  // const [isDebugMode, setIsDebugMode] = React.useState(debugMode);

  return (
    <View style={globalStyles.container}>
      {/* <RadioButton.Item
        value={isDebugMode === 1 ? 'checked' : 'unchecked'}
        label="Enable debug mode"
        status={isDebugMode === 1 ? 'checked' : 'unchecked'}
        onPress={() => {
          if (isDebugMode === 0) { setIsDebugMode(1); setDebugMode(1); }
          else { setIsDebugMode(0); setDebugMode(0); }
        }
        }
      /> */}

      <Text style={globalStyles.header}>ביקור באוסף מינזה בלומנטל במוזיאון תל אביב</Text>

      <Text style={globalStyles.instructionsText}>
        תודה על השתתפותכם בסיור שהינו חלק ממחקר מטעם אוניברסיטת תל אביב.{"\n"}

        במהלך הסיור תתבקשו לעבור בין יצירות שונות מאוסף המוזיאון ולשמוע הסברים מוקלטים אודותן מאת ד"ר ספי הנדלר מוועדת התערוכות של המוזיאון.
        {"\n"}לפני ולאחר הסיור תתבקשו לענות על מספר שאלות.{"\n"}

        משך הסיור כ-20 דקות ובתמורה להשתתפותך תזכה בשובר.{"\n"}

        הינכם חופשיים לבחור שלא להשתתף במחקר ולהפסיק את השתתפותכם בכל עת.{"\n"}
        כלל הנתונים מהשתתפותכם הינם חסויים ומשמשים לצורך מחקר בלבד.

        {"\n"}{"\n"}
        בלחיצה על 'המשך' הינכם מסכימים להשתתף במחקר, תהנו!

      </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Image
          source={require("../assets/images/logos/museum.png")}
          style={{ resizeMode: 'contain', width: 150, height: 150, marginBottom: 20, marginLeft: 25, marginRight: 75 }}
        />
        <Image
          source={require("../assets/images/logos/felizia.png")}
          style={{ resizeMode: 'contain', width: 150, height: 150, marginBottom: 20 }}
        />
        <Image
          source={require("../assets/images/logos/tau.png")}
          style={{ resizeMode: 'contain', width: 150, height: 150, marginBottom: 20, marginRight: 25, marginLeft: 75 }}
        />
      </View>

      <RadioButton.Item
        value="unchecked"
        label="קראתי את ההוראות ואני מאשר את השתתפותי בניסוי"
        status={checked === 'checked' ? 'checked' : 'unchecked'}
        onPress={() => {
          if (checked === 'unchecked') { setChecked('checked') }
          else { setChecked('unchecked') }
        }
        }
      />
      <View style={globalStyles.buttonView}>
        <TouchableOpacity
          style={globalStyles.button}
          disabled={checked === 'checked' || debugMode ? false : true}
          onPress={() => {
            let tFinishWelcomeScreenDate = new Date();
            tFinishWelcomeScreen = tFinishWelcomeScreenDate.getHours() + ":" + tFinishWelcomeScreenDate.getMinutes() + ":" + tFinishWelcomeScreenDate.getSeconds() + ":" + tFinishWelcomeScreenDate.getMilliseconds();
            navigation.navigate("Questionnaire");
          }
          }>
          <Text style={globalStyles.buttonText}>המשך</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />

    </View>
  );
}
