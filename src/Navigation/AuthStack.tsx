import React, { FC } from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Login from "../Screens/Auth/Login";
import Register from "../Screens/Auth/Register";
import Phone from "../Screens/Auth/Phone";
import OTP from "../Screens/Auth/OTP";
import ForgotPassword from "../Screens/Auth/ForgotPassword";

const AuthStack = createStackNavigator();

const AuthStackScreen: FC = ({navigation}) => {
    return (
        
            <AuthStack.Navigator  headerMode="None" initialRouteName="Login" >
                <AuthStack.Screen name="Login" component={Login} />
                <AuthStack.Screen name="Register" component={Register} />
                <AuthStack.Screen name="Phone" component={Phone} />
                <AuthStack.Screen name="OTP" component={OTP} />
                <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
            </AuthStack.Navigator>
        
    )
}

export default AuthStackScreen