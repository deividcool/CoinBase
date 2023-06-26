import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Home from "../screen/Home";
import Settings from "../screen/Settings";
import Actions from "../screen/Actions";
import News from "../screen/News";
import Portfolio from "../screen/Portfolio";
import Prices from "../screen/Prices";

import TabBar from "../components/TabBar";

const HomeStackNavigator = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <HomeStackNavigator.Navigator>
            <HomeStackNavigator.Screen name="Home" component={Home} />
            <HomeStackNavigator.Screen name="News" component={News} />
        </HomeStackNavigator.Navigator>
    );
};

const TabBarNavigator = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <TabBarNavigator.Navigator tabBar={(props) => <TabBar {...props} />}>
            <TabBarNavigator.Screen name="Home" component={Home} />
            <TabBarNavigator.Screen name="Portfolio" component={Portfolio} />
            <TabBarNavigator.Screen name="Actions" component={Actions} />
            <TabBarNavigator.Screen name="Prices" component={Prices} />
            <TabBarNavigator.Screen name="Settings" component={Settings} />
        </TabBarNavigator.Navigator>
    )
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator;