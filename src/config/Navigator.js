
import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Register from '../Pages/register/Register';
import Login from '../Pages/login/Login';
import Home from '../Pages/home/Home';
import Checkout from '../Pages/checkout/Checkout';
import Mehran from '../Pages/mehran/Mehran';
import Pizza from '../Pages/pizza/Pizza';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Navigator() {
    const [user, setUser] = useState('')

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(true)
            } else {
                setUser(false)
            }
        });
    })
    return (
        <NavigationContainer>
            {
                user ?
                    <Drawernavigator />
                    :
                    <Stacknavigator />
            }
        </NavigationContainer>
    )
}

function Stacknavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
    )
}
function Drawernavigator() {
    const Drawer = createDrawerNavigator();

    return (
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={ResturantNavigator} />
                <Drawer.Screen name='Checkout' component={Checkout} />
            </Drawer.Navigator>

    )
}


function ResturantNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='abc' component={Home} />
            <Stack.Screen name='Mehran' component={Mehran} />
            <Stack.Screen name='Pizza' component={Pizza} />
        </Stack.Navigator>
    )
}