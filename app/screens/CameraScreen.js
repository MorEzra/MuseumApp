import React, {useState, useRef, useEffect}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import { Camera } from 'expo-camera';

import { artPiecesCounterReference } from '../screens/Screen4_ArrivalInstructions';
import { tFinishArrivalInstructionsArray } from '../screens/Screen4_ArrivalInstructions';
import { tExperimentBegin } from '../screens/Screen1_WelcomeScreen';



export default function CameraScreen({navigation}) {
    
    
	const [count1, setCount1] = useState(0);
  const onPress = () => setCount1(prevCount => prevCount + 1);

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = useState(null);
  const [useCamera, setUseCamera] = useState(false);
  const cameraRef = useRef(null);
  useEffect(() => {
  (async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  })();
  }, []);

  if (hasPermission === null) {
  return <View />;
  }
  if (hasPermission === false) {
  return <Text>No access to camera</Text>;
  }	

const takePicture = async () => {
  if (cameraRef) {
    console.log('in take picture');
    try {
    let photo = await cameraRef.current.takePictureAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    return photo;
    } catch (e) {
    console.log(e);
    }
  }
  };

  return (
    <View style={styles.container} >
      {/* ------------------------------------------------ camera ------------------------------------------------ */}
      <View style={styles.container}>
		<Camera style={styles.camera} type={type} ref={cameraRef}>
		</Camera>
		<View style={styles.buttonContainer}>
			<Button
                style={[styles.button]}
                onPress={async () => {
                  console.log('in take pic');
                  const r = await takePicture();
                  setUseCamera(false);
                  if (!r.cancelled) {
                    setImage(r.uri);
                  }
                  console.log('response', JSON.stringify(r));
				          tFinishArrivalInstructionsArray[artPiecesCounterReference] = ((performance.now() - tExperimentBegin)/ 1000).toFixed(2);
                  navigation.navigate("ArtPieces")
                }}
				title={"צלמ/י"}
				>
			</Button>
		  </View>
	  </View>

      <StatusBar style="auto" />
    </View>    
    
  );
}


const styles = StyleSheet.create({

	camera: {
		flex: 1,
		justifyContent: 'space-evenly',
		width: 700
	  },
	  buttonContainer: {
		width: 200,
	  	height: 50,
		paddingTop: 5,
		backgroundColor: 'transparent',
		borderColor: 'black',
		borderWidth: 1,
		flexDirection: 'row',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 20,
	  },
	  button: {
		flex: 1,
		alignSelf: 'flex-end',
		alignItems: 'center',
	  },
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
      color: "lightblue",            
    },

    text: {
        fontWeight:'bold',
        fontSize:15,
        textDecorationLine: 'underline',
    },

    attributes: {
        backgroundColor:"orange",
        fontSize:20,
        marginTop:20,
    },
  });
  