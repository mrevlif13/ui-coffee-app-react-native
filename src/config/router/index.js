import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash,
    Home,
    ChatScreen,
    CSatu,
    CDua,
    CTiga,
    CEmpat,
    CLima, 
    CEnam,
    BSatu,
} from '../../components/pages';

const Stack = createStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false}} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
            <Stack.Screen name="CSatu" component={CSatu} options={{ headerShown: false}} />
            <Stack.Screen name="CDua" component={CDua} options={{ headerShown: false}} />
            <Stack.Screen name="CTiga" component={CTiga} options={{ headerShown: false}} />
            <Stack.Screen name="CEmpat" component={CEmpat} options={{ headerShown: false}} />
            <Stack.Screen name="CLima" component={CLima} options={{ headerShown: false}} />
            <Stack.Screen name="CEnam" component={CEnam} options={{ headerShown: false}} />
            <Stack.Screen name="BSatu" component={BSatu} options={{ headerShown: false}} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false}} />
        </Stack.Navigator>
    );
};

export default Router;