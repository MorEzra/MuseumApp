import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Camera } from 'expo-camera';

const CameraButton = (props) =>{  
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

	return (<View style={styles.container}>
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
                }}
				title={"TAKE PICTURE"}
				>
			</Button>
		  </View>
	  </View>);
};
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      justifyContent: 'space-evenly',
	  flex: 1
    },
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
	  text: {
		fontSize: 50,
		color: 'white',
	  },
    header: {
      textDecorationLine:'underline',
      fontSize:20,
      fontWeight:"bold",
      color: "lightblue",            
    },

  });

export default CameraButton
