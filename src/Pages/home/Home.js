import { StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'


export default function Home({ navigation }) {

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.flat} onPress={() => navigation.navigate("Mehran")}>
                <Image source={require('../../../assets/mehran.jpg')} style={styles.img}></Image>
                <Text style={styles.txt}>Mehran Ice cream</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.flat} onPress={() => navigation.navigate('Pizza')} >
                <Image source={require('../../../assets/pizza.jpg')} style={styles.img}></Image>
                <Text style={styles.txt}>Pizza point</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flat}>
                <Image source={require('../../../assets/burger.jpg')} style={styles.img}></Image>
                <Text style={styles.txt}>Burger 0 Clock</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    flat: {
        flexDirection: 'column',
        margin: 20
    },
    img: {
        width: '100%',
        height: 250
    },
    txt: {
        fontSize: 17
    }
    
})