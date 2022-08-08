import React, { FC } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import Login from "../src/Auth/Login";
import Register from "../src/Auth/Register";
import Phone from "../src/Auth/Phone";
import OTP from "../src/Auth/OTP";
import ForgotPassword from "../src/Auth/ForgotPassword";

const AuthStack = createStackNavigator();

const AuthStackScreen: FC = ({navigation}) => {
    return (
        <NavigationContainer>
            <AuthStack.Navigator  headerMode="None" initialRouteName="Login" >
                <AuthStack.Screen name="Login" component={Login} />
                <AuthStack.Screen name="Register" component={Register} />
                <AuthStack.Screen name="Phone" component={Phone} />
                <AuthStack.Screen name="OTP" component={OTP} />
                <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
            </AuthStack.Navigator>
        </NavigationContainer>
    )
}

export default AuthStackScreen