import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <View>
      <Text>Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style= {{color: 'blue'}}>Login</Link>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})