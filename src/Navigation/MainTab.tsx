import React, { FC } from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from "../Screens/Tab/Home";
import Schedule from "../Screens/Tab/Schedule";
import Chat from "../Screens/Tab/Chat";
import Payment from "../Screens/Tab/Payment";
import Profile from "../Screens/Tab/Profile";

const Tab = createBottomTabNavigator();

const MainTab: FC = () => {
   const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route)
   }
   return (
    <Tab.Navigator tabBarOptions={{activeTintColor:'purple'}}>
        <Tab.Screen 
        name="Home"
        component={Home}
        options={ ({route}) => ({
            tabBarVisible: getTabBarVisibility(route),
            tabBarIcon: ({focused,}) => (
                < Image source={require('../CommonConfig/Assets/Icon/home1.png')} style={{ height: 20, width: 20, marginTop: 15, tintColor: focused ? 'purple' : 'grey' }} /> 
            )
        })}
        />

        <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{ 
            tabBarIcon: ({ focused }) => (
                < Image source={require('../CommonConfig/Assets/Icon/schedule.png')} style={{ height: 20, width: 20, marginTop: 15, tintColor: focused ? 'purple' : 'grey' }} /> 
            )
         }}
        />

        <Tab.Screen
        name="Chat"
        component={Chat}
        options={{ 
            tabBarIcon: ({ focused }) => (
                < Image source={require('../CommonConfig/Assets/Icon/chat.png')} style={{ height: 20, width: 20, marginTop: 15, tintColor: focused ? 'purple' : 'grey' }} /> 
            )
         }}
        />

        <Tab.Screen
        name="Payment"
        component={Payment}
        options={{ 
            tabBarIcon: ({ focused }) => (
                < Image source={require('../CommonConfig/Assets/Icon/wallet.png')} style={{ height: 20, width: 20, marginTop: 15, tintColor: focused ? 'purple' : 'grey' }} /> 
            )
         }}
        />

        <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ 
            tabBarIcon: ({ focused }) => (
                < Image source={require('../CommonConfig/Assets/Icon/user.png')} style={{ height: 20, width: 20, marginTop: 15, tintColor: focused ? 'purple' : 'grey' }} /> 
            )
         }}
        />

    </Tab.Navigator>
   )
}

export default MainTab;

const HomeStack = createStackNavigator();
const HomeStackScreen: FC = () => {
    return (
        <HomeStack.Navigator headerMode="none">
            <HomeStack.Screen 
                name="Home"
                component={Home}
                options={{
                    headerLeft: () => null,
                    color:'purple'
                }}
            />
        </HomeStack.Navigator>
    )
}


const ScheduleStack = createStackNavigator();
const ScheduleStackScreen: FC = () => {
    return (
        <ScheduleStack.Navigator headerMode="none">
            <ScheduleStack.Screen 
                name="Schedule"
                component={Schedule}
                options={{
                    headerLeft: () => null,
                    color:'purple'
                }}
            />
        </ScheduleStack.Navigator>
    )
}