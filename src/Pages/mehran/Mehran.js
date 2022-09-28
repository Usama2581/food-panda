import { StyleSheet, Text, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Mehran() {
  return (

    <ScrollView style={styles.container}>
      <ScrollView style={styles.flat}>
        <Image source={require('../../../assets/m1.jpg')} style={styles.img}>
        </Image>
        <Text style={styles.txt}>Kit kat shake Rs. 320</Text>
      </ScrollView>
      <ScrollView style={styles.flat}>
        <Image source={require('../../../assets/m2.jpg')} style={styles.img}>
        </Image>
        <Text style={styles.txt}>3 Bucket of 1 liter gelato Rs.1300</Text>
      </ScrollView>
      <ScrollView style={styles.flat}>
        <Image source={require('../../../assets/m3.jpg')} style={styles.img}>
        </Image>
        <Text style={styles.txt}>Kit kat shake Rs. 280</Text>
      </ScrollView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  flat: {
    margin: 20
  },
  img: {
    width: 350,
    height: 350
  },
  txt: {
    fontSize: 16
  }
})
//cheese and pepperoni pizza
// veggie lover pizza
//malai tikka pizza
// italian light pizza

 //special falooda
//kit kat shake
//