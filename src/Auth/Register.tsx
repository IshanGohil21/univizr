import React, {FC} from "react";
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Dimensions } from "react-native";

// const { width } = Dimensions.get('window')

const Register: FC = (props) => {
    return (
        <View style={styles.main} >
            <StatusBar barStyle="default" />
            {/* Header */}
            {/* <View style={styles.heading} > */}
            <TouchableOpacity onPress={() => props.navigation.goBack()} >
                <Text >Register</Text>
            </TouchableOpacity>
            {/* </View> */}

            {/* <View style={styles.body} >
                
            </View> */}
        </View>
    )
}


const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue'
    },
    header:{
        fontSize:20,
        fontWeight:'bold',
        padding:40,
    },
    heading:{
       flex:1,
       elevation:5,
       width:'100%',
       alignItems:'center'
    },
    body:{
        flex:3,
    }
})

export default Register