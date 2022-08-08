import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStackScreen from "./AuthStack";
import MainTab from "./MainTab";

const AppStack = createStackNavigator();

const AppNavigator: FC = ({props}) => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none" initialRouteName="Login">
                <AppStack.Screen name="Auth" component={AuthStackScreen} />
                <AppStack.Screen name="MainTab" component={MainTab} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator;