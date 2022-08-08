import React, { FC } from "react";
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
            tabBarIcon: ({color}) => (
                <Ionicons name='home' size={24} color={color} />   
            )
        })}
        />

        <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{ 
            tabBarIcon: ({ color }) => (
                <Ionicons name ="calendar-outline" size={24} color={color} />
            )
         }}
        />

        <Tab.Screen
        name="Chat"
        component={Chat}
        options={{ 
            tabBarIcon: ({ color }) => (
                <Ionicons name ="chatbox-ellipses" size={24} color={color} />
            )
         }}
        />

        <Tab.Screen
        name="Payment"
        component={Payment}
        options={{ 
            tabBarIcon: ({ color }) => (
                <Ionicons name ="wallet" size={24} color={color} />
            )
         }}
        />

        <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ 
            tabBarIcon: ({ color }) => (
                <Ionicons name ="person" size={24} color={color} />
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