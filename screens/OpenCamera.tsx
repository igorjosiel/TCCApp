import React, {useState} from 'react';
import { SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';

export default function OpenCamera() {
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState(null);

    return <SafeAreaView style={styles.container}>
        <Camera style={styles.camera} type={type}></Camera>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',        
    },
    camera: {
        width: "100%",
        heigth: "100%",
    }
})