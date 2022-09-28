import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { login } from '../../config/firebase'

export default function Login({ navigation }) {
  const [form, setForm] = useState({})
  
  const updateForm = (e, key) => {
    setForm({...form, [key] : e })
  }
   
  const signin = async () => {
    try {
      let { email, password } = form
      await login(email, password)
      alert("logged in")
      navigation.navigate('Home')
    } catch (e) {
      alert(e.message)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.text}>Welcome!!</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.box}>
          <TextInput placeholder='Email' keyboardType='email-address' style={styles.input} onChangeText={(e) => updateForm(e, 'email')} />
        </View>
        <View style={styles.box}>
          <TextInput placeholder='Password' style={styles.input} onChangeText={(e) => updateForm(e, 'password')} secureTextEntry={true}  autoCapitalize="none"  />
        </View>
        <TouchableOpacity style={styles.btn1} onPress={signin} >
          <Text style={styles.log}>Login</Text>
        </TouchableOpacity>
        <View style={styles.info}>
          <Text style={styles.txt}>Don't have an account?</Text>
        </View>
        <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.reg}>Register</Text>
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
    // justifyContent: 'center',
    // alignItems: 'center'
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
    backgroundColor: '#D70F64'
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
    fontSize: 17,
    color: '#D70F64'
  },
  log: {
    fontSize: 17,
    color: 'white'
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