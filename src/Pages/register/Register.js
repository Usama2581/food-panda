import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { register } from '../../config/firebase'

export default function Register({ navigation }) {

  const [form, setForm] = useState({})

  const updateForm = (e, key) => {
    setForm({ ...form, [key]: e })
  }

  const signin = async () => {
    try {
      await register(form)
      alert("registered successfully")
      navigation.navigate('Login')
    } catch (e) {
      alert(e.message)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.text}>Register Now!!</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.box}>
          <TextInput placeholder='Name' style={styles.input}  onChangeText={(e) => updateForm(e, 'name')} />
        </View>
        <View style={styles.box}>
          <TextInput placeholder='Email' style={styles.input}  onChangeText={(e) => updateForm(e, 'email')} />
        </View>
        <View style={styles.box}>
          <TextInput placeholder='Password' style={styles.input} secureTextEntry={true} autoCapitalize='none' onChangeText={(e) => updateForm(e, 'password')}  />
        </View>
        <TouchableOpacity style={styles.btn1} onPress={signin}>
          <Text style={styles.reg}>Register</Text>
        </TouchableOpacity>
        <View style={styles.info} >
          <Text>Already have an account?</Text>
        </View>
        <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.log}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#D70F64',
    boxSizing: 'border-box'
  },
  text: {
    color: 'white',
    fontSize: 30,
    marginLeft: 30,
    paddingBottom: 10
  },
  head: {
    flex: 1.5,
    backgroundColor: '#D70F64',
    justifyContent: 'flex-end'
  },
  form: {
    flex: 3,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 30
  },
  box: {
    marginLeft: 30,
    marginRight: 30
  },
  input: {
    borderWidth: 2,
    borderColor: '#D70F64',
    padding: 10,
    marginTop: 30,
    fontSize: 17
  },
  btn1: {
    marginLeft: 30,
    marginRight: 30,
    fontSize: 18,
    marginTop: 30,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D70F64',
  },
  btn2: {
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 2,
    borderColor: '#D70F64',
    marginTop: 30,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  reg: {
    color: 'white',
    fontSize: 17,
  },
  log: {
    fontSize: 17,
    color: '#D70F64'
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: 15,
  },
  txt: {
    fontSize: 15
  }
})