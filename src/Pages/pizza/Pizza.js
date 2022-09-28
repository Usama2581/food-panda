import { StyleSheet, Text, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Pizza() {
    return (
        <ScrollView style={styles.container}>
            <ScrollView style={styles.flat}>
                <Image source={require('../../../assets/cheese.jpg')} style={styles.img}></Image>
                <Text style={styles.txt}>Cheese pizza Rs. 370</Text>
            </ScrollView>
            <ScrollView style={styles.flat}>
                <Image source={require('../../../assets/malai.jpg')} style={styles.img}></Image>
                <Text style={styles.txt}>Malai pizza Rs. 999</Text>
            </ScrollView>
            <ScrollView style={styles.flat}>
                <Image source={require('../../../assets/veg.png')} style={styles.img}></Image>
                <Text style={styles.txt}>Vegetable pizza Rs. 890</Text>
            </ScrollView>
            <ScrollView style={styles.flat}>
                <Image source={require('../../../assets/italian.jpg')} style={styles.img}></Image>
                <Text style={styles.txt}>Italian pizza Rs. 1179</Text>
            </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
     width: '100%',
     height: '100%',
     flexDirection: 'column',
     marginTop: 0
    },
    img: {
        width: '100%',
        height: 350
    },
    flat: {
        margin: 30
    },
    txt: {
        fontSize: 16
    }
})

//cheese 370
//italian 800
//malai 999