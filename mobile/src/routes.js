import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStsack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';


export default function Routes() {
    return (
        <NavigationContainer>
            <AppStsack.Navigator screenOptions={{ headerShown: false }} >
                <AppStsack.Screen name="Incidents" component={Incidents} />
                <AppStsack.Screen name="Detail" component={Detail} />
            </AppStsack.Navigator>
        </NavigationContainer>
    );
}