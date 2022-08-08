import React, { FC, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Dimensions, TextInput, Image } from "react-native";
import * as yup from 'yup';
import { Formik } from "formik";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-ionicons'

import SignInValidationSchema from "../../Schema/SignInValidationSchema";

const { width } = Dimensions.get('window')

const Login: FC<Props> = (props)=> {

    const [eyeTouched, setEyeTouched] = useState(false)
    const [rememberMe, setRememberMe] = useState(false);

    return (

        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={SignInValidationSchema}
        >
            {({ values, errors, setFieldTouched, touched, handleChange, isValid, handleSubmit }) => (
                <View style={styles.main} >

                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../../CommonConfig/Assets/Icon/Order.png')}
                            style={styles.image}
                            resizeMode='contain'
                        />
                    </View>
                    <StatusBar barStyle="default" hidden={true} animated={true} />

                    <Text style={{ color: 'purple', paddingVertical: 10 }}>Email id</Text>

                    <View style={styles.done} >

                        <TextInput
                            value={values.email}
                            style={styles.customCss}
                            onBlur={() => setFieldTouched('email')}
                            onChangeText={handleChange('email')}
                            placeholder="E-mail"
                            color="black"
                            keyboardType='email-address'
                        />
                        <View style={{ marginRight: 10 }} >
                            {touched.email && !errors.email && <Feather name="check-circle" color="green" size={20} />}
                        </View>
                    </View>

                    {touched.email && errors.email &&
                        <Text style={styles.emailError}>{errors.email}</Text>
                    }

                    <Text style={{ color: 'purple', paddingVertical: 10 }} >Password</Text>

                    <View style={styles.doning} >

                        <TextInput
                            value={values.password}
                            style={styles.customCss}
                            placeholder="Password"
                            color="black"
                            onBlur={() => setFieldTouched('password')}
                            onChangeText={handleChange('password')}
                            secureTextEntry={eyeTouched ? false : true}
                        />
                        <TouchableOpacity onPress={() => setEyeTouched(!eyeTouched)} style={{ marginRight: 10 }} >
                            {!eyeTouched ?
                                <Image source={require('../../CommonConfig/Assets/Icon/eye_close.png')} style={{ height: 20, width: 20, marginTop: 15, tintColor: 'purple', }} />
                                :
                                <Image source={require('../../CommonConfig/Assets/Icon/eye.png')} style={{ height: 20, width: 20, marginTop: 15, tintColor: 'purple' }} />
                                }
                        </TouchableOpacity>
                    </View>

                    {touched.password && errors.password &&
                        <Text style={styles.emailError}>{errors.password}</Text>
                    }

                    <View style={styles.rememberContainer} >

                        <View style={styles.flexing} >
                            <TouchableOpacity onPress={() => { setRememberMe(!rememberMe) }}  style={{marginBottom:10}}>
                                {rememberMe ? 
                                <Image source={ require('../../CommonConfig/Assets/Icon/unchecked.png') } style={{ height: 20, width: 20, marginTop: 15, tintColor: 'purple' }}  /> 
                                : 
                                <Image source={ require('../../CommonConfig/Assets/Icon/filled-checked.png') } style={{ height: 20, width: 20, marginTop: 15, tintColor: 'purple' }}  /> 
                                }
                            </TouchableOpacity>
                            <Text style={styles.remember}> Remember me </Text>
                        </View>

                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('ForgotPassword')
                        }} >
                            <Text style={styles.forgot_password}> Forgot Password ? </Text>
                        </TouchableOpacity>

                    </View>

                </View>
            )}

        </Formik>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    customCss: {
        padding: 5,
        marginBottom: 12,
        marginTop: 5,
        width: '100%',
        borderBottomWidth: 0.5
    },
    emailError: {
        fontSize: 11,
        color: 'red',
        paddingVertical: 5
    },
    doning: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    rememberContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    flexing:{
        flexDirection:'row',
        alignItems:'center',
    },
    remember: {
        height: 20,
        textAlign: 'left',
        fontSize: 14,
        color: 'black',

    },
    image: {
        width: 400,
        height: 400,
    },
    imageContainer:{
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Login