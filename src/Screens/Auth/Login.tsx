import React, {FC} from "react";
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Dimensions } from "react-native";

const { width } = Dimensions.get('window')

const Login: FC = (props) => {
    // console.log(props);
    return (
        <View style={styles.main} >
            <StatusBar barStyle="default" />

            {/* Header */}

            <View style={styles.heading} >

            <TouchableOpacity onPress={() => {
                props.navigation.navigate('Register')
            }}>
                <Text style={styles.header}>Login</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.body} >
                <TouchableOpacity onPress={() => {props.navigation.navigate('MainTab' ,{ screen :'Home'} )} } >
                    <Text style={styles.navigateTest} >Navigate to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    heading:{
        elevation:5,
        width:width,
        alignItems:'center',
        padding:15,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    },
    header:{
        fontSize: 20, 
        fontWeight: 'bold',
    },
    body:{
        flex:3,
        backgroundColor:'yellow',
        width:width
    },
    navigateTest:{
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Login